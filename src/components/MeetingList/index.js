import React from 'react'
import router from 'umi/router'
import Item from './Item'

const MeetingList = ({ items, extra }) => {
  return (
    <React.Fragment>
      {items.map(item => (
        <Item
          handleClick={() => router.push(`/detail/${item.id}`)}
          key={item.id}
          meeting={item}
          extra={extra}
        />
      ))}
    </React.Fragment>
  )
}

export default MeetingList
