import { Table, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import Link from 'umi/link'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '会议名称',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '开始时间',
    dataIndex: 'confBeginDate',
    key: 'confBeginDate'
  },
  {
    title: '截稿时间',
    dataIndex: 'ddlDate',
    key: 'ddlDate'
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Link to={`/papers/${record.id}`}>投稿情况</Link>
        <Divider type="vertical" />
        <a>编辑</a>
        <Divider type="vertical" />
        <a style={{ color: 'red' }}>删除</a>
      </span>
    )
  }
]

/* const data = [
  {
    id: '1',
    name: 'John Brown',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  },
  {
    id: '2',
    name: 'Jim Green',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  },
  {
    id: '3',
    name: 'Joe Black',
    confBeginDate: '2018-4-5',
    ddlDate: '2019-5-6'
  }
] */

const T = styled(InjectClass(Table))`
  margin: 12px 0;
  & .ant-table-thead > tr > th {
    background: transparent;
  }
`
const MyTabel = props => {
  return (
    <T
      pagination={false}
      columns={columns}
      dataSource={props.list}
      rowKey="id"
      {...props}
    />
  )
}

export default MyTabel
