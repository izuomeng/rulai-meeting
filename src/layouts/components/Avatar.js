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
const logout = dispatch => {
  dispatch({ type: 'user/clear' })
  router.push('/login')
}

const Avatar = ({ userInfo, dispatch }) => {
  const { role } = userInfo
  return (
    <AvatarContainer>
      {userInfo.userName ? (
        <Dropdown
          overlay={
            <Menu>
              {role === 'user' && (
                <Menu.Item key="0">
                  <Link to="/info">个人信息</Link>
                </Menu.Item>
              )}
              {role === 'user' && (
                <Menu.Item key="1">
                  <Link to="/collection">我的收藏</Link>
                </Menu.Item>
              )}
              <Menu.Item>
                <a onClick={() => logout(dispatch)}>登出</a>
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
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
