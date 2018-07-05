import React from 'react'
import { Pagination } from 'antd'
import Loading from 'CP/Loading'
import TitleCard from 'CP/TitleCard'
import { connect } from 'dva'
import { getReleasedMeetings } from './services/release'
import Tabel from './components/Tabel'

class Released extends React.Component {
  state = {
    data: {},
    loading: true,
    current: 1
  }
  async componentDidMount() {
    const orgId = this.props.userInfo.organization.id
    const {
      data: { data }
    } = await getReleasedMeetings({
      orgId
    })
    this.setState({ data, loading: false })
  }

  onPageChange = async page => {
    const {
      data: { data }
    } = await getReleasedMeetings({
      page,
      orgId: this.props.userInfo.organization.id
    })
    this.setState({ current: page, data }, () => window.scrollTo(0, 0))
  }
  render() {
    const { loading, data, current } = this.state
    return (
      <React.Fragment>
        {loading ? (
          <Loading />
        ) : (
          <TitleCard
            title="已发布会议"
            subtitle="查看和编辑已发布会议，新建会议"
          >
            <Tabel list={data.items} />
            <div style={{ textAlign: 'center' }}>
              <Pagination
                current={current}
                onChange={this.onPageChange}
                pageSize={data.pageSize}
                total={data.totalElement || data.totalPage * data.pageSize}
              />
            </div>
          </TitleCard>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  userInfo: state.user
})

export default connect(mapState)(Released)
