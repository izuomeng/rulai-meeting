import React from 'react'
import { connect } from 'dva'
//import { Button } from 'antd'
import styled from 'styled-components'
//import { InjectClass } from '@/utils/HOC'
import styles from './index.css'

const StyledButton = styled.button`
  font-size: 1.5em;
  font-weight: 500;
  height: 80px;
  outline: none;
  width: 200px;
  border-radius: 14px;
  margin-left: 60px;
  margin-right: 60px;
  background: transparent;
  border: 4px solid #ffffff;
  color: #ffffff;
  :hover {
    background: transparent;
    border: 4px solid #47c479;
    color: #ffffff;
  }
`

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.title}>Welcome to Lein Meeting!</div>
      </div>
      <div className={styles.list}>
        <StyledButton>查看会议</StyledButton>
        <StyledButton>发布会议</StyledButton>
      </div>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
