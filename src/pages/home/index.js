import React from 'react'
import Item from './components/Item'
import styled from 'styled-components'
import router from 'umi/router'
import { RestClient } from '@/utils/HOC'
import { Spin, Icon } from 'antd'
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
  onCardClick(id) {
    router.push(`/detail/${id}`)
  }
  render() {
    const {
      data: { items },
      loading
    } = this.props
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          items.map(({ conferenceInfo: item }) => (
            <Item
              handleClick={this.onCardClick.bind(this, item.id)}
              key={item.id}
              meeting={item}
            />
          ))
        )}
      </Container>
    )
  }
}

export default RestClient(getAllMeetings, 1)(Home)
