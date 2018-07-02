import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import produce from 'immer'
import { Input, Form, Radio, Upload, Button, Icon, Checkbox } from 'antd'

const FormItem = Form.Item
const Label = styled.div`
  width: 110px;
  font-size: 15px;
`
const RadioGroup = Radio.Group

const StyledButton = styled(InjectClass(Button))`
  display: inline-block;
`

class MeetingRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joinConferenceGroup: {
        paperID: null,
        joinConferencePeopleList: [
          { name: '' },
          { realID: '' },
          { sex: '' },
          { ordered: false }
        ],
        listenMeeting: false
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <Form className="login-form">
          <FormItem>
            <Label>论文编号</Label>
            <Input
              value={this.state.joinConferenceGroup.paperID}
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    obj.paperID = e.target.value
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
              placeholder="只聆听参会者无需填写此项"
            />
          </FormItem>
          <FormItem>
            <Label>参会人员信息</Label>
            <Input
              value={
                this.state.joinConferenceGroup.joinConferencePeopleList[0].name
              }
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    obj.joinConferencePeopleList[0].name = e.target.value
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
              placeholder="请输入姓名"
            />
            <Input
              value={
                this.state.joinConferenceGroup.joinConferencePeopleList[2].sex
              }
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    obj.joinConferencePeopleList[2].sex = e.target.value
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
              placeholder="请输入性别"
            />
            <Input
              value={
                this.state.joinConferenceGroup.joinConferencePeopleList[1]
                  .realID
              }
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    obj.joinConferencePeopleList[1].realID = e.target.value
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
              placeholder="请输入身份证号"
            />
            <RadioGroup
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    if (e.target.value === '预定住宿') {
                      obj.joinConferencePeopleList[3].ordered = true
                    } else {
                      obj.joinConferencePeopleList[3].ordered = false
                    }
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
            >
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
            <Checkbox
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    if (e.target.checked) {
                      obj.listenMeeting = true
                    } else {
                      obj.listenMeeting = false
                    }
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
            >
              聆听参会
            </Checkbox>
            <div>
              <StyledButton onClick={() => this.props.handleSubmit(false)}>
                取消
              </StyledButton>
              <StyledButton
                type="primary"
                style={{ marginLeft: 40 }}
                onClick={() => this.props.handleSubmit(this.state)}
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
