import { Table, Divider, Popover } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import Link from 'umi/link'

const D = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: ${props => (props.maxLen ? props.maxLen : 80)}px;
  display: inline-block;
`
const FullD = styled.div`
  max-width: 500px;
`
const Desc = ({ record }) => (
  <Popover content={<FullD>{record.introduction}</FullD>}>
    <D>{record.introduction}</D>
  </Popover>
)

const columns = ({ handleEdit, handleDelete }) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '会议名称',
    key: 'title',
    render: (text, record) => (
      <Link
        style={{ color: 'rgba(0, 0, 0, 0.65)' }}
        to={`/detail/${record.id}`}
      >
        <D maxLen={300}>{record.title}</D>
      </Link>
    )
  },
  {
    title: '会议介绍',
    key: 'introduction',
    render: (text, record) => <Desc record={record} />
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Link to={`/papers/${record.id}?title=${record.title}`}>投稿情况</Link>
        <Divider type="vertical" />
        <a href={`/dapi/download/excel/conference?conference_id=${record.id}`}>
          导出投稿
        </a>
        <Divider type="vertical" />
        <Link to={`/meeting-register/${record.id}?title=${record.title}`}>
          注册情况
        </Link>
        <Divider type="vertical" />
        <a onClick={() => handleEdit(record)}>编辑</a>
        <Divider type="vertical" />
        <a onClick={() => handleDelete(record)} style={{ color: 'red' }}>
          删除
        </a>
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
      columns={columns({
        handleEdit: props.handleEdit,
        handleDelete: props.handleDelete
      })}
      dataSource={props.list}
      rowKey="id"
      {...props}
    />
  )
}

export default MyTabel
