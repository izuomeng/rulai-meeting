import React from 'react'
import { Card, Icon } from 'antd'
import Link from 'umi/link'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { transTime } from '@/utils'
//import { Button } from 'antd'

const CoButton = styled.button`
  background: transparent;
  width: 70px;
  height: 30px;
  border: 0px;
  color: red;
  :hover {
    background-color: red;
    color: #fff;
  }
`

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
        <Link to="/collection">
          <CoButton type="danger" onClick>
            <Icon type="close-square-o" style={{ marginRight: '8px' }} />删除
          </CoButton>
        </Link>
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
