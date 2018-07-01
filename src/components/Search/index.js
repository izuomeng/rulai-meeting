import React, { Component } from 'react'
import { Input, Icon } from 'antd'

class Search extends Component {
  render() {
    return (
      <Input
        placeholder="搜索"
        prefix={<Icon type="search" />}
        style={{ width: 200, verticalAlign: 2 }}
      />
    )
  }
}

export default Search
