import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { Icon, Button } from 'antd'
import { getAllCollections } from './services/collection'
import { deleteCollection } from './services/deleteCollection'
import { clearAllCollection } from './services/clearAll'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <Button type="danger" onClick={clearAllCollection()}>
      <Icon type="exclamation-circle" style={{ marginRight: '8px' }} />清空收藏列表
    </Button>
    <Button type="danger" onClick={deleteCollection()}>
      <Icon type="close-circle-o" style={{ marginRight: '8px' }} />取消收藏
    </Button>
  </React.Fragment>
)

class Collection extends React.Component {
  render() {
    const { data, loading } = this.props
    console.log(data)
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <MeetingList extra={<Extra />} items={data.items} />
        )}
      </Container>
    )
  }
}
export default RestClient(getAllCollections, 1)(Collection)
