import React from 'react'
import styled from 'styled-components'
import MeetingList from './components/MeetingList'
import Loading from 'CP/Loading'
import { Icon, message, Spin } from 'antd'
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
  state = {
    data: {},
    loading: true,
    spinning: false
  }
  componentDidMount() {
    this.fetch()
  }
  async fetch(callback) {
    const {
      data: { data }
    } = await getAllCollections()
    this.setState({ data, loading: false }, callback)
  }
  handleDelete = meeting => {
    this.setState({ spinning: true }, async () => {
      await unstar(meeting.id)
      this.fetch(() => {
        this.setState({ spinning: false })
        message.success('取消成功')
      })
    })
  }
  render() {
    const { data, loading, spinning } = this.state
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Spin spinning={spinning} size="large">
            <MeetingList
              extra={props => (
                <Extra {...props} handleDelete={this.handleDelete} />
              )}
              items={data.items}
            />
          </Spin>
        )}
      </Container>
    )
  }
}

export default Collection
