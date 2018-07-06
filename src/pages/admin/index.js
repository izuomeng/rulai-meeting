import React, { Component } from 'react'
import { getRegisterList, updateConf } from './services/admin'
import { message } from 'antd'
import TitleCard from 'CP/TitleCard'
import Loading from 'CP/Loading'
import Tabel from './components/Tabel'

class Admin extends Component {
  state = {
    list: [],
    loading: true
  }
  async componentDidMount() {
    const {
      data: { data }
    } = await this.fetch()
    this.setState({ list: data.items, loading: false })
  }
  handleCheck = async (conf, pass) => {
    await updateConf({ confId: conf.id, organizationStatus: pass })
    message.success('评审成功')
    const {
      data: { data }
    } = await this.fetch()
    this.setState({ list: data.items })
  }
  fetch() {
    return getRegisterList()
  }
  render() {
    const { loading, list } = this.state
    return loading ? (
      <Loading />
    ) : (
      <TitleCard
        title="机构注册管理"
        subtitle="查看申请注册的机构，审批注册结果"
        hasAdd={false}
      >
        <Tabel handleCheck={this.handleCheck} list={list} />
      </TitleCard>
    )
  }
}

export default Admin
