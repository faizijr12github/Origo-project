"use client"
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Link from 'next/link'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CoalEnergy = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
            {/* Coal-Energy-hero */}
            <Container fluid className='coal-energy-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center'>
                    <Col lg="6" md="8" data-aos="zoom-out">
                        <h1 className='fw-bold'>Coal Energy</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>At Origo Coal, we specialize in sourcing and delivering high-quality coal from the world&apos;s leading coal markets, including Indonesia, South Africa, and Afghanistan. With a commitment to excellence, we ensure that our clients receive the finest coal tailored to their specific energy needs. Whether you&apos;re fueling power plants, industrial facilities, or global trade, trust Origo Coal to provide reliable, sustainable, and competitively priced coal solutions that power your success.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='fw-bold text-center py-5 sevillana-regular' data-aos="fade-up">Coal Energy</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5' data-aos="fade-right" data-aos-duration="3000">
                        <p><i className="bi bi-check-circle-fill me-3"></i>Origo Business Services is a key player in the coal energy sector, providing reliable sourcing and procurement services for various grades of coal, including GCV/GAR from 3400 up to 7500. We cater to the energy needs of major markets in Pakistan, China, and beyond, ensuring a steady supply of high-quality coal from trusted sources in regions like South Africa, Indonesia, and Afghanistan.</p>
                        <p className='mt-3'><i className="bi bi-check-circle-fill me-3"></i>Our commitment to quality, timely delivery, and competitive pricing makes Origo a preferred partner for businesses seeking dependable coal energy solutions.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img
                            src='/images/coal.webp'
                            alt='Coal'
                            layout="responsive"
                            loading="lazy"
                            className='img-fluid rounded'
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                        />

                    </Col>
                </Row>
            </Container>
            <Container fluid className="coal-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5 text-center" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 2600 - 3400</button>
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 3400 - 4200</button>
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 4200 - 5000</button>
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 5000 - 5800</button>
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 5800 - 6500</button>
                            <button className="bg-black text-white fw-bold m-3"><span className="me-5"><i className="bi bi-graph-up me-2"></i>GAR</span> 6500 - 7500</button>
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h3 className="text-orange fw-bold text-center pt-3 pb-5 sevillana-regular" data-aos="fade-left">Coal Grades</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="py-5 coal-last-sec">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <h3 className="text-orange fw-bold text-center my-3" data-aos="fade-down">Coal Markets</h3>
                            <div className='coal-sec-3' data-aos="fade-right">
                                <p>Origo excels in sourcing and supplying coal from key regions to ensure a steady and reliable energy supply. Our coal sourcing services cover:</p>
                                <p><span className='fw-bold'><i className="bi bi-flag-fill me-1"></i>Pakistan:</span> Local sourcing for efficient energy solutions.</p>
                                <p><span className='fw-bold'><i className="bi bi-flag-fill me-1"></i>South Africa:</span> High-quality coal with reliable delivery.</p>
                                <p><span className='fw-bold'><i className="bi bi-flag-fill me-1"></i>Afghanistan:</span> Strategic sourcing from a key region.
                                </p>
                                <p><span className='fw-bold'><i className="bi bi-flag-fill me-1"></i>Indonesia:</span> Competitive pricing and quality assurance.</p>
                            </div>
                        </Col>
                        <Col lg="5" className="mt-5 text-center">
                            <img
                                src='/images/coal-img-2.webp'
                                alt='Coal'
                                layout="responsive"
                                loading="lazy"
                                className='img-fluid float-animation'
                            />

                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className='textile-sec2'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg="5" className='text-center'>
                            <h3 className='text-orange fw-bold mb-3'>All-Inclusive Coal Sourcing</h3>
                            <h4 className='text-white fst-italic mb-3'>We&apos;ve Got You Covered</h4>
                        </Col>
                    </Row>
                </Container>
                {/* coal cards */}
                <Row>
                    <Col className='mt-5' data-aos="fade-up" lg='3' md='6'>
                        <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <img
                                    src="/images/pak-flag.webp"
                                    alt="Pak Flag"
                                    layout="responsive"
                                    loading="lazy"
                                    className='expertise-card-img img-fluid rounded-5'
                                />

                            </div>
                            <Card.Body className='px-3 text-center text-white'>
                                <Card.Title className="card-title fw-bold">Pakistan</Card.Title>
                                <Card.Text className='text-secondary'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card&apos;s content.
                                </Card.Text>
                                <Link href="/pakCoal" className='btn expertise-card-btn rounded-5 px-3 fw-bold'><i className="bi bi-buildings me-2"></i>View Market</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' data-aos="fade-down" lg='3' md='6'>
                        <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <img
                                    src="/images/sa-flag.webp"
                                    alt="SA Flag"
                                    layout="responsive"
                                    loading="lazy"
                                    className='expertise-card-img img-fluid rounded-5'
                                />

                            </div>
                            <Card.Body className='px-3 text-center text-white'>
                                <Card.Title className="card-title fw-bold">South Africa</Card.Title>
                                <Card.Text className='text-secondary'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card&apos;s content.
                                </Card.Text>
                                <Link href="/saCoal" className='btn expertise-card-btn rounded-5 px-3 fw-bold'><i className="bi bi-buildings me-2"></i>View Market</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' data-aos="fade-up" lg='3' md='6'>
                        <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <img
                                    src="/images/indonesia-flag.webp"
                                    alt="Indonesia Flag"
                                    layout="responsive"
                                    loading="lazy"
                                    className='expertise-card-img img-fluid rounded-5'
                                />

                            </div>
                            <Card.Body className='px-3 text-center text-white'>
                                <Card.Title className="card-title fw-bold">Indonesia</Card.Title>
                                <Card.Text className='text-secondary'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card&apos;s content.
                                </Card.Text>
                                <Link href="/indonesiaCoal" className='btn expertise-card-btn rounded-5 px-3 fw-bold'><i className="bi bi-buildings me-2"></i>View Market</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5' data-aos="fade-down" lg='3' md='6'>
                        <Card className="expertise-card bg-transparent" style={{ width: '100%' }}>
                            <div className='img-container rounded-5'>
                                <img
                                    src="/images/afg-flag.webp"
                                    alt="Afghanistan Flag"
                                    layout="responsive"
                                    loading="lazy"
                                    className='expertise-card-img img-fluid rounded-5'
                                />

                            </div>
                            <Card.Body className='px-3 text-center text-white'>
                                <Card.Title className="card-title fw-bold">Afghanistan</Card.Title>
                                <Card.Text className='text-secondary'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card&apos;s content.
                                </Card.Text>
                                <Link href="/afgCoal" className='btn expertise-card-btn rounded-5 px-3 fw-bold'><i className="bi bi-buildings me-2"></i>View Market</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CoalEnergy
