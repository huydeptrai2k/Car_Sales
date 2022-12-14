import React, { Fragment } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return <Fragment>
    <Header></Header>
    <div>
        <Routers></Routers>
    </div>
    <Footer></Footer>
  </Fragment>
}

export default Layout