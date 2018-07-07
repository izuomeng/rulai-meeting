import React from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import styles from './index.css'
import router from 'umi/router'

const Button = styled.div`
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
      <div className={styles.title}>Welcome to Lein Meeting!</div>
      <div className={styles.list}>
        <Button onClick={() => router.push('/home')}>现在开始</Button>
      </div>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
