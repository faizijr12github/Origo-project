import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhyOrigo = () => {
  return (
    <>
      <Container fluid className='why-origo-bg py-5'>
      <h1 className='text-center text-orange fw-bold mt-5'>Why Choose Origo <i class="bi bi-patch-question-fill"></i></h1>
      <Container>
        <Row className='justify-content-around align-items-center'>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Comprehensive Solutions</h2>
          <p className='text-white'>
          We offer end-to-end services tailored to your specific needs, ensuring a seamless experience from start to finish.
          </p>
          </Col>
          <Col className='mt-5' lg="5">
          <img src='/images/Comprehensive-Solutions.png' className='img-fluid float-animation rounded-circle'/>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
        <Col className='mt-5' lg="5">
          <img src='/images/global-reach.png' className='img-fluid float-animation'/>
          </Col>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Global Reach</h2>
          <p className='text-white'>
          Our extensive network and strategic partnerships enable us to facilitate international business opportunities and market expansion.
          </p>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Quality Assurance</h2>
          <p className='text-white'>
          We are committed to delivering the highest standards in every project, ensuring excellence and reliability.
          </p>
          </Col>
          <Col className='mt-5' lg="5">
          <img src='/images/Quality-Assurance.gif' className='img-fluid'/>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
        <Col className='mt-5' lg="5">
          <img src='/images/Innovation-Creativity.gif' className='img-fluid'/>
          </Col>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Innovation and Creativity</h2>
          <p className='text-white'>
          We prioritize pioneering new ideas and innovative solutions to keep your business ahead of the curve.
          </p>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Strategic Partnerships</h2>
          <p className='text-white'>
          We build and nurture mutually beneficial relationships to drive sustainable growth and success.
          </p>
          </Col>
          <Col className='mt-5' lg="5">
          <img src='/images/Strategic-Partnerships.png' className='img-fluid rounded-circle float-animation'/>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
        <Col className='mt-5' lg="5">
          <img src='/images/Industry-Expertise.gif' className='img-fluid'/>
          </Col>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Industry Expertise</h2>
          <p className='text-white'>
          Our team of professionals has in-depth knowledge and experience across multiple industries, providing you with expert insights and guidance.
          </p>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Customer-Centric Approach</h2>
          <p className='text-white'>
          We focus on understanding your unique needs and delivering personalized services that add real value to your business.
          </p>
          </Col>
          <Col className='mt-5' lg="5">
          <img src='/images/Customer-Centric-Approach.gif' className='img-fluid rounded-circle'/>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
        <Col className='mt-5' lg="5">
          <img src='/images/Sustainable-Practices.png' className='img-fluid float-animation'/>
          </Col>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Sustainable Practices</h2>
          <p className='text-white'>
          We uphold social and environmental responsibility, working with suppliers who have valid certifications and social compliances required for global trade.
          </p>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Connecting Buyers with Unfamiliar Suppliers</h2>
          <p className='text-white'>
          We bridge the gap between buyers and new suppliers, facilitating trustworthy and beneficial partnerships.
          </p>
          </Col>
          <Col className='mt-5' lg="5">
          <img src='/images/Connecting-Buyers.gif' className='img-fluid rounded-circle'/>
          </Col>
        </Row>
        <Row className='justify-content-around align-items-center'>
        <Col className='mt-5' lg="5">
          <img src='/images/Price-Negotiations.png' className='img-fluid float-animation'/>
          </Col>
          <Col className='mt-5' lg="5">
          <h2 className='fw- bold text-orange'>Excellent Price Negotiations</h2>
          <p className='text-white'>
          Our expertise in negotiation ensures you get the best prices without compromising on quality or service.
          </p>
          </Col>
        </Row>
      </Container>
      </Container>
    </>
  )
}

export default WhyOrigo
