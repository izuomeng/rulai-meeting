import React from 'react'
import withRouter from 'umi/withRouter'
import Info from './components/Info'
import Item from './components/Item'
import { Button, Modal } from 'antd'
import { getMeetingsByID } from './services/meeting'
import Procedure from './components/Procedure'
import SubmitForm from './components/SubmitForm'
import { RestClient } from '@/utils/HOC'

// const fakeData = {
//   id: 1,
//   title: '讨论崔明亮有多傻大会',
//   introduction:
//     '这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。',
//   requirement:
//     '凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。',
//   ddlDate: '2018.5.22',
//   informDate: '2018.5.22',
//   registerDate: '2018.6.22',
//   confBeginDate: '2018.7.22',
//   organization: {
//     id: 1,
//     name: '北航'
//   },
//   storagePath: ['d:/', 'e:/', 'c:/'],
//   cost: '130',
//   accommodationInfo:
//     '批判的最狠的住总统包房，批判的一般的住普通酒店，表扬的住厕所',
//   contact: '110',
//   confEndDate: '2018.8.22',
//   schedule: '日程安排'
// }

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
    console.log(data)
    const { visible } = this.state
    if (loading || !data.introduction) {
      return null
    }
    return (
      <div
        style={{
          backgroundColor: 'white',
          margin: '0px auto',
          width: '70%',
          minWidth: 800
        }}
      >
        <Info meeting={data} />
        <Procedure label="会议流程" />
        <Item label="会议简介" value={data.introduction} />
        <Item label="正文信息" value={data.requirement} />
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
