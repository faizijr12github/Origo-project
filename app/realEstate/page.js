"use client";
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const RealEstate = () => {
    return (
        <>
        {/* RealEstate-hero */}
            <Container fluid className='real-estate-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Real Estate</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='real-estate mt-5'>
                <h2 className='fw-bold text-center py-5'>Real Estate</h2>
                <Row className='justify-content-around align-items-center'>

                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services provides expert solutions in the real estate sector, catering to both residential and commercial projects.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>We specialize in developing, marketing, and managing high-value properties that meet the diverse needs of our clients. From luxury residential developments to strategic commercial investments, our comprehensive services ensure that each project is executed with precision and tailored to maximize returns.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>Origo&rsquo;s deep market insights and commitment to excellence make us a trusted partner in the dynamic real estate landscape.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/real-estate-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <img src='images/real-estate-img2.png' alt='pharma' className='img-fluid' />
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Real Estate Projects Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>We offer comprehensive real estate services, catering to both residential and commercial projects. Our expertise includes:</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Residential Projects:</span> Developing and marketing high-value residential properties.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Commercial Projects:</span> Providing strategic solutions for commercial real estate investments.</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default RealEstate;
