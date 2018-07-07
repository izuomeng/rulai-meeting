import React, { Component } from 'react'
import TitleCard from 'CP/TitleCard'
import AccountList from './accountList'
import { Modal } from 'antd'
import AccountMessage from './message'

class AccountTable extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  render() {
    return (
      <React.Fragment>
        <TitleCard
          title="管理子账号"
          subtitle="添加、查看、删除子账号"
          hasAdd={true}
          handleAdd={() => this.showModal()}
        >
          <AccountList />
          <Modal
            title="添加子账号"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose
          >
            <AccountMessage onCancel={this.handleCancel} />
          </Modal>
        </TitleCard>
      </React.Fragment>
    )
  }
}

export default AccountTable
