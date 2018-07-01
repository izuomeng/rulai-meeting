import { Table, Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const columns = [
  { title: '论文名称', dataIndex: 'name', key: 'name' },
  { title: '投稿时间', dataIndex: 'date', key: 'date' },
  { title: '作者', dataIndex: 'author', key: 'author' },
  { title: '状态', dataIndex: 'state', key: 'state' },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>录入评审结果</a>
      </span>
    )
  }
]

const data = [
  {
    id: '1',
    name: 'John Brown',
    date: '2018-4-5',
    author: 'Wang',
    state: '待审核'
  },
  {
    id: '2',
    name: 'Jim Green',
    date: '2018-4-5',
    author: 'Wang',
    state: '已通过'
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
    visibel: false
  }
  render() {
    return (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns}
          dataSource={data}
          rowKey="id"
          {...this.props}
        />
        <Modal
          title="录入审核结果"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </React.Fragment>
    )
  }
}

export default MyTabel
