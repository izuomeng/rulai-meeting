import { Table, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import LogResult from './LogResult'

const filterState = state => ['未通过', '待审核', '已通过', '通过一半'][state]

const columns = ({ handleResult }) => [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '论文名称', dataIndex: 'title', key: 'title' },
  { title: '作者', dataIndex: 'firstauthor', key: 'firstauthor' },
  {
    title: '状态',
    key: 'state',
    render: (text, record) => <span>{filterState(record.judgeStatusInt)}</span>
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <React.Fragment>
        <a onClick={() => handleResult(record)}>评审结果</a>
        {/* <Divider type="vertical" />
        <a download="file.jpg" href="data:image/jpeg;base64,/9j/4AAQSk">
          下载
        </a> */}
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
  handleOk = () => {
    const { current } = this.state
    this.props.onCheck({
      paperId: current.id,
      opinion: current.opinion,
      judgeStatusInt: current.judgeStatusInt
    })
    this.setState({ visible: false })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  handleResultChange = e => {
    this.setState({
      current: { ...this.state.current, judgeStatusInt: e.target.value }
    })
  }
  handleOpinionChange = e => {
    this.setState({
      current: { ...this.state.current, opinion: e.target.value }
    })
  }
  render() {
    const { visible, current } = this.state
    return (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns({ handleResult: this.handleResult })}
          dataSource={this.props.list}
          rowKey="id"
          {...this.props}
        />
        <Modal
          title="录入审核结果"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <LogResult
            opinion={current.opinion}
            state={current.judgeStatusInt}
            handleChange={this.handleResultChange}
            handleOpinionChange={this.handleOpinionChange}
          />
        </Modal>
      </React.Fragment>
    )
  }
}

export default MyTabel
