import React, { Component } from 'react'
import { Card, Form, Button } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import FormItem from './components/FormItem'

const Container = styled(InjectClass(Card))`
  width: 75%;
  margin: 0 auto !important;
  min-width: 800px;
  height: calc(100vh - 46px);
  position: relative;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <Container>
        <Wrapper>
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
          <Footer>
            <Button type="primary" style={{ width: '20%' }}>
              提交
            </Button>
          </Footer>
        </Wrapper>
      </Container>
    )
  }
}

export default Form.create()(Publish)
