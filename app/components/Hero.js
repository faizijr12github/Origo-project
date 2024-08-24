import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <>
      {/* <Container fluid className='hero-sec pt-5 mb-5'>
        <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4 text-white'>
            <Col lg="6" md="8">
            <h1 className='fw-bold'>Origo Business Services</h1>
            <h2>Innovative Business Solutions</h2>
            <p className='mt-3'>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
            <Link href={'/services'} className='hero-btn1 btn mt-3'><i class="bi bi-rocket-takeoff-fill me-1"></i>Discover Our Services</Link>
            </Col>
        </Row>
      </Container> */}
      <Container fluid className='hero-slider px-0'>
        <Carousel>
        <Carousel.Item>
            <img src='/images/hero-bg.webp' alt='hero' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Origo Business Services</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/downloads'} className='hero-btn1 btn'>Downloads <i class="bi bi-download ms-2"></i></Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/coal-slider.webp' alt='coal' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Coal Energy</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/coalEnergy'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/textile-slider.webp' alt='textile' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Textiles</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/textiles'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/pharma-slider.webp' alt='pharma' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Pharma Packaging</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/pharmaPakaging'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/real-estate-slider.webp' alt='real-estate-slider' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Real Estate</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/realEstate'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/creative-media-slider.webp' alt='Creative Media' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9">
                  <h1 className='fw-bold mb-3'>Creative Media</h1>
                  <p>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
                  <Link href={'/creativeMedia'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    </>
  )
}

export default Hero;
