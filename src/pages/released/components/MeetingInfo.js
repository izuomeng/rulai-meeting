import React, { Component } from 'react'
import { Form, Button } from 'antd'
import moment from 'moment'
import FormItem from 'CP/FormItem'
import { getMeetingInfo } from '../services/release'

class MeetingInfo extends Component {
  state = {
    defaultInfo: {}
  }
  componentDidMount() {
    this.fetch()
  }
  async fetch() {
    const {
      data: { data }
    } = await getMeetingInfo(this.props.confId)
    this.setState({ defaultInfo: data })
  }
  handleSubmit = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      this.props.handleSubmit(fieldsValue)
    })
  }
  render() {
    const {
      form: { getFieldDecorator },
      handleSubmit
    } = this.props
    const { defaultInfo } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          decorator={getFieldDecorator}
          label="会议标题"
          prop="title"
          message="会议标题不能为空"
          initialValue={defaultInfo.title}
        />
        <FormItem
          decorator={getFieldDecorator}
          label="联系方式"
          prop="contact"
          message="联系方式不能为空"
          initialValue={defaultInfo.contact}
        />
        <FormItem
          decorator={getFieldDecorator}
          label="注册费用"
          prop="cost"
          type="number"
          message="注册费用不能为空"
          initialValue={defaultInfo.cost}
        />
        <FormItem
          isDatePicker
          decorator={getFieldDecorator}
          label="截稿日期"
          prop="ddlDate"
          message="截稿日期不能为空"
          initialValue={moment(defaultInfo.ddlDate)}
        />
        <FormItem
          decorator={getFieldDecorator}
          label="会议描述"
          prop="introduction"
          required={false}
          initialValue={defaultInfo.introduction}
        />
        <FormItem
          decorator={getFieldDecorator}
          label="征文信息"
          prop="requirement"
          required={false}
          initialValue={defaultInfo.requirement}
        />
        <div style={{ textAlign: 'right' }}>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            style={{ marginRight: 30 }}
          >
            提交
          </Button>
          <Button onClick={() => handleSubmit(false)}>取消</Button>
        </div>
      </Form>
    )
  }
}

export default Form.create()(MeetingInfo)
