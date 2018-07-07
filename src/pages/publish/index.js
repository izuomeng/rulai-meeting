import React, { Component } from 'react'
import { Card, Form, Button, message, Upload, Icon } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { transTime, getBase64 } from '@/utils'
import { connect } from 'dva'
import router from 'umi/router'
import { publish } from './services/publish'
import FormItem from './components/FormItem'

const AntdFormItem = Form.Item
const Container = styled(InjectClass(Card))`
  width: 75%;
  margin: 0 auto !important;
  min-width: 800px;
  min-height: calc(100vh - 46px);
  padding: 60px 0 !important;
  & > div {
    width: 650px;
    margin: 0 auto;
  }
`

const Footer = styled.div`
  text-align: center;
`

class Publish extends Component {
  state = {
    fileList: []
  }
  file = ''
  handleSubmit = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      const form = {
        ...fieldsValue,
        confBeginDate: transTime(fieldsValue.confDate[0]),
        confEndDate: transTime(fieldsValue.confDate[1]),
        ddlDate: transTime(fieldsValue.ddlDate),
        informDate: transTime(fieldsValue.informDate),
        registerDate: transTime(fieldsValue.registerDate)
      }
      this.publishMeeting(form)
    })
  }
  async publishMeeting(form) {
    try {
      const { userInfo } = this.props
      await publish(userInfo.organization.id, { ...form, file: [this.file] })
      message.success('发布成功')
      router.push('/released')
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = async ({ file }) => {
    const base64 = await getBase64(file)
    this.file = base64
  }
  handleRemove = () => {
    this.file = ''
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
    return (
      <Container>
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
            label="截稿日期"
            prop="ddlDate"
            message="截稿日期不能为空"
            isDatePicker
          />
          <FormItem
            decorator={getFieldDecorator}
            label="录用通知日期"
            prop="informDate"
            message="录用通知日期不能为空"
            isDatePicker
          />
          <FormItem
            decorator={getFieldDecorator}
            label="注册截止日期"
            prop="registerDate"
            message="注册截止日期不能为空"
            isDatePicker
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
            message="注册费用不能为空"
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
          <AntdFormItem {...formItemLayout} label="论文模版">
            {getFieldDecorator('file', {})(
              <Upload
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
                onRemove={this.handleRemove}
              >
                {fileList.length === 0 && (
                  <Button>
                    <Icon type="upload" /> 请上传PDF文件或照片
                  </Button>
                )}
              </Upload>
            )}
          </AntdFormItem>
        </Form>
        <Footer>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            style={{ width: '20%' }}
          >
            提交
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(Form.create()(Publish))
