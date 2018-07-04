import React from 'react'
import { Form, Input, DatePicker } from 'antd'

const RangePicker = DatePicker.RangePicker
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 19 },
    sm: { span: 19 }
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
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            placeholder="选择时间"
          />
        ) : isRangePicker ? (
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['开始时间', '结束时间']}
          />
        ) : (
          <Input {...rest} />
        )
      )}
    </FormItem>
  )
}

export default MyItem
