import React from 'react'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import { Button } from 'antd'

const Card = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background: #fff;
  border-radius: 3px;
  margin: 0 auto;
  width: 80%;
  min-width: 800px;
  min-height: 100px;
  margin-top: 50px;
  padding-top: 1px;
  padding-bottom: 20px;
`

const Title = styled.div`
  position: relative;
  color: #fff;
  margin: 0 12px;
  margin-top: -20px;
  padding: 15px;
  border-radius: 3px;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1.2em;
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);
`
const AddButton = styled(InjectClass(Button))`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`
const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.62);
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.8em;
  margin-top: 4px;
`
const TitleCard = ({ children }) => {
  return (
    <Card>
      <Title>
        <AddButton shape="circle" icon="plus" />
        已发布会议
        <SubTitle>查看和编辑已发布会议，新建会议</SubTitle>
      </Title>
      {children}
    </Card>
  )
}

export default TitleCard
