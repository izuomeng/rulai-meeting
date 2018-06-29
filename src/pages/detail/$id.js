import React from 'react'
import withRouter from 'umi/withRouter'

const Detail = ({ location, match }) => {
  console.log(match)
  return <div>会议详情：{match.params.id}</div>
}

export default withRouter(Detail)
