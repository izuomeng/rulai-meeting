import React from 'react'
import UserInfo from './components/UserInfo'
import Loading from '@/components/Loading'
import { getUserInfo } from './services/userInfo'
import TitleCard from 'CP/TitleCard'

class Info extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const {
      data: { data }
    } = await getUserInfo()
    this.setState({ data })
  }
  render() {
    const { data } = this.state
    return (
      <React.Fragment>
        {!data.id ? (
          <Loading />
        ) : (
          <TitleCard
            title={`用户邮箱：${data.email}`}
            subtitle="注意：这些信息不是必填项。如果需要投稿，则需要填写真实姓名、单位机构以及身份证号"
            hasAdd={false}
          >
            <UserInfo data={data} />
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

export default Info
