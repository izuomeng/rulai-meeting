import React from 'react'
import { connect } from 'dva'
import styles from './Release.css'
import { Divider } from 'antd'
import { Input } from 'antd'
import { DatePicker } from 'antd'
import { Timeline } from 'antd'

const { TextArea } = Input

function onChange(date, dateString) {
  console.log(date, dateString)
}
function ReleasePage() {
  return (
    <div className={styles.normal}>
      <div className={styles.tag14}>
        <h1 className={styles.title}>会议信息</h1>
      </div>
      <Divider />
      <div className={styles.tag11}>
        <p className={styles.tag1}>会议标题</p>
      </div>
      <div className={styles.input1}>
        <Input placeholder="请输入会议名称" style={{ width: '60%' }} />
      </div>
      <div className={styles.tag12}>
        <p className={styles.tag2}>会议简介</p>
      </div>
      <div className={styles.input2}>
        <TextArea rows={8} style={{ width: '60%' }} />
      </div>
      <div className={styles.tag13}>
        <p className={styles.tag2}>征文信息</p>
      </div>
      <div className={styles.input3}>
        <TextArea rows={8} style={{ width: '60%' }} />
      </div>
      <div className={styles.tag15}>
        <h1 className={styles.title}>日期安排</h1>
      </div>
      <Divider />
      <div className={styles.date11}>
        <div className={styles.tag16}>
          <p className={styles.tag2}>截稿日期</p>
        </div>

        <div className={styles.date1}>
          <DatePicker onChange={onChange} placeholder="请选择截稿日期" />
          <br />
        </div>
      </div>
      <div className={styles.date11}>
        <div className={styles.tag16}>
          <p className={styles.tag2}>录用通知日期</p>
        </div>

        <div className={styles.date2}>
          <DatePicker onChange={onChange} placeholder="请选择录用通知日期" />
          <br />
        </div>
      </div>
      <div className={styles.date11}>
        <div className={styles.tag16}>
          <p className={styles.tag2}>会议注册日期</p>
        </div>

        <div className={styles.date2}>
          <DatePicker onChange={onChange} placeholder="请选择会议注册日期" />
          <br />
        </div>
      </div>
      <div className={styles.date11}>
        <div className={styles.tag16}>
          <p className={styles.tag2}>会议日期</p>
        </div>

        <div className={styles.date1}>
          <DatePicker onChange={onChange} placeholder="请选择会议日期" />
          <br />
        </div>
      </div>
      <div className={styles.tag15}>
        <h1 className={styles.title}>日程安排</h1>
      </div>
      <Divider />

      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>

      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  )
}

ReleasePage.propTypes = {}

export default connect()(ReleasePage)
