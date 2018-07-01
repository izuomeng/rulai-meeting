import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import { RestClient } from '@/utils/HOC'
import { getPaperList } from './services/papers'
import TitleCard from 'CP/TitleCard'

class Papers extends Component {
  render() {
    const { loading, data, location } = this.props // eslint-disable-line
    return <TitleCard title="会议投稿详情">table</TitleCard>
  }
}

const WrapRest = props => {
  const MyComponent = RestClient(getPaperList, props.match.params.id)(Papers)
  return <MyComponent {...props} />
}

export default withRouter(WrapRest)
