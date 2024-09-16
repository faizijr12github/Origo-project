"use client";
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Downloads = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            {/* textile-hero */}
            <Container fluid className='download-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center'>
                    <Col lg="6" md="8" data-aos="zoom-out" data-aos-duration="3000">
                        <h1 className='fw-bold'>Downloads</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement, and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='text-center' data-aos="fade-up">
                <h1 className='fst-italic fw-bold mt-5'>Connecting Markets</h1>
                <h2 className='mt-5 text-orange fw-bold'>Download <i className="bi bi-download fs-2"></i></h2>
                <p>Access Your Preferred Media Here!</p>
            </Container>
            <Container className='mb-5'>
                <Row>
                    <Col className='mt-5' lg='4' md='6' data-aos="fade-up">
                        <Card className="expertise-card text-center mx-auto" style={{ width: '16rem' }}>
                            <div className='img-container'>
                                <img
                                    className="expertise-card-img rounded-5"
                                    src="/images/origo_business_services_logo.webp"
                                    alt="Origo Business Services Logo"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />

                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Origo Profile</Card.Title>
                                <a href="/Origo_Profile.pdf" className='btn expertise-card-btn mt-3' download>
                                    Download<i className="bi bi-file-pdf-fill ms-2"></i>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6' data-aos="fade-down">
                        <Card className="expertise-card text-center mx-auto" style={{ width: '16rem' }}>
                            <div className='img-container'>
                                <img
                                    className="expertise-card-img rounded-5"
                                    src="/images/origo_business_services_logo.webp"
                                    alt="Origo Business Services Logo"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />

                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Coming Soon!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6' data-aos="fade-up">
                        <Card className="expertise-card text-center mx-auto" style={{ width: '16rem' }}>
                            <div className='img-container'>
                                <img
                                    className="expertise-card-img rounded-5"
                                    src="/images/origo_business_services_logo.webp"
                                    alt="Origo Business Services Logo"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />

                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Coming Soon!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Downloads;
