import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/cars' element={<CarListing></CarListing>}></Route>
    <Route path='/cars/:slug' element={<CarDetails></CarDetails>}></Route>
    <Route path='/blogs' element={<Blog></Blog>}></Route>
    <Route path='/blogs/:slug' element={<BlogDetails></BlogDetails>}></Route>
    <Route path='/*' element={<NotFound></NotFound>}></Route>
  </Routes>
}

export default Routers