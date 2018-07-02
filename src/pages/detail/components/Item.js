import React from 'react'
import styled from 'styled-components'
import Theme from './Theme'

const Container_c = styled.div`
  margin: 0px 160px 0px 50px;
  padding-left: 20px;
  padding-top: 12px;
`

const Text = styled.p`
  line-height: 25px;
`

const Content = ({ content }) => {
  return (
    <Container_c>
      <Text>{content}</Text>
    </Container_c>
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
