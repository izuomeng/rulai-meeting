import { Table, Modal, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const columns = ({ handlePass, handleReject }) => [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '性别', dataIndex: 'sex', key: 'sex' },
  { title: '身份证号', dataIndex: 'realid', key: 'realid' },
  { title: '论文ID', dataIndex: 'paperid', key: 'paperid' },
  { title: '状态', dataIndex: 'handleStatus', key: 'handleStatus' },
  {
    title: '缴费凭证',
    key: 'proof',
    render: (_, record) =>
      record.proof[0] &&
      record.proof[0].storagePath && (
        <a
          href={`/dapi/download/file?url=${encodeURIComponent(
            record.proof[0].storagePath
          )}`}
        >
          下载
        </a>
      )
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a onClick={() => handlePass(record)}>接受</a>
        <Divider type="vertical" />
        <a onClick={() => handleReject(record)} style={{ color: 'red' }}>
          拒绝
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
  handlePass = current => {
    Modal.confirm({
      title: '确定通过吗',
      onOk: () => {
        this.props.handleCheck(current, 'Accepted')
      }
    })
  }
  handleReject = current => {
    Modal.confirm({
      title: '确定拒绝吗',
      onOk: () => {
        this.props.handleCheck(current, 'Rejected')
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <T
          pagination={false}
          columns={columns({
            handlePass: this.handlePass,
            handleReject: this.handleReject
          })}
          dataSource={this.props.list}
          rowKey="id"
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default MyTabel
