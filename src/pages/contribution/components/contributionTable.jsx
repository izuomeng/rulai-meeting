import { Table, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass, RestClient } from '@/utils/HOC'
import L from 'CP/Loading'
import getContribution from '../services/contributionMessage'
import Message from './message'

const Loading = L.extend`
  margin-top: 20px;
`

const filterState = state => ['未通过', '待审核', '已通过', '修改后通过'][state]
const columns = ({ handleResult }) => [
  {
    title: '论文编号',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '论文名称',
    dataIndex: 'title',
    key: 'name',
    render: (text, record) => (
      <div style={{ maxWidth: 200 }}>{record.title}</div>
    )
  },
  {
    title: '投稿会议',
    dataIndex: 'conferenceTitle',
    key: 'organization'
  },
  {
    title: '状态',
    dataIndex: 'judgeStatus',
    key: 'state',
    render: (text, record) => <span>{filterState(record.judgeStatusInt)}</span>
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) =>
      record.judgeStatusInt === 3 && (
        <a onClick={() => handleResult(record)}>修改</a>
      )
  }
]

const T = styled(InjectClass(Table))`
  margin: 12px 0;
  & .ant-table-thead > tr > th {
    background: transparent;
  }
`

class MyTabel extends React.Component {
  state = {
    visible: false,
    current: {}
  }
  handleResult = result => {
    this.setState({ visible: true, current: result })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  render() {
    const { loading, data } = this.props
    const { visible } = this.state
    return loading ? (
      <Loading />
    ) : (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns({ handleResult: this.handleResult })}
          dataSource={data.judgeDetail}
          rowKey="id"
          {...this.props}
        />

        <Modal
          title="提交论文修改"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Message
            paperId={this.state.current.id}
            onCancel={this.handleCancel}
            opinion={this.state.current.opinion}
          />
        </Modal>
      </React.Fragment>
    )
  }
}

export default RestClient(getContribution)(MyTabel)
