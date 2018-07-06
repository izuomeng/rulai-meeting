import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 8px 10px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #f0fff3;
  }
`

const Item = ({ title = '', id, handleClick, keyword }) => {
  const html = title.replace(
    keyword,
    `<span style="color: #6dd192">${keyword}</span>`
  )
  return (
    <Container
      onClick={() => handleClick(id)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Item
