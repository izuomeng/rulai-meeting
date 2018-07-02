import React, { Component } from 'react'
import { Card, Form } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import FormItem from './components/FormItem'

const Container = styled(InjectClass(Card))`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`

class Publish extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      console.log('pulish form data: ', fieldsValue)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Container style={{ width: '80%', margin: '0 auto' }}>
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
          />
          <FormItem
            decorator={getFieldDecorator}
            label="截稿日期"
            prop="ddlDate"
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
      </Container>
    )
  }
}

export default Form.create()(Publish)
