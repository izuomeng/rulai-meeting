import React from 'react'
import { Card, Icon } from 'antd'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'

const Container_t = styled.div`
  margin-bottom: 15px;
`

const Theme = styled(
  InjectClass(props => (
    <Container_t>
      <Icon type="smile-o" spin="true" style={{ fontSize: 25 }} />
      <span className={props.className}>
        {props.label}：{props.value}
      </span>
    </Container_t>
  ))
)`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
`

const Tip = styled(
  InjectClass(props => (
    <div className={props.className}>
      {props.label}: {props.value}
    </div>
  ))
)``

const Container = styled.div`
  padding-left: 30px;
  width: 30%;
  display: inline-block;
`

const Info = ({ meeting }) => {
  console.log('meeting', meeting)
  return (
    <Card style={{ padding: '30px' }}>
      <Theme label="会议名称" value={meeting.title} />
      <Container>
        <Tip label="发布机构" value={meeting.organization.name} />
        <Tip label="创建日期" value={meeting.registerDate} />
        <Tip label="截稿日期" value={meeting.ddlDate} />
        <Tip label="联系方式" value={meeting.contact} />
      </Container>
      <Container>
        <Tip label="录用通知日期" value={meeting.informDate} />
        <Tip label="会议注册日期" value={meeting.registerDate} />
        <Tip label="会议开始日期" value={meeting.confBeginDate} />
        <Tip label="注册费用" value={meeting.cost} />
      </Container>
    </Card>
  )
}

export default Info
