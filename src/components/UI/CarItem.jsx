import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

import '../../styles/car-item.css'



export const CarItem = (props) => {
    const {imgUrl,carName,price} =props.item
  return (
    <Col className='car__item__col' lg='4' md='6' sm='12'>
        <Link to={'#'}>
            <div className="car__item">
                <img className='car__img'  src={imgUrl} alt="" />
            </div>
            <div className='car__item-content mt-4 '>
                <h4 className='car__item-name'>{carName}</h4>
                <h6 className='car__item-price'><span>{price}</span> VND</h6>
            </div>
        </Link>
    </Col>
  )
}
