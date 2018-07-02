import React from 'react'
import { Input, DatePicker } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const Label = styled.div`
  width: 110px;
  font-size: 15px;
`

const Title = styled.div`
  width: 110px;
  font-size: 18px;
  font-weight: bold;
`
const StyledInput = styled(InjectClass(Input))`
  width: 260px !important;
`
const date = [
  {
    label: '截稿日期',
    input: '请选择截稿日期'
  },
  {
    label: '录用通知日期',
    input: '请选择录用通知日期'
  },
  {
    label: '会议注册日期',
    input: '请选择会议注册日期'
  },
  {
    label: '会议开始日期',
    input: '请选择会议开始日期'
  }
]
const Date = ({ date }) => {
  return (
    <React.Fragment>
      {date.map(item => (
        <div style={{ marginBottom: 20 }}>
          <Label style={{ display: 'inline-block' }}>{item.label}</Label>
          <DatePicker
            placeholder={item.input}
            style={{ display: 'inline-block' }}
          />
        </div>
      ))}
    </React.Fragment>
  )
}
const { TextArea } = Input
class PublishInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title>会议信息</Title>
        <hr />
        <Label>会议标题</Label>
        <StyledInput placeholder="请输入会议标题" />
        <Label>会议简介</Label>
        <TextArea row={6} style={{ width: 500, height: 200 }} />
        <Label>征文信息</Label>
        <TextArea row={6} style={{ width: 500, height: 200 }} />
        <Title>日期安排</Title>
        <hr />
        <Date date={date} />
        <Title>日程安排</Title>
        <hr />
        <Title>其他</Title>
        <Label>会议标题</Label>
        <hr />
      </React.Fragment>
    )
  }
}

export default PublishInfo
