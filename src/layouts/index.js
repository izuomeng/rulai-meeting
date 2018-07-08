import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'
import { Menu } from 'antd'
import Avatar from './components/Avatar'
import { InjectClass } from '@/utils/HOC'
import styled from 'styled-components'
import Search from 'CP/Search'
import { connect } from 'dva'
import Loading from 'CP/Loading'

const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

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

const Children = styled.div`
  margin-top: 46px;
  overflow: auto;
  position: relative;
`
const WithoutHeader = styled.div`
  overflow: auto;
`
class Layout extends React.PureComponent {
  state = {
    current: this.props.location.pathname
  }
  static getDerivedStateFromProps(nextProp, prevState) {
    const inNavBar = path =>
      [
        '/',
        '/home',
        '/collection',
        '/released',
        '/admin',
        '/contribution',
        '/account',
        '/my-register'
      ].includes(path)
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
    if (!e.key) {
      return
    }
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
      children,
      userInfo
    } = this.props
    const role = userInfo && userInfo.role
    if (this.withoutHeader(pathname)) {
      return <WithoutHeader>{children}</WithoutHeader>
    }
    return (
      <React.Fragment>
        <Filter />
        <StyledMenu
          mode="horizontal"
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="/">Lein Meeting</Menu.Item>
          {role === 'admin' && <Menu.Item key="/admin">管理</Menu.Item>}
          {role !== 'organizer' &&
            role !== 'admin' && <Menu.Item key="/home">主页</Menu.Item>}
          {role === 'user' && (
            <Menu.Item key="/contribution">我的投稿</Menu.Item>
          )}
          {role === 'user' && (
            <Menu.Item key="/my-register">我的注册</Menu.Item>
          )}
          {role === 'user' && <Menu.Item key="/collection">收藏夹</Menu.Item>}
          {role === 'organizer' && (
            <Menu.Item key="/released">我的发布</Menu.Item>
          )}
          {role === 'organizer' &&
            userInfo.root && <Menu.Item key="/account">账号管理</Menu.Item>}
          <RightContainer>
            <Search />
            <Avatar />
          </RightContainer>
        </StyledMenu>
        <Children>{userInfo ? children : <Loading />}</Children>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(withRouter(Layout))
