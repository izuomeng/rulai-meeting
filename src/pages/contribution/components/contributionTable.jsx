import { Table, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import getContribution from '../services/contributionMessage'
import { RestClient } from '@/utils/HOC'

const columns = ({ handleResult }) => [
  { title: '论文名称', dataIndex: 'title', key: 'name' },
  { title: '投稿时间', dataIndex: 'date', key: 'date' },
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
        <a onClick={this.handleClick}>修改</a>
        <Divider type="vertical" />
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
    visible: false
  }
  handleResult = result => {
    this.setState({ visible: true })
  }
  //   handleOk = () => {
  //     const { data, current } = this.state
  //     const newData = data.map(
  //       item =>
  //         item.id === current.id ? { ...item, state: current.state } : item
  //     )
  //     this.setState({ visible: false, data: newData })
  //   }
  //   handleCancel = () => {
  //     this.setState({ visible: false })
  //   }
  //   handleResultChange = e => {
  //     this.setState({ current: { ...this.state.current, state: e.target.value } })
  //   }
  render() {
    const { loading, data } = this.props

    console.info(data)
    return (
      <React.Fragment>
        {!loading && (
          <T
            pagination={false}
            columns={columns({ handleResult: this.handleResult })}
            dataSource={data.judgeDetail}
            rowKey="id"
            {...this.props}
          />
        )}
      </React.Fragment>
    )
  }
}

export default RestClient(getContribution)(MyTabel)
