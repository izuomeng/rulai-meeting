import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'
import styles from './index.css'

const StyledButton = styled(InjectClass(Button))`
  font-size: 1.5em;
  font-weight: 500;
  height: 80px;
  width: 200px;
  border-radius: 14px;
  margin-right: 120px;
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
      <div className={styles.tmp} />
      <h1 className={styles.title}>Welcome to ru-lai meeting!</h1>
      <ul className={styles.list}>
        <li>
          <StyledButton>查看会议</StyledButton>
          <StyledButton>发布会议</StyledButton>
        </li>
      </ul>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
