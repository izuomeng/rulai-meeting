import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px 50px 0px 50px;
  border-bottom: 1px solid #e8e8e8;
  height: 50px;
  padding-left: 20px;
  font-size: 1.2em;
  font-weight: bolder;
  padding-top: 12px;
`

const Theme = ({ content }) => {
  return <Container>{content}</Container>
}

export default Theme
