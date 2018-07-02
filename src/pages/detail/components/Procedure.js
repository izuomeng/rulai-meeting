import React from 'react'
import Theme from './Theme'
import { Timeline } from 'antd'

const Procedure = props => {
  return (
    <React.Fragment>
      <Theme content={props.label} />
      <Timeline style={{ marginLeft: 100, marginTop: 20 }}>
        <Timeline.Item color="green">创建会议</Timeline.Item>
        <Timeline.Item color="#33CCFF" style={{ fontWeight: 'bold' }}>
          机构审核
        </Timeline.Item>
        <Timeline.Item color="grey">论文投稿</Timeline.Item>
        <Timeline.Item color="grey">修改稿审核</Timeline.Item>
        <Timeline.Item color="grey">会议结束</Timeline.Item>
      </Timeline>
    </React.Fragment>
  )
}

export default Procedure
