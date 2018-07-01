import React from 'react'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { getReleasedMeetings } from './services/release'

class Released extends React.Component {
  render() {
    const {
      data: { items },
      loading
    } = this.props
    return (
      <React.Fragment>
        {loading ? <Loading /> : <MeetingList items={items} />}
      </React.Fragment>
    )
  }
}

export default RestClient(getReleasedMeetings, 1)(Released)
