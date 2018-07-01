import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Icon } from 'antd'
import Link from 'umi/link'

const AvatarContainer = styled.div`
  float: right;
  margin-right: 24px;
  cursor: pointer;
  font-size: 1.5em;
`
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">个人信息</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/collection">我的收藏</Link>
    </Menu.Item>
  </Menu>
)

const Avatar = () => {
  return (
    <AvatarContainer>
      <Dropdown overlay={menu} trigger={['click']}>
        <Icon type="user" />
      </Dropdown>
    </AvatarContainer>
  )
}

export default Avatar
