import React from 'react'
import router from 'umi/router'
import ItemCollection from './ItemCollection'

const CollectionList = ({ items }) => {
  return (
    <React.Fragment>
      {items.map(({ conferenceInfo: item }) => (
        <ItemCollection
          handleClick={() => router.push(`/detail/${item.id}`)}
          key={item.id}
          meeting={item}
        />
      ))}
    </React.Fragment>
  )
}

export default CollectionList
