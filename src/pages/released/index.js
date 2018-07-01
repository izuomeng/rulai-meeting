import React from 'react'
import { RestClient } from '@/utils/HOC'
import Loading from '@/components/Loading'
import TitleCard from './components/TitleCard'
import { getReleasedMeetings } from './services/release'
import Tabel from './components/Tabel'

class Released extends React.Component {
  render() {
    const {
      data: { items },
      loading
    } = this.props
    console.log(items)
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <TitleCard>
            <Tabel />
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

export default RestClient(getReleasedMeetings, 1)(Released)
