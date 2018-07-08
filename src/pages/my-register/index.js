import React, { Component } from 'react'
import { getMyRegister } from './services/my-register'
import TitleCard from 'CP/TitleCard'
import Loading from 'CP/Loading'
import Tabel from './components/Table'

class Papers extends Component {
  state = {
    data: {},
    loading: true
  }
  async componentDidMount() {
    const { data } = await this.fetch()
    this.setState({ data, loading: false })
  }
  fetch() {
    return getMyRegister({ confId: this.props.match.params.id })
  }
  render() {
    const { loading, data = {} } = this.state
    return loading ? (
      <Loading />
    ) : (
      <TitleCard
        title={`已注册会议`}
        subtitle="查看用户已经申请注册的会议"
        hasAdd={false}
      >
        <Tabel list={data.getEntry || []} />
      </TitleCard>
    )
  }
}

export default Papers
