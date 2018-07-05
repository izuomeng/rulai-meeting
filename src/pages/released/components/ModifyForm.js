import React from 'react'
import FormItem1 from './FormItem'
import { getMeeting } from '../services/release'
import {
  Form,
  Icon,
  Input,
  Upload,
  message,
  Modal,
  DatePicker,
  Button
} from 'antd'
import { transTime } from '@/utils'
import moment from 'moment'

const FormItem = Form.Item
const { TextArea } = Input

class ModForm extends React.Component {
  state = {
    defaultData: {}
  }
  async componentDidMount() {
    const { data } = await getMeeting()
    console.log('daaaaaata', data)
    this.setState({ defaultData: data.data })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    }
    const { getFieldDecorator } = this.props.form
    const config = {
      rules: [{ type: 'object', required: true, message: '请输入截止日期!' }]
    }

    return (
      <Form onModify={this.handleSubmit}>
        {/* <FormItem label="其他">
          {getFieldDecorator('abstract', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <TextArea
              placeholder="请输入其他信息"
              autosize={{ minRows: 5, maxRows: 5 }}
            />
          )}
        </FormItem> */}
        <FormItem1
          decorator={getFieldDecorator}
          label="会议标题"
          prop="title"
          message="会议标题不能为空"
          initialvalue={this.state.defaultData.title}
        />

        <FormItem {...formItemLayout} label="修改稿截止日期">
          {getFieldDecorator('date-picker', config)(
            <DatePicker placeholder="请增加修改稿截止日期" />
          )}
        </FormItem>
        <FormItem1
          decorator={getFieldDecorator}
          label="联系方式"
          prop="contact"
          message="联系方式不能为空"
          initialvalue={this.state.defaultData.contact}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="会议日期范围"
          prop="confDate"
          isRangePicker
          message="会议日期范围不能为空"
          initialvalue={[
            moment(this.state.defaultData.confBeginDate),
            moment(this.state.defaultData.confEndDate)
          ]}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="注册费用"
          prop="cost"
          type="number"
          initialvalue={this.state.defaultData.cost}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="注册截止日期"
          prop="ddlDate"
          isDatePicker
          initialvalue={moment(this.state.defaultData.registerDate)}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="截稿日期"
          prop="ddlDate"
          isDatePicker
          initialvalue={moment(this.state.defaultData.ddlData)}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="录用通知日期"
          prop="ddlDate"
          isDatePicker
          initialvalue={moment(this.state.defaultData.informDate)}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="会议描述"
          prop="introduction"
          required={false}
          initialvalue={this.state.defaultData.introduction}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="征文信息"
          prop="requirement"
          required={false}
          initialvalue={this.state.defaultData.requirement}
        />
        <FormItem1
          decorator={getFieldDecorator}
          label="住宿交通信息"
          prop="accommodationInfo"
          required={false}
          initialvalue={this.state.defaultData.accommodationInfo}
        />
      </Form>
    )
  }
}

const ModifyForm = Form.create()(ModForm)

export default ModifyForm
