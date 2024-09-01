"use client";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AfgCoalSlider from '../components/AfgCoalSlider';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AfghanistanCoal = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='pakCoal-head'>
                <Container>
                    <Row className='justify-content-evenly align-items-center'>
                        <Col lg="5" className='mt-5' data-aos="fade-right">
                            <h2 className='text-danger fw-bold'>Afghanistan</h2>
                            <h2 className='fst-italic'>Coal Market</h2>
                            <p>Afghanistan&apos;s coal market is emerging as a significant energy resource, offering high-quality coal to meet growing regional demands. With its rich deposits and strategic location, Afghanistan is poised to become a key player in the energy supply chain, providing reliable and competitively priced coal solutions for industries across South Asia and beyond.
                            </p>
                        </Col>
                        <Col lg="4" className='mt-5'>
                            <div>
                                <img src='/images/coal/coal-hero-img.png' alt='hero-img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-down" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <AfgCoalSlider />
            </Container>
            {/* Afghan Coal Grades */}
            <Container className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img1.png' alt='img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-up" />
                        </div>
                    </Col>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Afghan Coal Grades</h2>
                        <h3 className='text-danger fst-italic'>High-Quality Coal for Regional Needs</h3>
                        <p>Afghanistan offers a variety of coal grades, primarily sourced from its rich deposits in provinces like Bamyan, Samangan, and Baghlan. The country’s coal is generally categorized by its high calorific value, making it suitable for industrial use, especially in cement and brick production. The major grades include semi-anthracite and bituminous coal, known for their high energy content and low impurities. These grades provide reliable fuel for industries across South Asia, contributing to regional energy security.</p>
                    </Col>
                </Row>
            </Container>
            {/* Market Analysis */}
            <Container fluid className='section3-coal py-5'>
                <Container>
                    <Row className='justify-content-evenly align-items-center'>
                        <Col lg="5" className='mt-5' data-aos="fade-right">
                            <h2 className='fw-bold'>Market Analysis</h2>
                            <h3 className='text-danger fst-italic'>Potential of the Afghan Coal Market</h3>
                            <p>The Afghan coal market is gaining attention as a growing energy resource in South Asia. Despite challenges such as limited infrastructure and political instability, Afghanistan&apos;s abundant coal reserves present significant opportunities for both domestic consumption and export. Market analysis indicates increasing demand from neighboring countries, coupled with Afghanistan&apos;s strategic location, positions it as a potential key supplier in the region. Understanding the evolving market dynamics, including regulatory developments and investment opportunities, is crucial for stakeholders looking to capitalize on Afghanistan&apos;s coal potential.
                            </p>
                        </Col>
                        <Col lg="4" className='mt-5'>
                            <div>
                                <img src='/images/coal/coal-img2.png' alt='img' className='img-fluid rounded-5' data-aos="fade-up" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default AfghanistanCoal;
