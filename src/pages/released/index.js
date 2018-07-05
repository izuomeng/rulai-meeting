import React from 'react'
import { RestClient } from '@/utils/HOC'
import Loading from '@/components/Loading'
import TitleCard from 'CP/TitleCard'
import { getReleasedMeetings,modifyMeeting} from './services/release'
import Tabel from './components/Tabel'
import ModifyForm from './components/ModifyForm'

import { Modal } from 'antd'

class Released extends React.Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    }) 
  }
  onOk=async ()=>{
    this.setState({ visible: false })
    const form = {
      ddlDate:'1996-9-26 10:15:16',
      conferenceId:'dfadsf',
     introduction:'dsadada'

    }
 
    const {data}=await modifyMeeting(form)
    console.log(data)
  }
  render() {
    const {
      data: { items },
      loading
    } = this.props
    console.log('会议列表', items)
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <TitleCard
            title="已发布会议"
            subtitle="查看和编辑已发布会议，新建会议"
          >
            <Tabel handleClick={() => this.setState({ visible: true })} />
            <Modal
              style={{ top: 200 }}
              title="编辑会议信息"
              visible={this.state.visible}
              cancelText="取消"
              okText="确认"
              onCancel={() => this.setState({ visible: false })}
              onOk={this.onOk}
            >
              <ModifyForm handleClick={this.handleClick} />
            </Modal>
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

export default RestClient(getReleasedMeetings, 1)(Released)
