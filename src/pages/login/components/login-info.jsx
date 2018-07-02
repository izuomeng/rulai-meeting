import React from 'react'
import { Checkbox, Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import p from '@/assets/images/logo.png'
import { getLogin } from '../services/loginMessage'
import router from 'umi/router'

const FormItem = Form.Item

const Container = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`
class LoginInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: ''
    }
  }

  loginClick = async () => {
    const data = await getLogin({
      email: this.state.email,
      pwd: this.state.pwd
    })
    console.log(data)
    if (data.data.errorCode === 0) {
      message.success('登陆成功')

      router.push('/')
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <img src={p} alt="图片加载中" width="180px" />

          <Form className="login-form">
            <FormItem>
              <Input
                value={this.state.mail}
                onChange={e => this.setState({ mail: e.target.value })}
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="请输入邮箱"
              />
            </FormItem>
            <FormItem>
              <Input
                value={this.state.pwd}
                onChange={e => this.setState({ pwd: e.target.value })}
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
                onClick={this.loginClick}
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
