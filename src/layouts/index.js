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

function Layout(props) {
  // 拦截器，处理认证重定向等情况
  const { location } = props
  if (location.pathname === '/never') {
    router.push('/')
  }
  return (
    <React.Fragment>
      <StyledMenu mode="horizontal" theme="dark">
        <Menu.Item>Lein Meeting</Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Avatar />
      </StyledMenu>
      {props.children}
    </React.Fragment>
  )
}

export default withRouter(Layout)
