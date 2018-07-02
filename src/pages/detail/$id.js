import React from 'react'
import withRouter from 'umi/withRouter'
import Info from './components/Info'
import Item from './components/Item'
import { Button, Modal, Upload, Icon, message, Input } from 'antd'
import { getMeetingsByID } from './services/meeting'
import Procedure from './components/Procedure'
import SubmitForm from './components/SubmitForm'

const fakeData = {
  id: 1,
  title: '讨论崔明亮有多傻大会',
  introduction:
    '这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。',
  requirement:
    '凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。',
  ddlDate: '2018.5.22',
  informDate: '2018.5.22',
  registerDate: '2018.6.22',
  confBeginDate: '2018.7.22',
  organization: {
    id: 1,
    name: '北航'
  },
  storagePath: ['d:/', 'e:/', 'c:/'],
  cost: '130',
  accommodationInfo:
    '批判的最狠的住总统包房，批判的一般的住普通酒店，表扬的住厕所',
  contact: '110',
  confEndDate: '2018.8.22',
  schedule: '日程安排'
}

class Detail extends React.Component {
  state = {
    loading: false,
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible, loading } = this.state
    const { TextArea } = Input
    const Dragger = Upload.Dragger
    const props = {
      name: 'file',
      multiple: true,
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange(info) {
        const status = info.file.status
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
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
        <Info meeting={fakeData} />
        <Procedure label="会议流程" />
        <Item label="会议简介" value={fakeData.introduction} />
        <Item label="正文信息" value={fakeData.requirement} />
        <Item label="住宿交通" value={fakeData.accommodationInfo} />

        <Button
          type="primary"
          icon="download"
          size={'large'}
          style={{ margin: '40px 0px 60px 200px' }}
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
        <SubmitForm />

        <Modal
          visible={visible}
          title="论文投稿"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              提交
            </Button>
          ]}
        >
          <Input placeholder="作者" />
          <Input placeholder="单位" />
          <Input placeholder="题目" />
          <TextArea placeholder="摘要" autosize={{ minRows: 5, maxRows: 5 }} />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Modal>
      </div>
    )
  }
}

// const Detail = props => {
//   const MyComponent = RestClient(getMeetingsByID, props.match.params.id)(Meeting)
//   return <MyComponent {...props} />
// }

export default withRouter(Detail)
