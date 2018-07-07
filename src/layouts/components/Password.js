import React from 'react'
import { Form, Button } from 'antd'
import styled from 'styled-components'
import FormItem from 'CP/FormItem'

const Footer = styled.div`
  text-align: right;
`

class Password extends React.Component {
  handleSubmit = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      this.props.handleSubmit(fieldsValue)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            decorator={getFieldDecorator}
            label="旧密码"
            prop="originalPassword"
            message="旧密码不能为空"
            type="password"
          />
          <FormItem
            decorator={getFieldDecorator}
            label="新密码"
            prop="newPassword"
            message="新密码不能为空"
            type="password"
          />
          <Footer>
            <Button
              onClick={this.handleSubmit}
              type="primary"
              style={{ marginRight: 20 }}
            >
              提交
            </Button>
            <Button onClick={() => this.props.handleSubmit(false)}>取消</Button>
          </Footer>
        </Form>
      </React.Fragment>
    )
  }
}

export default Form.create()(Password)
