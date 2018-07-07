import React from 'react'
import { Checkbox, Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import p from '@/assets/images/logo.png'
import { getLogin } from '../services/loginMessage'
import router from 'umi/router'
import { connect } from 'dva'
import Link from 'umi/link'
// import Cookies from 'js-cookie'
// import { SESSION_KEY } from '@/constants'

const FormItem = Form.Item

const Container = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto;
`
class LoginInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: '',
      loading: false
    }
    this.isUser = true
  }

  loginClick = () => {
    this.setState({ loading: true }, async () => {
      try {
        const { data } = await getLogin(
          {
            email: this.state.email,
            pwd: this.state.pwd
          },
          this.isUser
        )
        if (data.errorCode === 0) {
          // const sessionId = data[SESSION_KEY]
          // Cookies.set(SESSION_KEY, sessionId)
          await this.props.dispatch({ type: 'user/fetch', payload: {} })
          message.success('登陆成功')
          router.push('/')
        } else {
          // Cookies.remove(SESSION_KEY)
          message.error(data.errorInfo || '登陆失败')
        }
      } finally {
        this.setState({ loading: false })
      }
    })
  }
  onChange = e => {
    this.isUser = !e.target.checked
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <img src={p} alt="图片加载中" width="180px" />
          <p
            style={{
              fontSize: 30,
              fontWeight: 'bold'
            }}
          >
            欢迎回到Lein
          </p>
          <Form className="login-form">
            <FormItem>
              <Input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
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

            <Checkbox
              onChange={this.onChange}
              style={{ float: 'left', marginBottom: 18 }}
            >
              机构登陆
            </Checkbox>

            <FormItem>
              <Button
                loading={this.state.loading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ display: 'block', width: 350 }}
                onClick={this.loginClick}
              >
                登录
              </Button>
              <div style={{ textAlign: 'left' }}>
                <Link to="/register" style={{ display: 'inline-block' }}>
                  没有账号？点此注册
                </Link>
              </div>
            </FormItem>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

export default connect()(LoginInfo)
