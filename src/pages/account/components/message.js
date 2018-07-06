import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { addAccount } from '../services/AccountList'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 20 }
  }
}
class SubForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      console.info(values)
      this.props.onCancel()
      if (!err) {
        const { data } = await addAccount(values)
        if (data.errorCode === 0) {
          message.success('已成功添加子账户')
          window.location.reload()
        }
        return
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="用户名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请填写用户名信息' }]
            })(<Input placeholder="请在此处填写用户名" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="密码">
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: '请填写密码' }]
            })(<Input placeholder="请在此处填写密码" />)}
          </FormItem>
          <Button
            key="back"
            onClick={this.props.onCancel}
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
      </React.Fragment>
    )
  }
}

const SubmitForm = Form.create()(SubForm)

export default SubmitForm
