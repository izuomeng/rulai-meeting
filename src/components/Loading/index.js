import React from 'react'
import styled from 'styled-components'
import { Spin, Icon } from 'antd'

const L = ({ className }) => (
  <div className={className}>
    <Spin indicator={<Icon type="loading" style={{ fontSize: 40 }} spin />} />
  </div>
)
const Loading = styled(L)`
  text-align: center;
  margin-top: calc(50vh - 40px);
`

export default Loading
