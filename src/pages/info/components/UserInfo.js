import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import router from 'umi/router'
import { connect } from 'dva'
import { modifyUserInfo } from '../services/userInfo'

const FormItem = Form.Item

//控制格式
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
const BtnContainer = styled.div`
  text-align: center;
`

class SubForm extends React.Component {
  state = {
    loading: false
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      const { data } = await modifyUserInfo(values)
      this.setState({ loading: false })
      if (data.errorCode === 0) {
        message.success('个人信息修改成功')
        this.props.dispatch({ type: 'user/save', payload: values })
        router.go(-1)
        return
      }
      message.error(data.errorInfo || '个人信息修改失败')
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { data } = this.props
    const { loading } = this.state
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ width: '50%', margin: '35px auto' }}
      >
        <FormItem {...formItemLayout} label="昵称">
          {getFieldDecorator('nickname', {
            initialValue: data.nickName
          })(
            <Input
              prefix={
                <Icon type="smile-o" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="昵称"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="真实姓名">
          {getFieldDecorator('name', {
            initialValue: data.name
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户真实姓名"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="单位机构">
          {getFieldDecorator('institution', {
            initialValue: data.institution
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="所属机构/学校/单位"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="身份证号">
          {getFieldDecorator('realId', {
            initialValue: data.realId,
            rules: [{ len: 18, message: '请输入合法的身份证号' }]
          })(
            <Input
              type="number"
              prefix={
                <Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="18位用户身份证号码"
            />
          )}
        </FormItem>
        <BtnContainer>
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleSubmit}
          >
            提交
          </Button>
        </BtnContainer>
      </Form>
    )
  }
}

const UserInfo = Form.create()(SubForm)

export default connect()(UserInfo)
