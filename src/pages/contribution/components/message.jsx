import React from 'react'
import { Form, Icon, Input, Button, Upload, message } from 'antd'
import changeContribution from '../services/changeMessage'
import { getBase64 } from '@/utils'
import { transTime } from '@/utils'

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

function getNowDate() {
  var date = new Date()
  var sign1 = '-'
  var sign2 = ':'
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1 // 月
  var day = date.getDate() // 日
  var hour = date.getHours() // 时
  var minutes = date.getMinutes() // 分
  var seconds = date.getSeconds() //秒

  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (day >= 0 && day <= 9) {
    day = '0' + day
  }
  if (hour >= 0 && hour <= 9) {
    hour = '0' + hour
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = '0' + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = '0' + seconds
  }
  var currentdate =
    year +
    sign1 +
    month +
    sign1 +
    day +
    ' ' +
    hour +
    sign2 +
    minutes +
    sign2 +
    seconds
  return currentdate
}
// const props = {
//   name: 'file',
//   action: '//jsonplaceholder.typicode.com/posts/',
//   headers: {
//     authorization: 'authorization-text'
//   },
//   onChange(info) {
//     console.log(info)
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList)
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`)
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`)
//     }
//   }
// }

class SubForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: []
    }
    this.feeImages = ''
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      console.info(values)
      values.files = [this.feeImages]
      const repostDate = getNowDate()
      const newValues = {
        ...values,
        repostDate: transTime(repostDate),
        paperId: this.props.paperId
      }
      this.props.onCancel()
      if (!err) {
        console.log('Received values of form: ', newValues)
        const { data } = await changeContribution(newValues, this.props.paperId)
        console.info(data)

        if (data.errorCode === 0) {
          message.success('提交修改稿成功')
        }
        return
      }
    })
  }

  handleChange = async ({ file }) => {
    const base64 = await getBase64(file)
    this.feeImages = base64
  }
  handleRemove = () => {
    this.setState({ fileList: [] })
  }
  beforeUpload = file => {
    this.setState({
      fileList: [file]
    })
    return false
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { fileList } = this.state
    return (
      <React.Fragment>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: 'inline-block',
              color: 'rgba(0, 0, 0, 0.85)',
              fontSize: 14
            }}
          >
            修改意见:
          </div>
          <div
            style={{
              display: 'inline-block',
              color: 'rgba(0, 0, 0, 0.85)',
              fontSize: 14
            }}
          >
            {this.props.opinion}
          </div>
        </div>

        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="修改信息">
            {getFieldDecorator('modInfo', {
              rules: [{ required: true, message: '请填写修改信息' }]
            })(
              <TextArea
                placeholder="请在此处填写修改说明"
                autosize={{ minRows: 5, maxRows: 5 }}
                style={{ marginTop: 6 }}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('files', {
              rules: [{ required: true, message: '请上传修改后的论文' }]
            })(
              <Upload
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
                onRemove={this.handleRemove}
              >
                {fileList.length === 0 && (
                  <Button>
                    <Icon type="upload" /> 提交修改后的文件
                  </Button>
                )}
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
      </React.Fragment>
    )
  }
}

const SubmitForm = Form.create()(SubForm)

export default SubmitForm
