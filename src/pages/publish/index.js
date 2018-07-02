import React from 'react'
import { connect } from 'dva'
import styles from './Release.css'
import { Divider } from 'antd'
import { Input } from 'antd'
import { DatePicker } from 'antd'
import { Timeline } from 'antd'
import { Upload, Icon, message } from 'antd'
import { Card } from 'antd'

const { TextArea } = Input
const Dragger = Upload.Dragger

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}
function onChange(date, dateString) {
  console.log(date, dateString)
}
function ReleasePage() {
  return (
    <div className={styles.normal}>
      <Card className={styles.card1}>
        <div className={styles.tag15}>
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
      </Card>

      <Card className={styles.card2}>
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
      </Card>

      <Card className={styles.card3}>
        <div className={styles.tag15}>
          <h1 className={styles.title}>日程安排</h1>
        </div>
        <Divider />
        <div className={styles.datetable}>
          <Timeline>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="green">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </div>
      </Card>

      <Card className={styles.card3}>
        <div className={styles.tag15}>
          <h1 className={styles.title}>其他</h1>
        </div>
        <Divider />
        <div className={styles.date11}>
          <div className={styles.tag26}>
            <p className={styles.tag2}>注册费用</p>
          </div>
          <div className={styles.date21}>
            <Input placeholder="请输入注册费用" style={{ width: '100%' }} />
          </div>
        </div>
        <div className={styles.date11}>
          <div className={styles.tag26}>
            <p className={styles.tag2}>联系方式</p>
          </div>
          <div className={styles.date21}>
            <Input placeholder="请输入联系方式" style={{ width: '100%' }} />
          </div>
        </div>
        <div className={styles.date11}>
          <div className={styles.tag26}>
            <p className={styles.tag2}>住宿交通</p>
          </div>
          <div className={styles.date21}>
            <TextArea rows={8} style={{ width: '100%' }} />
          </div>
        </div>
        <div className={styles.tag12}>
          <p className={styles.tag2}>上传论文模板</p>
        </div>

        <div className={styles.upload}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </div>
      </Card>
    </div>
  )
}

ReleasePage.propTypes = {}

export default connect()(ReleasePage)
