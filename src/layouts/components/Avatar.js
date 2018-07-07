import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Icon, Button, Modal, message } from 'antd'
import Link from 'umi/link'
import { connect } from 'dva'
import router from 'umi/router'
import { resetPwd } from '@/services/user'
import Password from './Password'

const AvatarContainer = styled.div`
  cursor: pointer;
  font-size: 1.5em;
  display: inline-block;
`
const logout = dispatch => {
  dispatch({ type: 'user/clear' })
  router.push('/login')
}

class Avatar extends React.Component {
  state = {
    resetShow: false
  }
  resetPwd = () => {}
  handleSubmit = data => {
    if (data) {
      if (data.newPassword === data.originalPassword) {
        return message.error('新旧密码不能相同')
      }
    }
    this.setState({ resetShow: false }, async () => {
      if (!data) {
        return
      }
      await resetPwd(data)
      message.success('修改密码成功, 请重新登陆')
      router.push('/login')
    })
  }
  render() {
    const { userInfo, dispatch } = this.props
    const role = userInfo && userInfo.role

    return (
      <AvatarContainer>
        {userInfo && userInfo.id ? (
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
                  <a onClick={() => this.setState({ resetShow: true })}>
                    修改密码
                  </a>
                </Menu.Item>
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
            登录
          </Button>
        )}
        <Modal
          destroyOnClose
          title="修改密码"
          visible={this.state.resetShow}
          onCancel={() => this.setState({ resetShow: false })}
          footer={null}
        >
          <Password handleSubmit={this.handleSubmit} />
        </Modal>
      </AvatarContainer>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(
  mapState,
  null
)(Avatar)
