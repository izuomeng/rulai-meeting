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

const ItemCollection = ({ meeting, handleClick = () => {} }) => {
  return (
    <Card
      hoverable
      title={meeting.title}
      onClick={handleClick}
      extra={
        <a style={{ color: 'red' }}>
          <Icon type="close-square-o" style={{ marginRight: '8px' }} />删除
        </a>
      }
      style={{ margin: '30px auto', maxWidth: '800px' }}
    >
      <div style={{ marginBottom: '20px' }}>{meeting.introduction}</div>
      <div>
        <Tip icon="solution" label="机构" value={meeting.organization.name} />
        <Tip
          icon="clock-circle-o"
          label="开始日期"
          value={transTime(meeting.confBeginDate)}
        />
        <Tip
          icon="clock-circle"
          label="结束日前"
          value={transTime(meeting.ddlDate)}
        />
      </div>
    </Card>
  )
}

export default ItemCollection
