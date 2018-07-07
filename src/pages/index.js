import React from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import styles from './index.css'
import router from 'umi/router'
import { Button } from 'antd'

const ButtonContainer = styled.div`
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-top: 60px;
`

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome to Lein Meeting</h1>
        <span className={styles.subtitle}>
          A perfect meeting management system in which you could find whatever
          you want
        </span>
        <ButtonContainer onClick={() => router.push('/home')}>
          <Button type="primary" className={styles.button}>
            现在开始
          </Button>
        </ButtonContainer>
      </div>
    </div>
  )
}

IndexPage.propTypes = {}
export default connect()(IndexPage)
