import React from 'react'
import { Col,Container,Row } from 'reactstrap'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import ServiceFast from '../components/UI/ServiceFast'
import { AboutSection } from '../components/UI/AboutSection'

import '../styles/service-fast.css'
import SectionService from '../components/UI/SectionService'

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
  </Helmet>
}

export default Home