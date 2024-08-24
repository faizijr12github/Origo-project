"use client";
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const PharmaPakaging = () => {
    return (
        <>
        {/* textile-hero */}
            <Container fluid className='pharma-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Pharma Pakaging</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='fw-bold text-center mb-5 pt-5'>Pharma Packaging</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/pharma-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services offers specialized solutions in pharmaceutical packaging, ensuring that your products meet the highest standards of safety and quality.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>We supply a range of essential packaging materials, including aluminum seals and caps, rubber stoppers, and glass vials, sourced from reputable manufacturers with the necessary certifications and social compliances.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>Our focus on precision, compliance, and innovation helps pharmaceutical companies maintain the integrity of their products while enhancing their market appeal.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Packaging Product Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>Origo specializes in high-quality pharmaceutical packaging solutions to ensure product safety and compliance. Our offerings include:</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Aluminium Seals & Caps:</span> Durable and secure sealing solutions.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Rubber Stoppers:</span> Reliable closures for various vial types.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Glass Vials:</span> Premium containers for pharmaceutical products.
                                </p>
                            </div>
                        </Col>
                        <Col lg="5" className="mt-5">
                            <img src='images/pharma-img2.png' alt='pharma' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default PharmaPakaging;
