import React from 'react'
import { Col,Container,Row } from 'reactstrap'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import ServiceFast from '../components/UI/ServiceFast'
import { AboutSection } from '../components/UI/AboutSection'
import { Link } from 'react-router-dom'

import '../styles/home.css'
import SectionService from '../components/UI/SectionService'
import CarData from '../assets/data/carData'
import { CarItem } from '../components/UI/CarItem'
import { Testimonial } from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'

const Home = () => {
  return <Helmet title ='Home'>
    <section className="p-0 hero__slider-section">
      <HeroSlider></HeroSlider>

      <div className="service__fast ">
        <Container>
          <Row className='service__fast-row '>
            <Col lg='4' md='4'>
              <div className="service__fast-left ">
                <h2 >Service fast</h2>
              </div>
            </Col>
            <Col lg='8' md='8' sm='12'>
              <ServiceFast></ServiceFast>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <AboutSection></AboutSection>
    <SectionService></SectionService>
    <section className='section__car__item' >
      <Row  >
        <Col lg='12 ' className='mb-5 text-center'>
          <h6 className="section__subtitle">Come with</h6>
          <h2 className="section__title">Sản phẩm nổi bật</h2>
        </Col>
      </Row>
      <Row className='section__car__item-row ml-8'>
        {CarData.slice(0,6).map((item=>(
          <CarItem item={item} key={item.id}></CarItem>
        )))}
          <Col lg='12 ' className='mt-2 mb-2 text-center'>
          <button className='car__item-btn'><Link to={'#'}>Xem thêm</Link></button>
        </Col>
      </Row>
  
    

    </section>
 
    <section>
    <div lg='12' className='mb-4 text-center section__blog-title'>
            <h6 className="section__subtitle">Ý kiến của khách hàng</h6>
            <h2 className="section__title">Testimonials</h2>
          </div>
      <Container>
    
        <Row>
         
          <Testimonial></Testimonial>
        </Row>
      </Container>
    </section>

    <section className='section__blog'>
      <Container className='section__blog-container '>
        <Row className=' d-flex align-items-center'>
          <Col lg='12' className='mb-4 text-center'>
            <h6 className="section__subtitle">Explore our blogs</h6>
            <h2 className="section__title">Tin tức - Sự kiện</h2>
          </Col>
          <BlogList></BlogList>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home