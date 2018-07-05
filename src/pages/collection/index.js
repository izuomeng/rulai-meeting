import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from './components/MeetingList'
import Loading from 'CP/Loading'
import { Icon, message } from 'antd'
import { getAllCollections, unstar } from './services/collection'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <a
      onClick={() => props.handleDelete(props.meeting || {})}
      style={{ color: 'red' }}
    >
      <Icon type="star-o" style={{ marginRight: '8px' }} />取消收藏
    </a>
  </React.Fragment>
)

class Collection extends React.Component {
  handleDelete = async meeting => {
    await unstar(meeting.id)
    message.success('取消成功')
  }
  render() {
    const {
      data: { data = {} },
      loading
    } = this.props
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <MeetingList
            extra={props => (
              <Extra {...props} handleDelete={this.handleDelete} />
            )}
            items={data.items}
          />
        )}
      </Container>
    )
  }
}

export default RestClient(getAllCollections, 1)(Collection)
