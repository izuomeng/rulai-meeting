import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { getBase64 } from '@/utils'
import produce from 'immer'
import { Input, Form, Radio, Upload, Button, Icon } from 'antd'

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
          {
            name: '',
            realID: '',
            sex: '',
            ordered: false
          }
        ],
        evidence: []
      },
      fileList: [],
      loading: false
    }
    this.evidence = ''
  }
  handleChange = async ({ file }) => {
    const base64 = await getBase64(file)
    this.evidence = [base64]
    this.setState({
      joinConferenceGroup: {
        ...this.state.joinConferenceGroup,
        evidence: this.evidence
      }
    })
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
  changeLoad = () => {
    this.loading = true
  }
  render() {
    const { fileList, loading, ...form } = this.state
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
                  group => {
                    group.joinConferencePeopleList[0].name = e.target.value
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
              placeholder="请输入姓名"
            />
            <RadioGroup
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    if (e.target.value === 1) {
                      obj.joinConferencePeopleList[0].sex = '男'
                    } else {
                      obj.joinConferencePeopleList[0].sex = '女'
                    }
                  }
                )
                this.setState({ joinConferenceGroup: newGroup })
              }}
            >
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </RadioGroup>
            {/* <Input
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
              placeholder="请输入性别" */}

            <Input
              value={
                this.state.joinConferenceGroup.joinConferencePeopleList[0]
                  .realID
              }
              onChange={e => {
                const newGroup = produce(
                  this.state.joinConferenceGroup,
                  obj => {
                    obj.joinConferencePeopleList[0].realID = e.target.value
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
                    if (e.target.value === 1) {
                      obj.joinConferencePeopleList[0].ordered = true
                    } else {
                      obj.joinConferencePeopleList[0].ordered = false
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
          </FormItem>
          <FormItem>
            {/* <Checkbox
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
            </Checkbox> */}
            <div>
              <StyledButton onClick={() => this.props.handleSubmit(false)}>
                取消
              </StyledButton>
              <StyledButton
                type="primary"
                style={{ marginLeft: 40 }}
                loading={loading}
                onClick={() => {
                  this.setState({ loading: true })
                  this.props.handleSubmit({ ...form })
                }}
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
