import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Icon, Button } from 'antd'
import Link from 'umi/link'
import { connect } from 'dva'
import router from 'umi/router'

const AvatarContainer = styled.div`
  cursor: pointer;
  font-size: 1.5em;
  display: inline-block;
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

const Avatar = ({ userInfo }) => {
  return (
    <AvatarContainer>
      {userInfo /* .userName */ ? (
        <Dropdown overlay={menu} trigger={['click']}>
          <Icon type="user" />
        </Dropdown>
      ) : (
        <Button
          onClick={() => router.push('/login')}
          style={{ verticalAlign: 2 }}
          type="primary"
        >
          登陆
        </Button>
      )}
    </AvatarContainer>
  )
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(
  mapState,
  null
)(Avatar)
