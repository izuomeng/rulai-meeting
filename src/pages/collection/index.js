import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { Icon, Button } from 'antd'
import { getAllCollections } from './services/collection'
import { deleteCollection } from './services/deleteCollection'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <Button type="danger" onClick={props.handleDelete}>
      <Icon type="close-circle-o" style={{ marginRight: '8px' }} />删除
    </Button>
  </React.Fragment>
)

class Collection extends React.Component {
  handleDelete = () => {
    deleteCollection()
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
          <MeetingList
            extra={<Extra handleDelete={this.handleDelete} />}
            items={items}
          />
        )}
      </Container>
    )
  }
}
export default RestClient(getAllCollections)(Collection)
