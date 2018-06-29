import React from 'react'
import { Icon } from 'antd'
import styled from 'styled-components'

const AvatarContainer = styled.div`
  display: inline-block;
  float: right;
  margin-right: 24px;
  cursor: pointer;
  font-size: 1.5em;
`

const Avatar = () => {
  return (
    <AvatarContainer>
      <Icon type="user" />
    </AvatarContainer>
  )
}

export default Avatar
