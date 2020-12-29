import React from 'react'
import PaginationFirst from './components/paginationFirst';
import Pagination_Loadmore from './components/pagination_loadmore'

export default function App() {
  return (
    <div>
      <PaginationFirst />
      <div style={{ backgroundColor: 'yellow', height: '50px', margin: '10px', borderRadius: '10px', textAlign: 'center' }}>
        <h1>Other Way of Pagination </h1>
      </div>
      <Pagination_Loadmore />
    </div>
  )
}
