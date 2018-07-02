import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'
import { Menu } from 'antd'
import Avatar from './components/Avatar'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'
import Search from 'CP/Search'

const StyledMenu = styled(InjectClass(Menu))`
  border-bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const RightContainer = styled.div`
  float: right;
  height: 46px;
  & > div,
  & > span {
    margin-right: 24px;
  }
`
class Layout extends React.Component {
  state = {
    current: this.props.location.pathname
  }
  static getDerivedStateFromProps(nextProp, prevState) {
    const inNavBar = path =>
      ['/', '/home', '/collection', '/released'].includes(path)
    const { pathname } = nextProp.location
    if (inNavBar(pathname)) {
      return {
        current: pathname
      }
    }
    return {
      current: ''
    }
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
    router.push(e.key)
  }
  withoutHeader(path) {
    return ['/login', '/register'].includes(path)
  }
  render() {
    // 拦截器，处理认证重定向等情况
    const {
      location: { pathname },
      children
    } = this.props
    if (this.withoutHeader(pathname)) {
      return <React.Fragment>{children}</React.Fragment>
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
          <Menu.Item key="/home">主页</Menu.Item>
          <Menu.Item key="/released">我的发布</Menu.Item>
          <Menu.Item key="/collection">收藏夹</Menu.Item>
          <RightContainer>
            <Search />
            <Avatar />
          </RightContainer>
        </StyledMenu>
        <div style={{ marginTop: 46, paddingTop: 1 }}>{children}</div>
      </React.Fragment>
    )
  }
}

export default withRouter(Layout)
