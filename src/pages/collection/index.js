import React from 'react'
import { RestClient } from '@/utils/HOC'
import { getAllCollections } from './services/collection'
import CollectionList from './components/CollectionList'

class Collection extends React.Component {
  render() {
    const {
      data: { items },
      loading
    } = this.props
    return <div>{loading ? <loading /> : <CollectionList items={items} />}</div>
  }
}

export default RestClient(getAllCollections, 1)(Collection)
