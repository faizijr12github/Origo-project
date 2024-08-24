"use client";
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const CreativeMedia = () => {
    return (
        <>
            {/* Creative-Media-hero */}
            <Container fluid className='creative-media-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Creative Media</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='real-estate mt-5'>
                <h2 className='fw-bold text-center py-5'>Creative Media</h2>
                <Row className='justify-content-around align-items-center'>

                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services excels in the creative media industry, offering innovative solutions that bring ideas to life.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>Our expertise spans across various media formats, including short films, game shows, and movies for change, allowing us to craft compelling content that resonates with audiences. We collaborate with talented creators and utilize cutting-edge technology to produce media that not only entertains but also inspires and drives social impact.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>With Origo, your creative vision is transformed into powerful stories that connect with people and leave a lasting impression.
                        </p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/creative-media-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5 media">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <img src='/images/creative-media-img2.png' alt='pharma' className='img-fluid rounded' />
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Media Product Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>Origo is committed to creating impactful and engaging media content and carrying out noticeable media projects for socio-economic change.
                                </p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Movies for Change</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Short Films projects</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Game Shows</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Magazine Programs</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Music -</span>  Lyrics & Compositions </p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Branding -</span>  Development, Promotion, Management, Extensions, Recovery</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default CreativeMedia;
