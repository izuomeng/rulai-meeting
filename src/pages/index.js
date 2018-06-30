import React from 'react'
import { connect } from 'dva'
import styles from './index.css'
import { Button } from 'antd'
import styled from 'styled-components'
import { InjectClass } from '@/utils/HOC'

const StyledButton = styled(InjectClass(Button))`
  font-size: 2em;
  font-weight: 200;
  height: 120px;
  width: 300px;
  margin-right: 120px;
  background-color: rgb(4, 250, 168);
  color: #001529;
  :hover {
    background: transparent;
    color: #ffffff;
    border: 5px solid #ffffff;
  }
`

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.tmp} />
      <h1 className={styles.title}>Welcome to ru-lai meeting!</h1>
      <ul className={styles.list}>
        <li>
          <StyledButton>查看全部会议</StyledButton>
          <StyledButton>发布会议</StyledButton>
        </li>
      </ul>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
