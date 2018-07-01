import React from 'react'
import router from 'umi/router'
import Item from './Item'

const MeetingList = ({ items }) => {
  return (
    <React.Fragment>
      {items.map(({ conferenceInfo: item }) => (
        <Item
          handleClick={() => router.push(`/detail/${item.id}`)}
          key={item.id}
          meeting={item}
        />
      ))}
    </React.Fragment>
  )
}

export default MeetingList
