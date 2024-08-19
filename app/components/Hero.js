import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <Container fluid className='hero-sec pt-5 mb-5'>
        <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4 text-white'>
            <Col lg="6" md="8">
            <h1 className='fw-bold'>Origo Business Services</h1>
            <h2>Innovative Business Solutions</h2>
            <p className='mt-3'>From Textiles and Coal Energy to Real Estate, Pharma Packaging, and Creative Media, We Deliver Expertise Across Diverse Sectors.</p>
            <Link href={'/services'} className='hero-btn1 btn mt-3'><i class="bi bi-rocket-takeoff-fill me-1"></i>Discover Our Services</Link>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Hero;
