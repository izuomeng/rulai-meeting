import React from 'react'
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

const FormItem = Form.Item
const { TextArea } = Input

class ModForm extends React.Component {
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
        <FormItem {...formItemLayout} label="修改稿截止日期">
          {getFieldDecorator('date-picker', config)(
            <DatePicker placeholder="请输入新的修改稿截止日期" />
          )}
        </FormItem>

        <FormItem label="其他">
          {getFieldDecorator('abstract', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <TextArea
              placeholder="请输入其他信息"
              autosize={{ minRows: 5, maxRows: 5 }}
            />
          )}
        </FormItem>
      </Form>
    )
  }
}

const ModifyForm = Form.create()(ModForm)

export default ModifyForm
