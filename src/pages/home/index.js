import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { getAllMeetings } from './services/meeting'

const Container = styled.div`
  display: block;
`

class Home extends React.Component {
  render() {
    const {
      data: { items },
      loading
    } = this.props
    return (
      <Container>
        {loading ? <Loading /> : <MeetingList items={items} />}
      </Container>
    )
  }
}

export default RestClient(getAllMeetings, 1)(Home)
