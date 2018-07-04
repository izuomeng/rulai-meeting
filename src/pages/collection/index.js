import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { Icon, message } from 'antd'
import { getAllCollections } from './services/collection'
import { deleteCollection } from './services/deleteCollection'

const Container = styled.div`
  display: block;
`
const Extra = props => (
  <React.Fragment>
    <a onClick={props.handleDelete}>
      <Icon type="close-circle-o" style={{ marginRight: '8px' }} />删除
    </a>
  </React.Fragment>
)

class Collection extends React.Component {
  handleDelete = async form => {
    this.setState({ visible: false })
    if (!form) {
      return
    } else {
      const { data } = await deleteCollection(form)
      if (data.errorCode === 0) {
        message.success('删除成功')
      }
    }
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
