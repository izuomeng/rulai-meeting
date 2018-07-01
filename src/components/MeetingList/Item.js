import React from 'react'
import { Card, Icon } from 'antd'
import Link from 'umi/link'
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

const Introduce = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`

const Item = ({ meeting, handleClick = () => {} }) => {
  return (
    <Card
      hoverable
      title={meeting.title}
      extra={
        <Link to="/collection">
          <Icon type="star" style={{ marginRight: '8px' }} />收藏
        </Link>
      }
      style={{ margin: '30px auto', maxWidth: '800px', cursor: 'default' }}
    >
      <Introduce onClick={handleClick}>{meeting.introduction}</Introduce>
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

export default Item
