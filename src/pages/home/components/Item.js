import React from 'react'
import { Card } from 'antd'
import Link from 'umi/link'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { transTime } from '@/utils'

const Tip = styled(
  InjectClass(props => (
    <span className={props.className}>
      {props.label}: {props.value}
    </span>
  ))
)`
  margin-right: 20px;
  color: #aeb0b3;
`

const Item = ({ meeting }) => {
  return (
    <Card
      title={meeting.title}
      extra={<Link to={`/detail/${meeting.id}`}>收藏</Link>}
      style={{ margin: '30px' }}
    >
      <div style={{ marginBottom: '20px' }}>{meeting.introduction}</div>
      <div>
        <Tip label="机构" value={meeting.organization.name} />
        <Tip label="开始日期" value={transTime(meeting.confBeginDate)} />
        <Tip label="结束日前" value={transTime(meeting.ddlDate)} />
      </div>
    </Card>
  )
}

export default Item
