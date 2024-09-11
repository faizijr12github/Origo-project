"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
            <Container fluid className='services pb-5'>
                <Container>
                    <Row className='justify-content-between align-items-center pb-3'>
                        <Col className='mt-5' lg="5" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h2 className='mb-3 text-orange fw-bold'><i className="bi bi-bar-chart-fill me-2"></i>Range of <br /> Business Services </h2>
                            <p>Origo Business Services offers a comprehensive suite of solutions across key business disciplines. In <span className='text-light'>Marketing</span>, we craft targeted strategies to elevate your brand and expand market reach. Our <span className='text-light'>Procurement</span> services ensure seamless sourcing of high-quality materials and products from trusted suppliers worldwide.</p>
                            <p>Through <span className='text-light'>Project Execution</span>, we bring concepts to life with precision and efficiency, managing every detail from start to finish. We excel in forging <span className='text-light'>Strategic Partnerships</span>, connecting businesses for mutually beneficial collaborations.</p>
                            <p>
                                Additionally, our <span className='text-light'>Business Development</span> expertise helps you identify new opportunities, driving growth and long-term success.
                            </p>
                        </Col>
                        <Col lg="5" className='mt-5'>
                            <div data-aos="fade-left"
                                data-aos-anchor-placement="top-center"><img loading="lazy" src='/images/services-hero.webp' alt='services' className='img-fluid rounded-5 shadow float-animation' width={550} height={550} /></div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className='mt-5' id='marketingServices'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <img loading="lazy" src='/images/crousel-img1.webp' alt='mission' className='img-fluid rounded-5 shadow' data-aos="fade-right" />
                    </Col>
                    <Col lg="5" className='mb-5' data-aos="fade-up">
                        <h2 className='fw-bold'><i className="bi bi-buildings-fill me-2"></i>Marketing Services</h2>
                        <p className='mt-3'>Origo Business Services delivers tailored marketing solutions designed to boost your brand&rsquo;s visibility and impact. We combine innovative strategies with deep market insights to create compelling campaigns that resonate with your target audience. Whether its digital marketing, brand positioning, or market entry strategies, our expertise ensures your business stands out in a competitive landscape, driving customer engagement and accelerating growth.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5' id='procurementServices'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5 order-last order-lg-first' data-aos="fade-up">
                        <h2 className='fw-bold'><i className="bi bi-union me-2"></i>Procurement Services</h2>
                        <p className='mt-3'>Origo Business Services provides top-tier procurement solutions, ensuring you receive the best quality products and materials at competitive prices. We leverage our extensive network of trusted suppliers to source a wide range of goods, from pharmaceutical packaging to textiles and coal. Our procurement process is meticulous, focusing on timely delivery, cost efficiency, and compliance with global standards, so your business can operate smoothly and effectively.</p>
                    </Col>
                    <Col lg="5" className='mb-5 order-first order-lg-last'>
                        <img loading="lazy" src='/images/crousel-img2.webp' alt='mission' className='img-fluid rounded-5 shadow' data-aos="fade-left"/>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5' id='projectExecutions'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <img loading="lazy" src='/images/crousel-img4.webp' alt='mission' className='img-fluid rounded-5 shadow' data-aos="fade-right"/>
                    </Col>
                    <Col lg="5" className='mb-5' data-aos="fade-up">
                        <h2 className='fw-bold'><i className="bi bi-check-circle-fill me-2"></i>Project Execution</h2>
                        <p className='mt-3'>Origo Business Services excels in Project Execution, turning your ideas into reality with precision and expertise. We manage every phase of the project lifecycle, from planning and resource allocation to execution and final delivery. Our team ensures that projects are completed on time, within budget, and to the highest quality standards, allowing you to focus on your core business while we handle the complexities of bringing your vision to life.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5' id='strategicPartnerships'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5 order-last order-lg-first' data-aos="fade-up">
                        <h2 className='fw-bold'><i className="bi bi-trophy-fill me-2"></i>Strategic Partnerships</h2>
                        <p className='mt-3'>Origo Business Services specializes in building strategic partnerships that drive mutual growth and innovation. We connect businesses with complementary strengths, fostering collaborations that enhance market reach, share resources, and create new opportunities. Our expertise in identifying and aligning with the right partners ensures that each partnership is strategically beneficial, paving the way for long-term success and sustainable competitive advantage in the global marketplace.</p>
                    </Col>
                    <Col lg="5" className='mb-5 order-first order-lg-last'>
                        <img loading="lazy" src='/images/crousel-img3.webp' alt='mission' className='img-fluid rounded-5 shadow' data-aos="fade-left"/>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5' id='businessDevelopment'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5' data-aos="fade-right">
                        <img loading="lazy" src='/images/mission.webp' alt='mission' className='img-fluid rounded-5 shadow' />
                    </Col>
                    <Col lg="5" className='mb-5' data-aos="fade-up">
                        <h2 className='fw-bold'><i className="bi bi-graph-up-arrow me-2"></i>Business Development</h2>
                        <p className='mt-3'>Origo Business Services offers expert Business Development services aimed at driving growth and unlocking new opportunities for your company. We work closely with you to identify potential markets, forge key relationships, and develop strategies that expand your business footprint. Whether it&rsquo;s entering new sectors or enhancing existing operations, our proactive approach ensures your business is positioned for sustained success and increased profitability.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services
