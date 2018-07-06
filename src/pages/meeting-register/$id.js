import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import TitleCard from 'CP/TitleCard'
import Loading from 'CP/Loading'
import { message } from 'antd'
import { getPaticipants, updateStatus } from './services/meeting'
import Tabel from './components/Tabel'

class MeetingRegister extends Component {
  state = {
    list: [],
    loading: true
  }
  componentDidMount() {
    this.fetch()
  }
  async fetch() {
    const { data } = await getPaticipants({
      confId: this.props.match.params.id
    })
    const list = data.entryList.items.map(item => ({
      ...item,
      ...item.participants[0]
    }))
    this.setState({ list, loading: false })
  }
  handleCheck = async (info, pass) => {
    await updateStatus({ entryId: info.entryId, handleStatus: pass })
    message.success('审核成功')
    this.fetch()
  }
  render() {
    const { location } = this.props
    const { loading, list } = this.state
    return loading ? (
      <Loading />
    ) : (
      <TitleCard
        title={`会议"${location.query.title}"注册人员列表`}
        subtitle="查看会议已注册人员列表，并审批结果"
        hasAdd={false}
      >
        <Tabel handleCheck={this.handleCheck} list={list} />
      </TitleCard>
    )
  }
}

export default withRouter(MeetingRegister)
