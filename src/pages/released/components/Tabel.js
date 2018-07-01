import { Table, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const columns = [
  {
    title: '会议名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '开始时间',
    dataIndex: 'confBeginDate',
    key: 'age'
  },
  {
    title: '截稿时间',
    dataIndex: 'ddlDate',
    key: 'address'
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>编辑</a>
        <Divider type="vertical" />
        <a style={{ color: 'red' }}>删除</a>
      </span>
    )
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  },
  {
    key: '2',
    name: 'Jim Green',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  },
  {
    key: '3',
    name: 'Joe Black',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  }
]

const T = styled(InjectClass(Table))`
  margin: 12px;
  & .ant-table-thead > tr > th {
    background: transparent;
  }
`
const MyTabel = () => {
  return (
    <T
      pagination={false}
      style={{ margin: 12 }}
      columns={columns}
      dataSource={data}
    />
  )
}

export default MyTabel
