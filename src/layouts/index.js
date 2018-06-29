import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'
import { Menu } from 'antd'
import Avatar from './components/Avatar'

function Layout(props) {
  // 拦截器，处理认证重定向等情况
  const { location } = props
  if (location.pathname === '/never') {
    router.push('/')
  }
  return (
    <React.Fragment>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>Ant Design</Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Avatar />
      </Menu>
      {props.children}
    </React.Fragment>
  )
}

export default withRouter(Layout)
