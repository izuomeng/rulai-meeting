import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import styled from 'styled-components'
import { search } from '@/services/user'
import { debounce } from 'lodash'
import router from 'umi/router'
import Item from './Item'

const Container = styled.div`
  position: relative;
  display: inline-block;
`
const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  display: ${props => (props.show ? 'block' : 'none')};
  background-color: #fff;
  box-shadow: 0 0 8px darkgrey;
  border-radius: 3px;
  color: #000;
  overflow: auto;
  max-height: 400px;
`

class Search extends Component {
  state = {
    results: [],
    searchInput: ''
  }
  handleInput = e => {
    if (!e.target.value) {
      return this.setState({ results: [], searchInput: '' })
    }
    this.setState({ searchInput: e.target.value })
    this.betterSearch(e.target.value)
  }
  betterSearch = debounce(this.handleSearch, 200)
  async handleSearch(value) {
    const {
      data: { data }
    } = await search(value)
    this.setState({ results: data.items })
  }
  handleClick = id => {
    this.setState({ results: [], searchInput: '' }, () =>
      router.push(`/detail/${id}`)
    )
  }
  render() {
    const { results, searchInput } = this.state
    return (
      <Container>
        <Input
          value={searchInput}
          onChange={this.handleInput}
          placeholder="搜索"
          prefix={<Icon type="search" />}
          style={{ width: 200, verticalAlign: 2 }}
        />
        <Dropdown show={results.length > 0}>
          {results.map(result => (
            <Item
              keyword={searchInput}
              key={result.title}
              handleClick={this.handleClick}
              id={result.id}
              title={result.title}
            />
          ))}
        </Dropdown>
      </Container>
    )
  }
}

export default Search
