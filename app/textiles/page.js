"use client";
import React from 'react'
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import Link from 'next/link';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Textiles = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
            {/* textile-hero */}
            <Container fluid className='textile-hero py-5'>
                <Row className='justify-content-center'>
                    <Col lg="7" md="10" data-aos="zoom-out">
                        <h1 className='fw-bold mb-3'>Textiles</h1>
                        <div className='textile-hero-content'>
                            <p className='mt-4'>From raw materials to finished fabrics, Origo Textiles delivers superior procurement services across all textile categories worldwide. We meticulously source only the finest materials, ensuring unmatched quality and reliability in every thread. Our extensive global network and expert team guarantee seamless supply chain solutions tailored to meet your specific needs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* textiles */}
            <Container>
                <h2 className='fw-bold text-center my-5 sevillana-regular' data-aos="fade-up">Textiles</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5 order-last order-lg-first' data-aos="fade-right">
                        <p><i className="bi bi-check-circle-fill me-3"></i>Origo Business Services is a trusted partner in the textile industry, offering a broad range of solutions tailored to meet the needs of global markets.</p>
                        <p className='mt-3'><i className="bi bi-check-circle-fill me-3"></i>We specialize in sourcing and supplying high-quality home textiles, apparels, leather goods, and towels. Our deep industry knowledge and extensive supplier network ensure that we deliver products that meet the highest standards of quality and compliance.</p>
                        <p className='mt-3'><i className="bi bi-check-circle-fill me-3"></i>Whether you&rsquo;re looking to enhance your product offerings or enter new markets, Origo provides the expertise and resources needed to succeed in the competitive world of textiles.</p>
                    </Col>
                    <Col lg="5" className='mb-5 order-first order-lg-last'>
                        <img loading="lazy" src='/images/textiles.png' alt='textile' className='img-fluid rounded' data-aos="zoom-in" data-aos-duration="3000"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='textile-sec2'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg="5" className='text-center' data-aos="fade-down">
                            <h3 className='text-orange fw-bold mb-3 sevillana-regular'>Textiles Product Range</h3>
                            <p>Our extensive experience in the textile industry allows us to deliver exceptional products that meet global standards.</p>
                        </Col>
                    </Row>
                    <Row data-aos="fade-up">
                        <Col className='mt-5' lg='4' md='6'>
                            <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                                <div className='img-container rounded-5'>
                                    <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/homeTextiles/shirts.webp" />
                                </div>
                                <Card.Body className='px-3 text-center text-white'>
                                    <Card.Title className="card-title fw-bold">Home Textiles</Card.Title>
                                    <Card.Text className='text-secondary'>
                                    Elegance and comfort woven into every thread of our home textiles
                                    </Card.Text>
                                    <Link href="/homeTextiles" className='btn expertise-card-btn rounded-5 px-3 fw-bold'>View products</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mt-5' lg='4' md='6'>
                            <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                                <div className='img-container rounded-5'>
                                    <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/homeTextiles/garments.jpg" />
                                </div>
                                <Card.Body className='px-3 text-center text-white'>
                                    <Card.Title className="card-title fw-bold">Garments</Card.Title>
                                    <Card.Text className='text-secondary'>
                                    Crafting garments that blend style, comfort, and quality in every stitch
                                    </Card.Text>
                                    <Link href="/garments" className='btn expertise-card-btn rounded-5 px-3 fw-bold'>View products</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mt-5' lg='4' md='6'>
                            <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                                <div className='img-container rounded-5'>
                                    <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/homeTextiles/towels.jpg" />
                                </div>
                                <Card.Body className='px-3 text-center text-white'>
                                    <Card.Title className="card-title fw-bold">Towels</Card.Title>
                                    <Card.Text className='text-secondary'>
                                    Softness and durability in every towel, designed to elevate your everyday
                                    </Card.Text>
                                    <Link href="/towels" className='btn expertise-card-btn rounded-5 px-3 fw-bold'>View products</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Container>

        </>
    )
}

export default Textiles
