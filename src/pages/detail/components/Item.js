import React from 'react'
import styled from 'styled-components'
import Theme from './Theme'

const Container = styled.div`
  margin: 0px 50px 0px 50px;
  padding-left: 20px;
  padding-right: 20px;
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

const Item = props => {
  return (
    <React.Fragment>
      <Theme content={props.label} />
      <Content content={props.value} />
    </React.Fragment>
  )
}

export default Item
