import React from 'react'
import { Upload, Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import p from '@/assets/images/logo.png'
import { RegisterUser, RegisterOrganization } from '../services/registermessage'
import router from 'umi/router'
import Link from 'umi/link'
import { getBase64 } from '@/utils'

const FormItem = Form.Item

const Container = styled.div`
  background-color: #fff;
  padding: 26px 38px 22px;
  margin: 64px auto;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  width: 430px;
  text-align: center;
`

class RegisterInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'people'
    }
    this.feeImages = ''
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

  handleChange = async ({ file }) => {
    const base64 = await getBase64(file)
    this.feeImages = base64
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

  registerClick = async values => {
    const data = await RegisterUser({
      email: values.mail,
      password: values.password
    })
    if (data.data.errorCode === 0) {
      message.success('注册成功')
      router.push('/login')
    }
  }

  organizationClick = async values => {
    const data = await RegisterOrganization({
      name: values.name,
      code: values.code,
      mail: values.mail,
      file: this.feeImages
    })
    if (data.data.errorCode === 0) {
      message.success('已提交给平台审核，审核结果会以邮件方式通知，请注意查看')
      router.push('/')
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.info(values)
      if (!err) {
        console.log('Received values of form: ', values)
        if (this.state.user === 'people') {
          this.registerClick(values)
        } else if (this.state.user === 'company') {
          this.organizationClick(values)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
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
          {this.state.user === 'people' ? (
            <p
              style={{
                fontSize: 18
              }}
            >
              个人信息注册
            </p>
          ) : (
            <p
              style={{
                fontSize: 18
              }}
            >
              组织单位注册
            </p>
          )}

          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('mail', {
                rules: [{ required: true, message: '请输入邮箱' }]
              })(
                <Input
                  // value={this.state.mail}
                  // onChange={e => this.setState({ mail: e.target.value })}

                  placeholder="请输入邮箱"
                />
              )}
            </FormItem>
            {this.state.user === 'company' ? (
              <React.Fragment>
                <FormItem>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入组织名称' }]
                  })(
                    <Input
                      // value={this.state.pwd}
                      // onChange={e => this.setState({ pwd: e.target.value })}

                      placeholder="请输入组织名称"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('code', {
                    rules: [
                      { required: true, message: '请输入统一社会信用代码' }
                    ]
                  })(
                    <Input
                      // value={this.state.pwd}
                      // onChange={e => this.setState({ pwd: e.target.value })}

                      placeholder="请输入统一社会信用代码"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('file', {
                    rules: [{ required: true, message: '请上传认证资料' }]
                  })(
                    <Upload
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChange}
                      onRemove={this.handleRemove}
                    >
                      <Button style={{ width: 350 }}>
                        <Icon type="upload" /> 请上传认证资料
                      </Button>
                    </Upload>
                  )}
                </FormItem>
              </React.Fragment>
            ) : null}
            {this.state.user === 'people' && (
              <React.Fragment>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                  })(<Input type="password" placeholder="请输入密码" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('passwordConfirm', {
                    rules: [{ required: true, message: '请确认密码' }]
                  })(<Input type="password" placeholder="请确认密码" />)}
                </FormItem>
              </React.Fragment>
            )}
            <FormItem>
              {this.state.user === 'people' ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ display: 'block', width: 350 }}
                >
                  注册个人用户
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ display: 'block', width: 350 }}
                >
                  注册单位用户
                </Button>
              )}
              <div style={{ textAlign: 'left' }}>
                <Link to="/login" style={{ display: 'inline-block' }}>
                  已有账号登陆
                </Link>
                {this.state.user === 'company' ? (
                  <a
                    style={{ display: 'inline-block', marginLeft: 182 }}
                    onClick={this.handleClick2}
                  >
                    个人用户注册
                  </a>
                ) : (
                  <a
                    style={{ display: 'inline-block', marginLeft: 182 }}
                    onClick={this.handleClick}
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

export default Form.create()(RegisterInfo)
