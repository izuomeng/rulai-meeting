import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'
import { Menu } from 'antd'
import Avatar from './components/Avatar'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'

const StyledMenu = styled(InjectClass(Menu))`
  border-bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
class Layout extends React.Component {
  state = {
    current: this.props.location.pathname
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
    router.push(e.key)
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
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="/">Lein Meeting</Menu.Item>
          <Menu.Item key="/home">Home</Menu.Item>
          <Menu.Item key="/collection">Collection</Menu.Item>
          <Avatar />
        </StyledMenu>
        <div style={{ marginTop: 46, paddingTop: 1 }}>{children}</div>
      </React.Fragment>
    )
  }
}

export default withRouter(Layout)
