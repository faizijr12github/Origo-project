import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Expertise = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container className='expertise'>
                <Row data-aos="fade-down" className='justify-content-center text-center mt-5'>
                    <Col lg="7" md="9">
                        <h1 className='fw-bold sevillana-regular'>Our Services</h1>
                        <p className='mt-3'>At Origo Business Services, we deliver tailored solutions across Marketing, Procurement, Project Execution, Strategic Partnerships, and Business Development. Our expertise drives growth and operational excellence across diverse industries.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mb-5 justify-content-evenly'>
                    <Col data-aos="fade-up" className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/crousel-img1.webp" />
                            </div>
                            <Card.Body className='px-2 text-center'>
                                <Card.Title className="card-title fw-bold">Marketing Services</Card.Title>
                                <Card.Text>
                                    Innovative strategies to elevate your brand and expand market reach.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos="fade-down" className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/crousel-img2.webp" />
                            </div>
                            <Card.Body className='px-2 text-center'>
                                <Card.Title className="card-title fw-bold">Procurement Services</Card.Title>
                                <Card.Text>
                                    Seamless sourcing of high-quality materials from trusted suppliers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos="fade-up" className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/crousel-img3.webp" />
                            </div>
                            <Card.Body className='px-2 text-center'>
                                <Card.Title className="card-title fw-bold">Project Execution</Card.Title>
                                <Card.Text>
                                    Precision-driven project management from concept to completion.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos="fade-right" className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/crousel-img4.webp" />
                            </div>
                            <Card.Body className='px-2 text-center'>
                                <Card.Title className="card-title fw-bold">Strategic Partnerships</Card.Title>
                                <Card.Text>
                                    Building collaborations that drive mutual growth and innovation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos="fade-left" className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <Card.Img loading="lazy" className='expertise-card-img rounded-5' variant="top" src="/images/Goal.webp" />
                            </div>
                            <Card.Body className='px-2 text-center'>
                                <Card.Title className="card-title fw-bold">Business Development</Card.Title>
                                <Card.Text>
                                    Unlocking new opportunities and driving sustained growth
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Expertise
