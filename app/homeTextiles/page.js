"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import HomeTextilesHeroSlider from '../components/HomeTextilesHeroSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeTextiles = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
                <h2 className='text-center fst-italic fw-bold sevillana-regular mb-3'>Home Textiles</h2>
                <p className='text-center'>Elegance and comfort woven into every thread of our home textiles
                </p>
                <Row className='justify-content-center'>
                    <Col lg="9" className='mt-5'><HomeTextilesHeroSlider /></Col>
                </Row>
            </Container>
            {/* Fabrics */}
            {/* Home Fabrics */}
            <Container>
                <h2 className='text-center pt-5'><span className='bg-black text-white px-5 py-3 rounded-5 shadow sevillana-regular' data-aos="zoom-out">Fabrics</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange sevillana-regular'>White Fabrics</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/White-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">White Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/White-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">White Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/White-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">White Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Dyed Fabrics */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Dyed Fabrics</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Dyed-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dyed Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Dyed-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dyed Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Dyed-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Dyed Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Print fabrics */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Print Fabrics</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Print-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Print Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Print-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Print Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Print-fabrics-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Print Fabrics</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Made ups */}
            {/* Sheet Sets */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-out"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Made ups</span></h2>
                <h2 className='pt-5 text-center fst-italic text-orange'>Sheet Sets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Sheet-Sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Sheet Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Sheet-Sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Sheet Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Sheet-Sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Sheet Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Quilt Cover Sets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Quilt Cover Sets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/QuiltCoverSets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Quilt Cover Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/QuiltCoverSets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Quilt Cover Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/QuiltCoverSets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Quilt Cover Sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* comforter sets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Comforter Sets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Comforter sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Comforter sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Comforter sets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Bed & Bath */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Bed & Bath</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Bed & Bath</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Bed & Bath</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Bed & Bath</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* mattress covers */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Mattress Covers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/mattress-covers-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Mattress covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/mattress-covers-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Mattress covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/mattress-covers-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Mattress covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Duvet covers */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Duvet Covers</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/duvet-cover-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Duvet covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/duvet-cover-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Duvet covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/duvet-cover-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Duvet covers</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* valances */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Valances</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Valances</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Valances</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Valances</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Curtains */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Curtains</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Curtains</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Curtains</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Curtains</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Ironing boards */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Ironing Boards</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Ironing-boards-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Ironing boards</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Ironing-boards-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Ironing boards</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Ironing-boards-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Ironing boards</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/*  Individual Flat Sheets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Individual Flat Sheets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/individual-Flat-sheets.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Individual Flat Sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/individual-Flat-sheets.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Individual Flat Sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/individual-Flat-sheets.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Individual Flat Sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Fitted sheets */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Fitted Sheets</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/fitted-sheets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Fitted sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/fitted-sheets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Fitted sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/fitted-sheets-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Fitted sheets</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* pillow cases */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Pillow Cases</h2>
            </Container>
            <Container fluid>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/pillow-cases-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Pillow Cases</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/pillow-cases-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Pillow Cases</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/pillow-cases-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Pillow Cases</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Hotel sheeting */}
            <Container>
                <h2 className='pt-5 text-center fst-italic text-orange'>Hotel Sheeting</h2>
            </Container>
            <Container fluid className='mb-5'>
                <Row className='justify-content-evenly' data-aos="fade-up">
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Hotel-sheeting-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Hotel sheeting</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Hotel-sheeting-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Hotel sheeting</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='3' md='6'>
                        <Card className="expertise-card rounded-0" style={{ width: '100%' }}>
                            <div className='img-container rounded-0'>
                                <Card.Img className='expertise-card-img rounded-0' variant="top" src="/images/homeTextiles/Hotel-sheeting-slider.jpg" />
                            </div>
                            <Card.Body className='px-0 text-center'>
                                <Card.Title className="card-title fw-bold">Hotel sheeting</Card.Title>
                                <Card.Text>Dummy text for the product</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeTextiles
