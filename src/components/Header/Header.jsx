import React, { useRef } from 'react'
import { Container,Row,Col } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'

import '../../styles/header.css'

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/cars',
    display:'Cars'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/services',
    display:'Services'
  },
];

const Header = () => {

  const menuRef = useRef(null);
  const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')

  return <header className="header">
    <div className="header__top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__left">
              <span>Need Help?</span>
              <span className="header__top__help">
                <i className="ri-phone-fill"></i>03845859058
              </span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Link to="#" className='d-flex align-item-center gap-1'> <i className="ri-login-circle-line"></i>Login</Link>

              <Link to="#" className='d-flex align-item-center gap-1'><i className="ri-user-line"></i>Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="header__middle">
     <Container>
      <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
              <h1>
                <Link to='/home' className='d-flex align-items-center gap-2'>
                <i className="ri-car-line"></i>
                <span>Auto 2000 <br /> Service</span>
                </Link>
              </h1>
            </div>
          </Col >
          <Col mg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
              <span><i className="ri-earth-line"></i></span>
              <div className="header__location-content">
                <h4>Viet Nam</h4>
                <h6>Ha Noi City, Viet Nam</h6>
              </div>
            </div>
          </Col>
          <Col mg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
              <span><i className="ri-time-line"></i></span>
              <div className="header__location-content">
                <h4>Every day</h4>
                <h6>10am - 7pm</h6>
              </div>
            </div>
          </Col>
          <Col lg='2' md='3' sm='0' className='d-flex  align-items-center justify-content-end '>
            <button className="header__btn btn ">
              <Link to='./contact'>
              <i className="ri-phone-line"></i> Request a call
              </Link>
            </button>
          </Col>
        </Row>
     </Container>
    </div>

    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between ">
          <span className="mobile__menu">
          <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
                {
                  navLinks.map((item,index)=>(
                    <NavLink to={item.path} key={index} className={navClass =>navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>{item.display}</NavLink>
                  ))
                }
            </div>
          </div>

          <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder='Search'/>
              <span><i className="ri-search-line"></i></span>
            </div>
          </div>

        </div>
      </Container>
    </div>

  </header>
}

export default Header