import React from 'react'
import { Checkbox, Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'
import p from '@/assets/images/logo.png'

const FormItem = Form.Item

const Container = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`
class LoginInfo extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <img src={p} alt="图片加载中" width="180px" />

          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="请输入邮箱"
              />
            </FormItem>
            <FormItem>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="请输入密码"
              />
            </FormItem>

            <Checkbox style={{ float: 'left', marginBottom: 18 }}>
              Remember me
            </Checkbox>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ display: 'block', width: 350 }}
              >
                登录
              </Button>
              <div style={{ textAlign: 'left' }}>
                <a style={{ display: 'inline-block' }}>没有账号？点此注册</a>
              </div>
            </FormItem>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

export default LoginInfo
