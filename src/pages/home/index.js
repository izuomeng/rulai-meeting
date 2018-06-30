import React from 'react'
import Item from './components/Item'
import styled from 'styled-components'

const fakeData = [
  {
    conferenceInfo: {
      id: 1,
      title: '联合国气候大会',
      introduction: '这是一个假会议',
      organization: {
        id: 1,
        name: '北航'
      },
      ddlDate: 1530399098140,
      confBeginDate: 1530359078140,
      state: ''
    }
  },
  {
    conferenceInfo: {
      id: 2,
      title: '联合国大会',
      introduction: '这是一个真会议',
      organization: {
        id: 1,
        name: '联合国'
      },
      ddlDate: 1530399098140,
      confBeginDate: 1530359078140,
      state: ''
    }
  }
]

const Container = styled.div`
  display: block;
`

class Home extends React.Component {
  render() {
    const list = fakeData
    return (
      <Container>
        {list.map(item => (
          <Item key={item.conferenceInfo.id} meeting={item.conferenceInfo} />
        ))}
      </Container>
    )
  }
}

export default Home
