import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CarouselSlide = () => {

    return (

          <Carousel pause='hover' className='bg-dark'>
                  <Carousel.Item>
                      <Link to='/'>
                          <Carousel.Caption className='carousel-caption'>
                              <h1>hahaha</h1>
                          </Carousel.Caption>
                      </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Link to='/'>
                          <Carousel.Caption className='carousel-caption'>
                              <h1>lalalal</h1>
                          </Carousel.Caption>
                      </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Link to='/'>
                          <Carousel.Caption className='carousel-caption'>
                              <h1>dfafsadf</h1>
                          </Carousel.Caption>
                      </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Link to='/'>
                          <Carousel.Caption className='carousel-caption'>
                              <h1>rewrewr</h1>
                          </Carousel.Caption>
                      </Link>
                  </Carousel.Item>
          </Carousel>

      
    )
}

export default CarouselSlide
