import { Table } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Link from 'umi/link'
import { InjectClass } from '@/utils/HOC'

const map = {
  Pending: '待处理',
  Accepted: '已接受',
  Rejected: '已拒绝'
}

const columns = [
  { title: '会议ID', dataIndex: 'conferenceId', key: 'id' },
  {
    title: '会议名称',
    key: 'title',
    render: (text, record) => (
      <Link
        style={{ color: 'rgba(0, 0, 0, 0.65)' }}
        to={`/detail/${record.conferenceId}`}
      >
        {record.conferenceName}
      </Link>
    )
  },
  {
    title: '状态',
    key: 'handleStatus',
    render: (_, record) => map[record.handleStatus] || record.handleStatus
  },
  {
    title: '缴费证明',
    key: 'proof',
    render: (_, record) =>
      record.proof[0] && (
        <a
          href={`/dapi/download/file?url=${encodeURIComponent(
            record.proof[0].storagePath
          )}`}
        >
          下载
        </a>
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
  render() {
    return (
      <T
        pagination={false}
        columns={columns}
        dataSource={this.props.list}
        rowKey="conferenceId"
        {...this.props}
      />
    )
  }
}

export default MyTabel
