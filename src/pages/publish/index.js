import React, { Component } from 'react'
import { Card, Form, Button, message } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { transTime } from '@/utils'
import { connect } from 'dva'
import router from 'umi/router'
import { publish } from './services/publish'
import FormItem from './components/FormItem'

const Container = styled(InjectClass(Card))`
  width: 75%;
  margin: 0 auto !important;
  min-width: 800px;
  min-height: calc(100vh - 46px);
  padding: 60px 0 !important;
  & > div {
    width: 650px;
    margin: 0 auto;
  }
`

const Footer = styled.div`
  text-align: center;
`

class Publish extends Component {
  handleSubmit = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      const form = {
        ...fieldsValue,
        confBeginDate: transTime(fieldsValue.confDate[0]),
        confEndDate: transTime(fieldsValue.confDate[1]),
        ddlDate: transTime(fieldsValue.ddlDate),
        informDate: transTime(fieldsValue.informDate),
        registerDate: transTime(fieldsValue.registerDate)
      }
      this.publishMeeting(form)
    })
  }
  async publishMeeting(form) {
    try {
      const { userInfo } = this.props
      await publish(userInfo.organization.id, form)
      message.success('发布成功')
      router.push('/released')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            decorator={getFieldDecorator}
            label="会议标题"
            prop="title"
            message="会议标题不能为空"
          />
          <FormItem
            decorator={getFieldDecorator}
            label="联系方式"
            prop="contact"
            message="联系方式不能为空"
          />
          <FormItem
            decorator={getFieldDecorator}
            label="会议日期范围"
            prop="confDate"
            isRangePicker
            message="会议日期范围不能为空"
          />
          <FormItem
            decorator={getFieldDecorator}
            label="注册费用"
            prop="cost"
            type="number"
            message="注册费用不能为空"
          />
          <FormItem
            decorator={getFieldDecorator}
            label="截稿日期"
            prop="ddlDate"
            message="截稿日期不能为空"
            isDatePicker
          />
          <FormItem
            decorator={getFieldDecorator}
            label="注册截止日期"
            prop="registerDate"
            message="注册截止日期不能为空"
            isDatePicker
          />
          <FormItem
            decorator={getFieldDecorator}
            label="录用通知日期"
            prop="informDate"
            message="录用通知日期不能为空"
            isDatePicker
          />
          <FormItem
            decorator={getFieldDecorator}
            label="会议描述"
            prop="introduction"
            required={false}
          />
          <FormItem
            decorator={getFieldDecorator}
            label="征文信息"
            prop="requirement"
            required={false}
          />
          <FormItem
            decorator={getFieldDecorator}
            label="住宿交通信息"
            prop="accommodationInfo"
            required={false}
          />
        </Form>
        <Footer>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            style={{ width: '20%' }}
          >
            提交
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(Form.create()(Publish))
