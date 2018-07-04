import { Table, Divider, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import getContribution from '../services/contributionMessage'
import { RestClient } from '@/utils/HOC'
import Message from './message'

const columns = ({ handleResult }) => [
  { title: '论文名称', dataIndex: 'title', key: 'name' },

  {
    title: '状态',
    dataIndex: 'judgeStatus',
    key: 'state'
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <React.Fragment>
        {record.judgeStatus === 'Pending' && (
          <React.Fragment>
            <a onClick={() => handleResult(record)}>修改</a>
            <Divider type="vertical" />
          </React.Fragment>
        )}
        <a download="file.jpg" href="data:image/jpeg;base64,/9j/4AAQSk">
          下载
        </a>
      </React.Fragment>
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
  //   handleOk = () => {
  //     const { data, current } = this.state
  //     const newData = data.map(
  //       item =>
  //         item.id === current.id ? { ...item, state: current.state } : item
  //     )
  //     this.setState({ visible: false, data: newData })
  //   }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  //   handleResultChange = e => {
  //     this.setState({ current: { ...this.state.current, state: e.target.value } })
  //   }
  render() {
    const { loading, data } = this.props
    const { visible } = this.state
    return (
      <React.Fragment>
        {!loading && (
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
                paperId={data.judgeDetail[0].id}
                onCancel={this.handleCancel}
              />
            </Modal>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default RestClient(getContribution)(MyTabel)
