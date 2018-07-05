import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import { getPaperList, updatePaperStatus } from './services/papers'
import TitleCard from 'CP/TitleCard'
import Loading from 'CP/Loading'
import Tabel from './components/Tabel'

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
    return getPaperList({ confId: this.props.match.params.id })
  }
  handleCheckResult = async data => {
    await updatePaperStatus(data)
    this.fetch()
  }
  render() {
    const { location } = this.props
    const { loading, data = {} } = this.state
    return loading ? (
      <Loading />
    ) : (
      <TitleCard
        title={`会议"${location.query.title}"投稿详情`}
        subtitle="查看会议投稿列表，录入评审结果"
        hasAdd={false}
      >
        <Tabel
          list={data.paperList.items || []}
          onCheck={this.handleCheckResult}
        />
      </TitleCard>
    )
  }
}

export default withRouter(Papers)
