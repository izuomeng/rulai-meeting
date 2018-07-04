import React from 'react'
import { Form, Icon, Input, Button, Upload, message } from 'antd'
import changeContribution from '../services/changeMessage'

const FormItem = Form.Item
const { TextArea } = Input
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

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

class SubForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        changeContribution(values, this.props.paperId)
        return
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="修改信息">
          {getFieldDecorator('abstract', {
            rules: [{ required: true, message: '请填写修改信息' }]
          })(
            <TextArea
              placeholder="修改信息"
              autosize={{ minRows: 5, maxRows: 5 }}
              style={{ marginTop: 6 }}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('upload', {
            rules: [{ required: true, message: '请上传修改后的论文' }]
          })(
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> 提交修改后的PDF格式论文
              </Button>
            </Upload>
          )}
        </FormItem>
        <Button
          key="back"
          onClick={this.props.onCancel}
          style={{ marginLeft: 320 }}
        >
          取消
        </Button>
        <Button
          key="submit"
          type="primary"
          onClick={this.handleSubmit}
          style={{ marginLeft: 10 }}
        >
          提交
        </Button>
      </Form>
    )
  }
}

const SubmitForm = Form.create()(SubForm)

export default SubmitForm
