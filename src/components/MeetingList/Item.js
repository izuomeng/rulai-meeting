import React from 'react'
import { Card, Icon } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { transTime } from '@/utils'

const Tip = styled(
  InjectClass(props => (
    <span className={props.className}>
      <Icon type={props.icon} style={{ marginRight: '8px' }} />
      {props.label}: {props.value}
    </span>
  ))
)`
  margin-right: 20px;
  color: #aeb0b3;
`

const StyledCard = styled(InjectClass(Card))`
  margin: 30px auto !important;
  width: 75%;
  cursor: default;
`

const Introduce = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  min-height: 20px;
`

const Item = ({ meeting, handleClick = () => {}, extra }) => {
  let selfExtra = extra
  if (typeof extra === 'function') {
    const Extra = extra
    selfExtra = <Extra meeting={meeting} />
  }
  return (
    <StyledCard
      bordered={false}
      hoverable
      title={meeting.title}
      extra={selfExtra}
    >
      <Introduce onClick={handleClick}>{meeting.introduction}</Introduce>
      <div>
        <Tip icon="solution" label="机构" value={meeting.organization.name} />
        <Tip
          icon="clock-circle"
          label="截稿时间"
          value={transTime(meeting.ddlDate, false)}
        />
        <Tip
          icon="clock-circle-o"
          label="开始日期"
          value={transTime(meeting.confBeginDate, false)}
        />
      </div>
    </StyledCard>
  )
}

export default Item
