import React from 'react'
import Theme from './Theme'
import { Timeline } from 'antd'

const Procedure = props => {
  return (
    <React.Fragment>
      <Theme content={props.label} />
      <Timeline style={{ marginLeft: 100, marginTop: 20 }}>
        {['投稿中', '已截止', '注册中', '截止注册', '会议中', '会议完成'].map(
          (item, index) => {
            if (index === props.checkPoint) {
              return (
                <Timeline.Item color="green" style={{ fontWeight: 'bold' }}>
                  {item}
                </Timeline.Item>
              )
            } else if (index < props.checkPoint) {
              return <Timeline.Item color="green">{item}</Timeline.Item>
            }
            return <Timeline.Item color="grey">{item}</Timeline.Item>
          }
        )}
      </Timeline>
    </React.Fragment>
  )
}

export default Procedure
