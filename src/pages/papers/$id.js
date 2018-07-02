import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import { RestClient } from '@/utils/HOC'
import { getPaperList } from './services/papers'
import TitleCard from 'CP/TitleCard'
import Tabel from './components/Tabel'

class Papers extends Component {
  render() {
    const { loading, data, location } = this.props // eslint-disable-line
    return (
      <TitleCard
        title="会议投稿详情"
        subtitle="查看会议投稿列表，录入评审结果"
        hasAdd={false}
      >
        <Tabel />
      </TitleCard>
    )
  }
}

const WrapRest = props => {
  const MyComponent = RestClient(getPaperList, props.match.params.id)(Papers)
  return <MyComponent {...props} />
}

export default withRouter(WrapRest)
