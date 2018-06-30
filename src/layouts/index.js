import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'
import { Menu } from 'antd'
import Avatar from './components/Avatar'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'

const StyledMenu = styled(InjectClass(Menu))`
  border-bottom: 0;
`
class Layout extends React.Component {
  state = {
    current: this.props.location.pathname
  }
  render() {
    // 拦截器，处理认证重定向等情况
    const { location, children } = this.props
    if (location.pathname === '/never') {
      router.push('/')
    }
    return (
      <React.Fragment>
        <StyledMenu
          mode="horizontal"
          theme="dark"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item>Lein Meeting</Menu.Item>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Avatar />
        </StyledMenu>
        {children}
      </React.Fragment>
    )
  }
}

export default withRouter(Layout)
