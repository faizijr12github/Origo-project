"use client";
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Textiles = () => {
    return (
        <>
        {/* textile-hero */}
            <Container fluid className='textile-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Textiles</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='fw-bold text-center mb-5'>Textiles</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>Origo Business Services is a trusted partner in the textile industry, offering a broad range of solutions tailored to meet the needs of global markets.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>We specialize in sourcing and supplying high-quality home textiles, apparels, leather goods, and towels. Our deep industry knowledge and extensive supplier network ensure that we deliver products that meet the highest standards of quality and compliance.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>Whether you&rsquo;re looking to enhance your product offerings or enter new markets, Origo provides the expertise and resources needed to succeed in the competitive world of textiles.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/textiles.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='textile-sec2'>
                <Container>
                    <Row className='justify-content-around align-items-center'>
                        <Col lg="5" className='mb-5'>
                            <img src='/images/textile-img2.png' alt='textile' className='img-fluid rounded' />
                        </Col>
                        <Col lg="5" className='mb-5'>
                            <h3 className='text-orange fw-bold mb-3'>Textiles Product Range</h3>
                            <p>Our extensive experience in the textile industry allows us to deliver exceptional products that meet global standards. We provide:</p>
                            <Accordion className="dark-accordion mt-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Home Textiles</Accordion.Header>
                                    <Accordion.Body>
                                        High-quality fabrics and Made Ups for household use.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Garments</Accordion.Header>
                                    <Accordion.Body>
                                        Stylish and durable casual & Sports knitted clothing items.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Towels</Accordion.Header>
                                    <Accordion.Body>
                                        Soft and absorbent towels and bathrobes.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Textiles
