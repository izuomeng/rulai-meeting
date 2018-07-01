import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px 160px 0px 50px;
  padding-left: 20px;
  padding-top: 12px;
`

const Text = styled.p`
  line-height: 25px;
`

const Content = ({ content }) => {
  return (
    <Container>
      <Text>{content}</Text>
    </Container>
  )
}

export default Content
