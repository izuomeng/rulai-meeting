import React from 'react'
import withRouter from 'umi/withRouter'
import Info from './components/Info'
import Item from './components/Item'
import { Button, Modal } from 'antd'
import { getMeetingsByID } from './services/meeting'
import Procedure from './components/Procedure'
import SubmitForm from './components/SubmitForm'
import { RestClient } from '@/utils/HOC'
import Loading from '@/components/Loading'

class Meeting extends React.Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleClick = type => {
    if (type === 'ok') {
      // this.setState({ loading: true })
      // setTimeout(() => {
      //   this.setState({ loading: false, visible: false })
      // }, 3000)
      this.setState({ visible: false })
    } else if (type === 'cancel') {
      this.setState({ visible: false })
    }
  }

  render() {
    const { data, loading } = this.props
    const { visible } = this.state

    const nowTime = new Date().getTime()
    const ddlDate = new Date(data.ddlDate).getTime()
    const informDate = new Date(data.informDate).getTime()
    const registerDate = new Date(data.registerDate).getTime()
    const confBeginDate = new Date(data.confBeginDate).getTime()
    const confEndDate = new Date(data.confEndDate).getTime()
    let checkPoint = 0
    switch (true) {
      case ddlDate - nowTime >= 0:
        checkPoint = 0
        break
      case ddlDate - nowTime < 0 && informDate - nowTime >= 0:
        checkPoint = 1
        break
      case informDate - nowTime < 0 && registerDate - nowTime >= 0:
        checkPoint = 2
        break
      case ddlDate - nowTime < 0 && confBeginDate - nowTime >= 0:
        checkPoint = 3
        break
      case ddlDate - nowTime < 0 && confEndDate - nowTime >= 0:
        checkPoint = 4
        break
      case confEndDate - nowTime < 0:
        checkPoint = 5
        break
      default:
        checkPoint = 0
    }
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <div
            style={{
              backgroundColor: 'white',
              margin: '0px auto',
              width: '75%',
              minWidth: 800
            }}
          >
            <Info meeting={data} />
            <Procedure label="会议流程" checkPoint={checkPoint} />
            <Item label="会议简介" value={data.introduction} />
            <Item label="征文信息" value={data.requirement} />
            <Item label="日程安排" value={data.schedule} />
            <Item label="住宿交通" value={data.accommodationInfo} />

            <Button
              type="primary"
              icon="download"
              size={'large'}
              style={{ margin: '40px 0px 60px 200px' }}
              href="/user/test/xxxx.txt"
              download="论文模板.txt"
            >
              下载论文模板
            </Button>
            <Button
              type="primary"
              size={'large'}
              style={{ marginLeft: 200, width: 150 }}
              onClick={this.showModal}
            >
              在线会议投稿
            </Button>

            <Modal
              style={{ top: 20 }}
              visible={visible}
              title="论文投稿"
              footer={null}
              onCancel={() => this.handleClick('cancel')}
              onOk={() => this.handleClick('ok')}
            >
              <SubmitForm handleClick={this.handleClick} />
            </Modal>
          </div>
        )}
      </React.Fragment>
    )
  }
}

const Detail = props => {
  const MyComponent = RestClient(getMeetingsByID, props.match.params.id)(
    Meeting
  )
  return <MyComponent {...props} />
}

export default withRouter(Detail)
