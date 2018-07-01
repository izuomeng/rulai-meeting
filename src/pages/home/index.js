import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import { Spin, Icon } from 'antd'
import MeetingList from '@/components/MeetingList'
import { getAllMeetings } from './services/meeting'

const Container = styled.div`
  display: block;
`

const L = ({ className }) => (
  <div className={className}>
    <Spin indicator={<Icon type="loading" style={{ fontSize: 40 }} spin />} />
  </div>
)
const Loading = styled(L)`
  text-align: center;
  margin-top: calc(50vh - 40px);
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
