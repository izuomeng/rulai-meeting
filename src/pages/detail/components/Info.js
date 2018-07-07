import React from 'react'
import { Card, Icon } from 'antd'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'

const MyContainer = styled.div`
  margin-bottom: 15px;
`

const Theme = styled(
  InjectClass(props => (
    <MyContainer>
      <Icon type="line-chart" style={{ fontSize: 25 }} />
      <span className={props.className}>
        {props.label}：{props.value}
      </span>
    </MyContainer>
  ))
)`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
`

const Tip = styled(
  InjectClass(props => (
    <div className={props.className}>
      <Icon type={props.iconType} style={{ marginRight: 6, fontSize: 16 }} />
      {props.label}: {props.value}
    </div>
  ))
)`
  margin-top: 10px;
`

const ContainerPar = styled.div`
  display: flex;
`
const ContainerKid = styled.div`
  padding-left: 30px;
  flex: 1;
`

const Info = ({ meeting }) => {
  return (
    <Card style={{ padding: '30px' }}>
      <Theme label="会议名称" value={meeting.title} />
      <ContainerPar>
        <ContainerKid>
          <Tip
            label="发布机构名称"
            value={meeting.organization.name}
            iconType="home"
          />
          <Tip label="邮箱地址" value={meeting.contact} iconType="mail" />
          <Tip label="注册费用" value={meeting.cost} iconType="pay-circle-o" />
        </ContainerKid>
        <ContainerKid>
          <Tip
            label="会议创建日期"
            value={meeting.setDate}
            iconType="clock-circle-o"
          />
          <Tip
            label="论文截稿日期"
            value={meeting.ddlDate}
            iconType="clock-circle-o"
          />
          <Tip
            label="录用通知日期"
            value={meeting.informDate}
            iconType="clock-circle-o"
          />
        </ContainerKid>
        <ContainerKid>
          <Tip
            label="注册截止日期"
            value={meeting.registerDate}
            iconType="clock-circle-o"
          />
          <Tip
            label="会议开始日期"
            value={meeting.confBeginDate}
            iconType="clock-circle-o"
          />
          <Tip
            label="会议结束日期"
            value={meeting.confBeginDate}
            iconType="clock-circle-o"
          />
        </ContainerKid>
      </ContainerPar>
    </Card>
  )
}

export default Info
