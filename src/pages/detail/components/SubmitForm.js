import React from 'react'
import { Form, Icon, Input, Button, Upload, message } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

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

class SubForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        return
      } else this.props.handleClick('ok')
    })
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="作者"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('company', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="单位"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('mailbox', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="邮箱"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="题目"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('abstract', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <TextArea
              placeholder="摘要"
              autosize={{ minRows: 5, maxRows: 5 }}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('upload', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> 提交PDF格式论文
              </Button>
            </Upload>
          )}
        </FormItem>
        <Button
          key="back"
          onClick={() => this.props.handleClick('cancel')}
          style={{ marginLeft: 320 }}
        >
          取消
        </Button>
        <Button
          key="submit"
          type="primary"
          onClick={this.handleSubmit}
          style={{ marginLeft: 10 }}
        >
          提交
        </Button>
      </Form>
    )
  }
}

const SubmitForm = Form.create()(SubForm)

export default SubmitForm
