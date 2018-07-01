import React from 'react'
import withRouter from 'umi/withRouter'
import Info from './components/Info'
import Theme from './components/Theme'
import Content from './components/Content'
import { Timeline, Button } from 'antd'
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants'
import { getMeetingsByID } from './services/meeting'

const fakeData = {
  id: 1,
  title: '讨论崔明亮有多傻大会',
  introduction:
    '这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。这是一个非常严肃的会议，讨论崔明亮有多傻大会。',
  requirement:
    '凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。凡是说崔明亮傻的材料都可以入围。',
  ddlDate: '2018.5.22',
  informDate: '2018.5.22',
  registerDate: '2018.6.22',
  confBeginDate: '2018.7.22',
  organization: {
    id: 1,
    name: '北航'
  },
  storagePath: ['d:/', 'e:/', 'c:/'],
  cost: '130',
  accommodationInfo:
    '批判的最狠的住总统包房，批判的一般的住普通酒店，表扬的住厕所',
  contact: '110',
  confEndDate: '2018.8.22',
  schedule: '日程安排'
}

const Detail = ({ location, match }) => {
  console.log(match)
  return (
    <div
      style={{
        backgroundColor: 'white',
        margin: '0px auto',
        width: '70%',
        minWidth: 800
      }}
    >
      {/* <div>会议详情：{match.params.id}</div> */}
      <Info meeting={fakeData} />

      <Theme content="会议流程" />
      <Timeline style={{ marginLeft: 100, marginTop: 20 }}>
        <Timeline.Item color="green">创建会议</Timeline.Item>
        <Timeline.Item color="#33CCFF" style={{ fontWeight: 'bold' }}>
          机构审核
        </Timeline.Item>
        <Timeline.Item color="grey">论文投稿</Timeline.Item>
        <Timeline.Item color="grey">修改稿审核</Timeline.Item>
        <Timeline.Item color="grey">会议结束</Timeline.Item>
      </Timeline>

      <Theme content="会议简介" />
      <Content content={fakeData.introduction} />

      <Theme content="正文信息" />
      <Content content={fakeData.requirement} />

      <Theme content="住宿交通" />
      <Content content={fakeData.accommodationInfo} />

      <Button
        type="primary"
        icon="download"
        size={'large'}
        style={{ margin: '40px 0px 60px 200px' }}
      >
        下载论文模板
      </Button>
      <Button
        type="primary"
        size={'large'}
        style={{ marginLeft: 200, width: 150 }}
      >
        在线会议投稿
      </Button>
    </div>
  )
}

export default withRouter(Detail)
