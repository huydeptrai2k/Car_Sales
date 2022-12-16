import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import '../../styles/about-section.css'
import aboutImage from '../../assets/all-images/cars-img/bmw-offer.png'

export const AboutSection = () => {
  return (
    <section id='aboutSection'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">
                            Về chúng tôi
                        </h4>
                        <h2 className="section__title">
                            Welcome to Auto2000 Service
                        </h2>
                        <p className="section__description">
                        Auto2000 là đơn vị uy tín hàng đầu về kinh doanh xe Đức đã qua sử dụng. Chúng tôi chuyên mua và bán những mẫu xe mới nhất của Mercedes-Benz, BMW,
                         Audi và Porsche. Sự hài lòng của khách hàng chính là mục tiêu quan trọng nhất của chúng tôi. Để có được sự hài lòng của các bạn, H3T đã chuẩn bị mọi yếu tố, từ chất lượng xe, 
                        thủ tục pháp lý minh bạch cho đến quy trình chăm sóc khách hàng. Trên hết, chúng tôi luôn phục vụ bạn với sự chân thành và cởi mở.
                        </p>

                        <div className="about__section-item d-flex align-items-center ">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit 
                            </p>
                            <p className="section__description d-flex align-items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit 
                            </p>

                        </div>

                        <div className="about__section-item d-flex align-items-center ">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit 
                            </p>
                            <p className="section__description d-flex align-items-center gap-2">
                            <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit 
                            </p>

                        </div>

                    </div>

                </Col>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImage} alt="" srcSet=""  className='w-100'/>
                    </div>
                    </Col>
            </Row>
        </Container>
    </section>
  )
}
