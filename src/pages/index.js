import React from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import styles from './index.css'
import router from 'umi/router'

const StyledButton = styled.button`
  font-size: 1.5em;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-left: 40px;
  margin-right: 60px;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  transition: 0.3s;
  :hover {
    background: transparent;
    border: 2px solid #47c479;
    color: #47c479;
  }
`

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.title}>
          Welcome to Lein Meeting!
        </div>
      </div>
      <div className={styles.list}>
        <StyledButton onClick={() => router.push('/home')}>
          查看会议
        </StyledButton>
        <StyledButton onClick={() => router.push('/publish')}>
          发布会议
        </StyledButton>
      </div>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
