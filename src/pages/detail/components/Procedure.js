import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import Theme from './Theme'
import { Steps, Popover } from 'antd'

const Step = Steps.Step

const StyledSteps = styled(InjectClass(Steps))`
  margin: 40px 50px 20px 50px !important;
  width: auto !important;
  & .ant-steps-item-description {
    text-align: center !important;
  }
`

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        {
          [
            '用户投递论文',
            '等待录用结果，“修改后录用”提交修改稿',
            '发布录用结果，用户报名注册会议',
            '报名注册截止，可查看报名结果',
            '会议开始，用户参会',
            '会议结束'
          ][index]
        }
      </span>
    }
  >
    {dot}
  </Popover>
)

const Procedure = props => {
  return (
    <React.Fragment>
      <Theme content={props.label} />
      <StyledSteps current={props.checkPoint} progressDot={customDot}>
        <Step title="投稿中" description={props.data.setDate} />
        <Step title="已截止" description={props.data.ddlDate} />
        <Step title="注册中" description={props.data.informDate} />
        <Step title="截止注册" description={props.data.registerDate} />
        <Step title="会议中" description={props.data.confBeginDate} />
        <Step title="会议结束" description={props.data.confEndDate} />
      </StyledSteps>
    </React.Fragment>
  )
}

export default Procedure
