import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router'

function Layout(props) {
  // 拦截器，处理认证重定向等情况
  const { location } = props
  if (location.pathname === '/never') {
    router.push('/')
  }
  return <React.Fragment>{props.children}</React.Fragment>
}

export default withRouter(Layout)
