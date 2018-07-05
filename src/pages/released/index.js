import React from 'react'
import { Pagination } from 'antd'
import Loading from 'CP/Loading'
import TitleCard from 'CP/TitleCard'
import { getReleasedMeetings, modifyMeeting } from './services/release'
import { connect } from 'dva'
import Tabel from './components/Tabel'
import ModifyForm from './components/ModifyForm'
import { transTime } from '@/utils'

import { Modal } from 'antd'

class Released extends React.Component {
  state = {
    visible: false,
    data: {},
    loading: true,
    current: 1,
    form: {}
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  onOk = async () => {
    this.setState({ visible: false })
    const form = {
      ddlDate: transTime('1996-9-26 10:15:16'),
      conferenceId: 'dfadsf',
      introduction: 'dsadada',
      title: null,
      requirement: null,
      informDate: null,
      registerDate: null,
      confBeginDate: null,
      confEndDate: null,
      schedule: null,
      cost: null,
      accommodationInfo: null,
      contact: null,
      repostDdlDate: null
    }

    const { data } = await modifyMeeting(form)
    console.log(data)
  }

  handleClick = async () => {
    this.setState({ visible: true })
  }

  async componentDidMount() {
    const orgId = this.props.userInfo.organization.id
    const {
      data: { data }
    } = await getReleasedMeetings({
      orgId
    })
    this.setState({ data, loading: false })
  }

  onPageChange = async page => {
    const {
      data: { data }
    } = await getReleasedMeetings({
      page,
      orgId: this.props.userInfo.organization.id
    })
    this.setState({ current: page, data }, () => window.scrollTo(0, 0))
  }

  render() {
    const { loading, data, current } = this.state
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <TitleCard
            title="已发布会议"
            subtitle="查看和编辑已发布会议，新建会议"
          >
            {/* <Tabel handleClick={() => this.setState({ visible: true })} /> */}
            <Tabel handleClick={this.handleClick} />
            <Modal
              style={{ top: 40 }}
              width="750px"
              title="编辑会议信息"
              visible={this.state.visible}
              cancelText="取消"
              okText="确认"
              onCancel={() => this.setState({ visible: false })}
              onOk={this.onOk}
            >
              <ModifyForm handleClick={this.handleClick} />
            </Modal>
            <Tabel list={data.items} />
            <div style={{ textAlign: 'center' }}>
              <Pagination
                current={current}
                onChange={this.onPageChange}
                pageSize={data.pageSize}
                total={data.totalPage * data.pageSize}
              />
            </div>
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(Released)
