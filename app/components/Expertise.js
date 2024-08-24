import Link from 'next/link'
import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const Expertise = () => {
    return (
        <>
            <Container className='expertise'>
                <Row className='justify-content-center text-center mt-5'>
                    <Col lg="7" md="9">
                        <h1 className='fw-bold'>Our Expertise</h1>
                        <p className='mt-3'>At Origo Business Services, we deliver tailored solutions across Marketing, Procurement, Project Execution, Strategic Partnerships, and Business Development. Our expertise drives growth and operational excellence across diverse industries.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mb-5'>
                    <Col className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container'>
                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/crousel-img1.jpg" />
                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Marketing Services</Card.Title>
                                <Card.Text>
                                    Innovative strategies to elevate your brand and expand market reach.
                                </Card.Text>
                                <Link href="/services#marketingServices" className='btn expertise-card-btn'><i class="bi bi-book me-1"></i> Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container'>
                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/crousel-img2.jpg" />
                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Procurement Services</Card.Title>
                                <Card.Text>
                                Seamless sourcing of high-quality materials from trusted suppliers.
                                </Card.Text>
                                <Link href="/services#procurementServices" className='btn expertise-card-btn'><i class="bi bi-book me-1"></i> Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container'>
                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/crousel-img3.jpg" />
                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Project Execution</Card.Title>
                                <Card.Text>
                                Precision-driven project management from concept to completion.
                                </Card.Text>
                                <Link href="/services#projectExecutions" className='btn expertise-card-btn'><i class="bi bi-book me-1"></i> Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container'>
                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/crousel-img4.jpg" />
                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Strategic Partnerships</Card.Title>
                                <Card.Text>
                                Building collaborations that drive mutual growth and innovation.
                                </Card.Text>
                                <Link href="/services#strategicPartnerships" className='btn expertise-card-btn'><i class="bi bi-book me-1"></i> Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' lg='4' md='6'>
                        <Card className="expertise-card" style={{ width: '100%' }}>
                            <div className='img-container'>
                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/crousel-img1.jpg" />
                            </div>
                            <Card.Body className='px-0'>
                                <Card.Title className="card-title fw-bold">Business Development</Card.Title>
                                <Card.Text>
                                Unlocking new opportunities and driving sustained growth
                                </Card.Text>
                                <Link href="/services#businessDevelopment" className='btn expertise-card-btn'><i class="bi bi-book me-1"></i> Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Expertise
