import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { Input, Form, Radio, Upload, Button, Icon, Checkbox } from 'antd'

const Label = styled.div`
  width: 110px;
  font-size: 15px;
`
const RadioGroup = Radio.Group

const FormItem = Form.Item

const StyledButton = styled(InjectClass(Button))`
  display: inline-block;
`

class MeetingRegister extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form className="login-form">
          <FormItem>
            <Label>论文编号</Label>
            <Input placeholder="只聆听参会者无需填写此项" />
          </FormItem>
          <FormItem>
            <Label>参会人员信息</Label>
            <Input placeholder="请输入姓名" />
            <Input placeholder="请输入性别" />
            <Input placeholder="请输入联系方式" />
            <RadioGroup>
              <Radio value={1}>预定住宿</Radio>
              <Radio value={2}>不预定住宿</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Label>注册费缴费凭证</Label>
            <Upload>
              <Button>
                <Icon type="upload" /> 请上传PDF文件或照片
              </Button>
            </Upload>
          </FormItem>
          <FormItem>
            <Checkbox>聆听参会</Checkbox>
            <div>
              <StyledButton onClick={() => this.props.handleSubmit(false)}>
                取消
              </StyledButton>
              <StyledButton
                type="primary"
                style={{ marginLeft: 40 }}
                onClick={this.props.handleSubmit}
              >
                确认
              </StyledButton>
            </div>
          </FormItem>
        </Form>
      </React.Fragment>
    )
  }
}

export default MeetingRegister
