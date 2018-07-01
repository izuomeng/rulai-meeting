import React from 'react'
import { Radio } from 'antd'

const RadioGroup = Radio.Group

const LogResult = ({ state, handleChange }) => {
  return (
    <RadioGroup onChange={handleChange} value={state}>
      <Radio value={2}>通过</Radio>
      <Radio value={0}>未通过</Radio>
      <Radio value={3}>修改后通过</Radio>
    </RadioGroup>
  )
}

export default LogResult
