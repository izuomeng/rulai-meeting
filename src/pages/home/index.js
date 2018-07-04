import React from 'react'
import styled from 'styled-components'
import { RestClient } from '@/utils/HOC'
import MeetingList from '@/components/MeetingList'
import Loading from '@/components/Loading'
import { Icon, Modal, message } from 'antd'
import { getAllMeetings, registerMeetings } from './services/meeting'
import MeetingRegister from './components/MeetingRegister'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <a onClick={props.handleRegister}>
      <Icon type="login" style={{ marginRight: '8px' }} />注册会议
    </a>
    <a onClick={props.handleCollect} style={{ marginLeft: 20 }}>
      <Icon type="star" style={{ marginRight: '8px' }} />收藏
    </a>
  </React.Fragment>
)

class Home extends React.Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  handleSubmit = async form => {
    this.setState({ visible: false })
    if (!form) {
      return
    } else {
      try {
        await registerMeetings(form)
        message.success('注册成功')
      } catch (error) {
        return
      }
    }
    // submit
  }
  handleCollect = () => {
    message.success('收藏成功')
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
            extra={
              <Extra
                handleCollect={this.handleCollect}
                handleRegister={this.showModal}
              />
            }
            items={items}
          />
        )}
        <Modal
          onCancel={() => this.setState({ visible: false })}
          title="注册会议"
          visible={this.state.visible}
          footer={null}
        >
          <MeetingRegister handleSubmit={this.handleSubmit} />
        </Modal>
      </Container>
    )
  }
}

export default RestClient(getAllMeetings, 1)(Home)
