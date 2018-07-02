import React from 'react'
import { Upload, Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import p from '@/assets/images/logo.png'
import { getRegister } from '../services/registermessage'
import router from 'umi/router'

const FormItem = Form.Item

const Container = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`

class RegisterInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'people',
      mail: '',
      pwd: ''
    }
  }

  handleClick = () => {
    this.setState({
      user: 'company'
    })
  }
  handleClick2 = () => {
    this.setState({
      user: 'people'
    })
  }

  registerClick = async () => {
    const data = await getRegister({
      email: this.state.mail,
      pwd: this.state.pwd
    })
    console.log(data)
    if (data.data.errorCode === 0) {
      message.success('注册成功')

      router.push('/')
    }
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
            欢迎加入Lein
          </p>
          <p
            style={{
              fontSize: 18
            }}
          >
            个人信息注册
          </p>
          <Form onSubmit={this.handleSubmit} className="login-form">
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
            <FormItem>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="请确认密码"
              />
            </FormItem>
            {this.state.user === 'company' ? (
              <FormItem>
                <Upload>
                  <Button>
                    <Icon type="upload" /> 请上传认证资料
                  </Button>
                </Upload>
              </FormItem>
            ) : null}

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ display: 'block', width: 350 }}
                onClick={this.registerClick}
              >
                注册
              </Button>
              <div style={{ textAlign: 'left' }}>
                <a href="" style={{ display: 'inline-block' }}>
                  已有账号登陆
                </a>
                {this.state.user === 'company' ? (
                  <a
                    onClick={this.handleClick2}
                    style={{ display: 'inline-block', marginLeft: 182 }}
                  >
                    个人用户注册
                  </a>
                ) : (
                  <a
                    onClick={this.handleClick}
                    style={{ display: 'inline-block', marginLeft: 182 }}
                  >
                    单位用户注册
                  </a>
                )}
              </div>
            </FormItem>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

export default RegisterInfo
