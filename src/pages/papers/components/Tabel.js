import { Table, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import LogResult from './LogResult'

const filterState = state => ['未通过', '待审核', '已通过', '通过一半'][state]

const columns = ({ handleResult }) => [
  { title: '论文名称', dataIndex: 'name', key: 'name' },
  { title: '投稿时间', dataIndex: 'date', key: 'date' },
  { title: '作者', dataIndex: 'author', key: 'author' },
  {
    title: '状态',
    key: 'state',
    render: (text, record) => <span>{filterState(record.state)}</span>
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <a onClick={() => handleResult(record)}>评审结果</a>
    )
  }
]

const data = [
  {
    id: '1',
    name: 'John Brown',
    date: '2018-4-5',
    author: 'Wang',
    state: 1 // 待审核
  },
  {
    id: '2',
    name: 'Jim Green',
    date: '2018-4-5',
    author: 'Wang',
    state: 0 // 未通过
  },
  {
    id: '3',
    name: 'Jim Green',
    date: '2018-4-5',
    author: 'Wang',
    state: 2 // 已通过
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
    current: {},
    data
  }
  handleResult = result => {
    this.setState({ visible: true, current: result })
  }
  handleOk = () => {
    const { data, current } = this.state
    const newData = data.map(
      item =>
        item.id === current.id ? { ...item, state: current.state } : item
    )
    this.setState({ visible: false, data: newData })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  handleResultChange = e => {
    this.setState({ current: { ...this.state.current, state: e.target.value } })
  }
  render() {
    const { visible, current } = this.state
    return (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns({ handleResult: this.handleResult })}
          dataSource={this.state.data}
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
            state={current.state}
            handleChange={this.handleResultChange}
          />
        </Modal>
      </React.Fragment>
    )
  }
}

export default MyTabel
