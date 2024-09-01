"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import GarmentsSlider from '../components/GarmentsSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Garments = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
            <h2 className='text-center fst-italic fw-bold sevillana-regular mb-3'>Garments</h2>
            <p className='text-center'>Crafting garments that blend style, comfort, and quality in every stitch</p>
                <Row className='justify-content-center'>
                    <Col lg="9" className='mt-5'><GarmentsSlider /></Col>
                </Row>
            </Container>
            {/* Women */}
            {/* Long dress */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-out"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Women&apos;s</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange'>Long Dresses</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* t-shirt */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>T-Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly'>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Hoodies */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Hoodies</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly'>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Sweater */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Sweaters</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Skirt */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Skirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Trousers */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Trousers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Dress pants */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Dress Pants</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Tank Top */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Tank Tops</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Shorts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Shorts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Fashion Shirts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Fashion Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Jackets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Jackets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Swimsuits */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Swimsuits</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Briefs */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Briefs</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Pajamas */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Pajamas</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Children’s */}
            {/* T-Shirt */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-in"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Children&apos;s</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange'>T-Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Polo Shirt */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Polo Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Pajamas */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Pajamas</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Romper */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Rompers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bib */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bibs</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Skirts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Skirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Shorts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Shorts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Men’s */}
            {/* Basic T-Shirt */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-in"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Men&apos;s</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange'>Basic T-Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Polo Shirt */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Polo Shirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Night wears */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Nightwears</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Trousers */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Trousers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Inner wears */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Innerwears</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Briefs */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Briefs</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Pajamas set */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Pajama Sets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Pullover */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Pullovers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Cardigans */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Cardigans</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Hooded jackets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Hooded Jackets</h2>
            </Container>
            <Container fluid className='mb-5'>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/garments/garments.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Garments
