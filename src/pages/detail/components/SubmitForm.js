import React from 'react'
import { Form, Icon, Input, Button, Upload, message, Steps } from 'antd'
import styled from 'styled-components'
import { getBase64 } from '@/utils'
import { connect } from 'dva'
import { submitOnline } from '../services/meeting'
import MyFormItem from './MyFormItem'

const FormItem = Form.Item
const Step = Steps.Step
const { TextArea } = Input
const Dragger = Upload.Dragger

//控制格式
const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
    sm: { span: 3 }
  },
  wrapperCol: {
    xs: { span: 21 },
    sm: { span: 21 }
  }
}

//dragger上传文件
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

const BtnContainer = styled.div`
  text-align: right;
  & button {
    margin-left: 10px;
  }
`

class SubForm extends React.Component {
  state = {
    current: 0,
    loading: false,
    params: {}
  }
  file = ''

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      console.log('Received values of form: ', values)
      const { params } = this.state
      if (this.state.current !== 2) {
        message.error('投稿失败，未知错误')
        return
      }
      const { data } = await submitOnline(params, this.props.id, this.file)
      this.props.handleClick()
      this.setState({ loading: false })
      if (data.errorCode === 0) {
        message.success('投稿成功')
        return
      }
      message.error(data.errorInfo || '投稿失败')
    })
  }

  nextStep = () => {
    const { current } = this.state
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      if (current === 0) {
        this.setState({})
      } else if (current === 1) {
        this.setState({
          params: {
            title: values.title,
            abstractInfo: values.abstract
          }
        })
      } else if (current === 2) {
        this.setState({})
      }
      const next = current + 1
      this.setState({
        current: next
      })
    })
  }

  formerStep = () => {
    const former = this.state.current - 1
    this.setState({
      current: former
    })
  }

  handleChange = async ({ file }) => {
    const base64 = await getBase64(file)
    this.file = base64
    console.log(this.file)
  }

  handleRemove = () => {
    this.setState({ fileList: [] })
  }

  beforeUpload = file => {
    this.setState({
      fileList: [file]
    })
    return false
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { current, loading } = this.state
    const { userInfo } = this.props
    return (
      <React.Fragment>
        <Steps current={current} style={{ margin: '0px 0px 20px 0px' }}>
          <Step title="信息核对" />
          <Step title="论文信息" />
          <Step title="论文上传" />
        </Steps>
        <Form onSubmit={this.handleSubmit}>
          {current === 0 ? (
            <React.Fragment>
              <MyFormItem content={'真实姓名 ：' + userInfo.name} />
              <MyFormItem content={'单位/机构：' + userInfo.institution} />
              <MyFormItem content={'联系邮箱 ：' + userInfo.email} />
              {/* <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '会议作者不能为空！' }],
                  initialValue: userInfo.name
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="第一作者姓名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('company', {
                  rules: [{ required: true, message: '单位不能为空！' }],
                  initialValue: userInfo.institution
                })(
                  <Input
                    prefix={
                      <Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="所属机构/学校/单位"
                  />
                )}
              </FormItem>
              <FormItem>{'邮箱：' + userInfo.email}</FormItem> */}
              <BtnContainer>
                <Button
                  onClick={this.props.handleClick}
                  // style={{ marginLeft: 320 }}
                >
                  取消
                </Button>
                <Button type="primary" onClick={this.nextStep}>
                  下一步
                </Button>
              </BtnContainer>
            </React.Fragment>
          ) : current === 1 ? (
            <React.Fragment>
              <FormItem {...formItemLayout} label="题目">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '题目不能为空！' }]
                })(
                  <Input
                    prefix={
                      <Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="投递论文题目"
                  />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="摘要">
                {getFieldDecorator('abstract', {
                  rules: [{ required: true, message: '摘要不能为空！' }]
                })(
                  <TextArea
                    placeholder="论文摘要"
                    autosize={{ minRows: 5, maxRows: 5 }}
                    style={{ marginTop: 4 }}
                  />
                )}
              </FormItem>
              <BtnContainer>
                <Button onClick={this.formerStep}>上一步</Button>
                <Button type="primary" onClick={this.nextStep}>
                  下一步
                </Button>
              </BtnContainer>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FormItem style={{ textAlign: 'center' }}>
                {getFieldDecorator('upload', {
                  rules: [{ required: true, message: '请上传论文' }]
                })(
                  <Dragger
                    {...props}
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                    onRemove={this.handleRemove}
                  >
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      点击或将文件拖拽至此区域进行上传
                    </p>
                    <p
                      className="ant-upload-hint"
                      style={{ margin: '0px 20px' }}
                    >
                      将论文进行上传，论文格式支持.pdf、.doc、.docx等格式，不支持.txt格式。
                      一次只能上传一个文件。
                    </p>
                  </Dragger>
                )}
              </FormItem>
              <BtnContainer>
                <Button key="back" onClick={this.formerStep}>
                  上一步
                </Button>
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={this.handleSubmit}
                >
                  提交
                </Button>
              </BtnContainer>
            </React.Fragment>
          )}
        </Form>
      </React.Fragment>
    )
  }
}

const SubmitForm = Form.create()(SubForm)

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(SubmitForm)
