import styled from 'styled-components'

const Container = styled.div`
  margin: 10px 0 10px 10px;
  font-size: 1.3em;
`

const MyFormItem = ({ content }) => {
  return <Container>{content}</Container>
}

export default MyFormItem
