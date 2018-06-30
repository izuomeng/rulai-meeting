import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import Link from 'umi/link'
import styles from './index.css'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <Button type="primary">
            <Link to="/home">Getting Started</Link>
          </Button>
        </li>
      </ul>
    </div>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
