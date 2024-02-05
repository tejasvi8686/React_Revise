import React from 'react'
import Header from '../../components/header/Header'
import Content from '../../components/content/Content'
import Pagination from '../../components/pagination/Pagination'


const Blogs = () => {
  return (
    <div class="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Content />
      <Pagination />

    </div>
  )
}

export default Blogs
