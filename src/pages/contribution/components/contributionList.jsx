import React, { Component } from 'react'
import TitleCard from 'CP/TitleCard'
import ContributionTable from './contributionTable'

class ContributionList extends Component {
  render() {
    return (
      <div>
        <TitleCard
          title="我的投稿"
          subtitle="查看投稿情况，提交修改"
          hasAdd={false}
        >
          <ContributionTable />
        </TitleCard>
      </div>
    )
  }
}

export default ContributionList
