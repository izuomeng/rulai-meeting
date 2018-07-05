import React from 'react'
import { Radio, Input } from 'antd'

const RadioGroup = Radio.Group
const { TextArea } = Input

const LogResult = ({ state, handleChange, handleOpinionChange, opinion }) => (
  <RadioGroup onChange={handleChange} value={state}>
    <Radio value={2}>通过</Radio>
    <Radio value={0}>未通过</Radio>
    <Radio value={3} style={{ marginBottom: 20 }}>
      修改后通过
    </Radio>
    {state === 3 && (
      <TextArea onChange={handleOpinionChange} value={opinion} rows={4} />
    )}
  </RadioGroup>
)

export default LogResult
