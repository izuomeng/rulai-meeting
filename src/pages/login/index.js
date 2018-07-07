import React from 'react'
import styled from 'styled-components'
import LoginInfo from './components/login-info'

const Container = styled.div`
  background-color: #fff;
  padding: 26px 8px 72px;
  margin: 64px auto;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  width: 430px;
`

const Login = () => {
  return (
    <Container>
      <LoginInfo />
    </Container>
  )
}

export default Login
