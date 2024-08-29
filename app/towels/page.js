"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import TowelSlider from '../components/TowelsSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Towel = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg="2"><h2 className='text-center fst-italic fw-bold sevillana-regular' data-aos="fade-right">Towels</h2></Col>
                    <Col lg="9" className='mt-5'><TowelSlider /></Col>
                </Row>
            </Container>
            {/* Towels */}
            {/* Terry Towels */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-in"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Towels</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange'>Terry Towels</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Linen */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Linens</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Terry & Waffle Bathrobes */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Terry & Waffle Bathrobes</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Hand Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Hand Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Sheet */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Sheet</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Washcloth */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Washcloth</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Mat */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Mat</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Beach Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Beach Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Guest Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Guest Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Kids Hooded Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Kids Hooded Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Spa Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Spa Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Gym Towel */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Gym Towel</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bathrobes */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bathrobes</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Mats */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Mats</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Shower Curtains */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Shower Curtains</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Shower Caps */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Shower Caps</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Gloves */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Gloves</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Wraps */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Wraps</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Slippers */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Slippers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Mitts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Mitts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bath Skirts */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bath Skirts</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dummy</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Wraps */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Wraps</h2>
            </Container>
            <Container fluid className='mb-5'>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/towels/towels.jpg" />
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

export default Towel
