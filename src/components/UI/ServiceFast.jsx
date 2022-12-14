
import React from 'react'
import { Link } from 'react-router-dom'


import '../../styles/service-fast.css'

const ServiceFast = () => {
  return <div className="service__fast-container mt-4  d-flex align-items-center justify-content-around flex-wrap">
            <div className=" gap-1  service__fast-block  ">
            <span className='service__fast-icon align-items-center '><i className="ri-steering-line"></i></span>
                <button className='service__fast-btn  '>
                    <Link><h2>Đăng ký lái thử</h2></Link>
                </button>
            </div>
            <div className='gap-1 service__fast-block'>
            <span className='service__fast-icon'><i className="ri-service-line"></i></span>
                <button className='service__fast-btn  '>
                    <Link><h2>Yêu cầu dịch vụ</h2></Link>
                </button>

            </div>
            <div className='gap-1 service__fast-block'>
                
            <span className='service__fast-icon'><i className="ri-map-pin-line"></i></span>
                <button className='service__fast-btn '>
                    <Link><h2>Tìm Showroom</h2></Link>
                </button>
     
            </div>
      
 
  </div>
}

export default ServiceFast