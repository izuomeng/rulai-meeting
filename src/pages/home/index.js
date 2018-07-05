import React from 'react'
import styled from 'styled-components'
import MeetingList from 'CP/MeetingList'
import Loading from 'CP/Loading'
import { Icon, Modal, message, Pagination } from 'antd'
import { getAllMeetings, registerMeetings, star } from './services/meeting'
import MeetingRegister from './components/MeetingRegister'

const Container = styled.div`
  display: block;
`

const Extra = props => (
  <React.Fragment>
    <a onClick={() => props.handleRegister(props.meeting)}>
      <Icon type="login" style={{ marginRight: '8px' }} />注册会议
    </a>
    <a
      onClick={() => props.handleCollect(props.meeting)}
      style={{ marginLeft: 20 }}
    >
      <Icon type="star" style={{ marginRight: '8px' }} />收藏
    </a>
  </React.Fragment>
)

class Home extends React.Component {
  state = {
    visible: false,
    currentMeeting: {},
    currentPage: 1,
    data: {},
    loading: true
  }
  showModal = currentMeeting => {
    this.setState({ visible: true, currentMeeting })
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
  handleCollect = async meeting => {
    await star(meeting.id)
    message.success('收藏成功')
  }
  onPageChange = async currentPage => {
    this.setState({ currentPage })
    await this.fetch(currentPage)
    window.scrollTo(0, 0)
  }
  fetch(page = 1) {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          data: { data }
        } = await getAllMeetings(page)
        this.setState({ data, loading: false }, resolve)
      } catch (error) {
        reject(error)
      }
    })
  }
  async componentDidMount() {
    this.fetch()
  }

  render() {
    const { currentPage, loading, data } = this.state
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <MeetingList
              extra={props => (
                <Extra
                  {...props}
                  handleCollect={this.handleCollect}
                  handleRegister={this.showModal}
                />
              )}
              items={data.items}
            />
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
              <Pagination
                current={currentPage}
                onChange={this.onPageChange}
                pageSize={data.pageSize}
                total={data.totalElement || data.totalPage * data.pageSize}
              />
            </div>
          </React.Fragment>
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

export default Home
