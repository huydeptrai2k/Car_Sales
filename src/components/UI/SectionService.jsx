import React from 'react'
import { Link } from 'react-router-dom'
import { Col  ,Row } from 'reactstrap'

import serviceImage1 from '../../assets/all-images/service1.jpg';
import serviceImage2 from '../../assets/all-images/service2.jpg';
import serviceImage3 from '../../assets/all-images/service3.jpg';

import '../../styles/section-service.css'

const SectionService = () => {
  return (
    <section className='section__service'>
        <div className='section__service-container'>
            <Row className='section__service-row'>
                <Col className='section__service-col' lg='4' md='4' sm='12' mb-20>
                    <div className="section__service-block">
                        <img src={serviceImage1} alt="" className="section__service-img" />
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
                        <div>
                            <h3>Giới thiệu</h3>
                            <p>"Auto2000 là trung tâm chăm sóc và độ xe chuyên nghiệp. Chúng tôi cung cấp dịch vụ chăm sóc xe toàn diện, 
                                từ rửa xe chuyên sâu cho đến làm đẹp nội ngoại thất. Bên cạnh đó, H3T Care còn cung cấp các dịch vụ độ xe,
                                 bao gồm độ la-zăng, hệ thống treo, hệ thống xả, wrap đổi màu, body kit và nhiều dịch vụ khác."</p>
                        </div>
                        <Link to='#'>
                        <span>Xem thêm</span>
                        </Link>
                    </div>
                </Col>
                <Col className='section__service-col'lg='4' md='4' sm='12' mb-20>
                    <div className="section__service-block">
                        <img src={serviceImage2} alt="" className="section__service-img" />
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
                        <div>
                            <h3>Chăm sóc chuyên nghiệp</h3>
                            <p>"- Rửa xe chuyên ngiệp 
                                - Rửa khoang máy - Phủ ceramic 
                                - Phủ film bảo vệ sơn PPF 
                                - Dọn nội thất 
                                - Dán film cách nhiệt</p>
                        </div>
                        <Link to='#'>
                        <span>Xem thêm</span>
                        </Link>
                    </div>
                </Col>
                <Col className='section__service-col' lg='4' md='4' sm='12' mb-20>
                    <div className="section__service-block">
                        <img src={serviceImage3} alt="" className="section__service-img" />
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
                        <div>
                            <h3>Độ xe cực chất</h3>
                            <p>- Độ body kit - Độ phanh hiệu năng cao - Vành xe thể thao - Hệ thống xả - Cửa hít - Wrap đổi màu - Trang bị nội thất xe -</p>
                        </div>
                        <Link to='#'>
                        <span>Xem thêm</span>
                        </Link>
                    </div>
                </Col>
              
            </Row>
        </div>
    </section>
  )
}

export default SectionService