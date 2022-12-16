import React from 'react'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../styles/footer.css'
const quickLinks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]
const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
              <h1>
                <Link to='/home' className='d-flex align-items-center gap-2'>
                <i className="ri-car-line"></i>
                <span>Auto 2000 <br /> Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Showroom chúng tôi chuyên mua bán các loại xe ô tô cao cấp Đức, Mỹ, Nhật với chất lượng được đảm bảo ở mức cao nhất, không đâm đụng, không bị ngập nước, giấy tờ đầy đủ và tuân theo các quy định của pháp luật. Đến với Showroom Auto2000, quý khách hàng có thể hoàn toàn an tâm và thoải mái chọn lựa cho mình chiếc xe yêu thích
              </p>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className="footer__link-title">
                Quick Links
              </h5>
              <ListGroup>
                {quickLinks.map((item,index)=>(
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
            <h5 className="footer__link-title mb-4">
                Head Office
              </h5>
              <p className="office__info">199 Ho Tung Mau, Ha Noi</p>
              <p className="office__info">Phone: 0384559058</p>
              <p className="office__info">Email: huyndz0711@gmail.com</p>
              <p className="office__info">Office Time : 10am - 7pm</p>
              
            </div>
          </Col>
          <Col lg='3' md='4'>
            <div className="mb-4">
            <h5 className="footer__link-title">
                Newsletter
              </h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span><i className="ri-send-plane-line"></i></span>
              </div>
            </div>
          </Col>
          <Col lg='12'>
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i className="ri-copyright-line"></i> Copyright {year} by Huy Nguyen
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer