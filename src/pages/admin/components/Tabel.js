import { Table, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const columns = ({ handleCheck }) => [
  { title: '机构ID', dataIndex: 'id', key: 'id' },
  { title: '机构名称', dataIndex: 'organizationName', key: 'organizationName' },
  { title: '邮箱', dataIndex: 'mail', key: 'mail' },
  { title: '法人信息', dataIndex: 'legalInfo', key: 'legalInfo' },
  { title: '企业信用代码', dataIndex: 'creditCode', key: 'realid' },
  {
    title: '证明附件',
    key: 'attachment',
    render: (text, record) =>
      record.attachmentURLs[0] ? (
        <a
          href={`/dapi/download/file?url=${encodeURIComponent(
            record.attachmentURLs[0]
          )}`}
        >
          下载
        </a>
      ) : null
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span style={{ display: 'inline-block', width: 100 }}>
        <a onClick={() => handleCheck(record, true)}>通过</a>
        <Divider type="vertical" />
        <a onClick={() => handleCheck(record, false)} style={{ color: 'red' }}>
          不通过
        </a>
      </span>
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
    const { handleCheck, handleDownload } = this.props
    return (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns({ handleCheck, handleDownload })}
          dataSource={this.props.list}
          rowKey="id"
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default MyTabel
