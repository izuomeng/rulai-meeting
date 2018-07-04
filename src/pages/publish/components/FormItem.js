import React from 'react'
import { Form, Input, DatePicker } from 'antd'

const RangePicker = DatePicker.RangePicker
const FormItem = Form.Item
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

const MyItem = ({
  label,
  prop,
  decorator: getFieldDecorator,
  required = true,
  message,
  rules = [],
  isDatePicker = false,
  isRangePicker = false,
  ...rest
}) => {
  const config = {
    rules: [{ required, message }, ...rules]
  }
  return (
    <FormItem {...formItemLayout} label={label}>
      {getFieldDecorator(prop, config)(
        isDatePicker ? (
          <DatePicker />
        ) : isRangePicker ? (
          <RangePicker />
        ) : (
          <Input {...rest} />
        )
      )}
    </FormItem>
  )
}

export default MyItem
