import React, { Component } from 'react'
import { getMeetingInfo } from '../services/release'

class MeetingInfo extends Component {
  state = {
    defaultInfo: {}
  }
  componentDidMount() {
    this.fetch()
  }
  async fetch() {
    const { data } = await getMeetingInfo(this.props.confId)
    this.setState({ defaultInfo: data })
  }
  render() {
    return <div>defaultInfo</div>
  }
}

export default MeetingInfo
