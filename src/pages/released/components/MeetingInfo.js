import React, { Component } from 'react'
import { Form } from 'antd'
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
    console.log(data)
  }
  handleSubmit = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          decorator={getFieldDecorator}
          label="会议标题"
          prop="title"
          message="会议标题不能为空"
        />
      </Form>
    )
  }
}

export default Form.create()(MeetingInfo)
