import React from 'react'
import { Form, Icon, Input, Button, Upload, message, Steps } from 'antd'
import styled from 'styled-components'
import { connect } from 'dva'
import { submitOnline } from '../services/meeting'

const FormItem = Form.Item
const Step = Steps.Step
const { TextArea } = Input

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

//上传文件
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
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
    current: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      console.log('Received values of form: ', values)
      const { data } = await submitOnline(
        {
          title: values.title,
          abstractInfo: values.abstract
        },
        this.props.id
      )
      this.props.handleClick('ok')
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
        this.setState({
          params: {
            name: values.userName,
            institution: values.company
          }
        })
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

  render() {
    const { getFieldDecorator } = this.props.form
    const { current } = this.state
    const { userInfo } = this.props

    return (
      <React.Fragment>
        <Steps current={current} style={{ margin: '0px 0px 20px 0px' }}>
          <Step title="作者信息" />
          <Step title="论文信息" />
          <Step title="论文上传" />
        </Steps>
        <Form onSubmit={this.handleSubmit}>
          {current === 0 ? (
            <React.Fragment>
              <FormItem {...formItemLayout} label="作者">
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
              <FormItem {...formItemLayout} label="单位">
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
              <FormItem {...formItemLayout} label="邮箱">
                liuyucong6666@126.com
              </FormItem>
              <BtnContainer>
                <Button
                  onClick={() => this.props.handleClick('cancel')}
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
              <FormItem>
                {getFieldDecorator('upload', {
                  rules: [{ required: true, message: '请上传论文' }]
                })(
                  <Upload {...props}>
                    <Button>
                      <Icon type="upload" /> 提交PDF格式论文
                    </Button>
                  </Upload>
                )}
              </FormItem>
              <BtnContainer>
                <Button key="back" onClick={this.formerStep}>
                  上一步
                </Button>
                <Button key="submit" type="primary" onClick={this.handleSubmit}>
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
