import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { Icon, Modal } from 'antd'
import Link from 'umi/link'
import { getAllMeetings } from './services/meeting'
import MeetingRegister from './components/MeetingRegister'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <a onClick={props.handleClick} to="/">
      <Icon type="login" style={{ marginRight: '8px' }} />注册会议
    </a>
    <Link style={{ marginLeft: 20 }} to="/collection">
      <Icon type="star" style={{ marginRight: '8px' }} />收藏
    </Link>
  </React.Fragment>
)

class Home extends React.Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  handleSubmit = form => {
    if (!form) {
      this.setState({ visible: false })
    }
    // submit
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
            extra={<Extra handleClick={this.showModal} />}
            items={items}
          />
        )}
        <Modal title="注册会议" visible={this.state.visible} footer={null}>
          <MeetingRegister handleSubmit={this.handleSubmit} />
        </Modal>
      </Container>
    )
  }
}

export default RestClient(getAllMeetings, 1)(Home)
