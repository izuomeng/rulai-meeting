import React from 'react'
import { RestClient } from '@/utils/HOC'
import Loading from '@/components/Loading'
import TitleCard from 'CP/TitleCard'
import { getReleasedMeetings } from './services/release'
import Tabel from './components/Tabel'

class Released extends React.Component {
  render() {
    const {
      data: { items },
      loading
    } = this.props
    console.log('会议列表', items)
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <TitleCard
            title="已发布会议"
            subtitle="查看和编辑已发布会议，新建会议"
          >
            <Tabel />
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

export default RestClient(getReleasedMeetings, 1)(Released)
