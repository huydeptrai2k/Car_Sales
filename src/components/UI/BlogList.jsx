

import React, { Fragment } from 'react'


import '../../styles/blog-item.css'
import blogData from '../../assets/data/blogData'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
  <Fragment>
      {
          blogData.map((item)=>(
              <BlogItem item={item} key={item.id}></BlogItem>
          ))
      }
    
  </Fragment>
  );


}

export default BlogList
