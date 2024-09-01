"use client";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SaCoalSlider from '../components/SaCoalSlider';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SaCoal = () => {
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
                            <h2 className='text-success fw-bold'>South Africa</h2>
                            <h2 className='fst-italic'>Coal Market</h2>
                            <p>South Africa's coal market is a cornerstone of the global energy sector, renowned for its vast reserves and consistent production. As a leading exporter, South Africa provides high-quality coal to power industries and economies worldwide. With its strategic location and robust mining infrastructure, the South African coal market continues to be a reliable source of energy, driving growth and sustainability on a global scale.
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
                <SaCoalSlider/>
            </Container>
            {/* South African Coal Grades */}
            <Container className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img1.png' alt='img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-up"/>
                        </div>
                    </Col>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>South African Coal Grades</h2>
                        <h3 className='text-success fst-italic'>Diverse Quality for Global Energy Needs</h3>
                        <p>South Africa offers a wide range of coal grades to meet the varying demands of global markets. From high-calorific value anthracite and bituminous coal, ideal for power generation and industrial use, to lower-grade lignite, South African coal provides versatile solutions for energy production. With grades like RB1, RB2, and RB3, South Africa’s coal is tailored to deliver optimal performance, ensuring that industries worldwide receive the specific quality they require for their energy and production needs.</p>
                    </Col>
                </Row>
            </Container>
            {/* Market Analysis */}
            <Container fluid className='section3-coal py-5'>
            <Container>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Market Analysis</h2>
                        <h3 className='text-success fst-italic'>Understanding the South African Coal Market Dynamics</h3>
                        <p>The South African coal market plays a pivotal role in the global energy landscape, with demand driven by both domestic consumption and strong export markets, particularly in Asia. Analysis of current trends highlights the country's ability to maintain competitive pricing while navigating regulatory changes and increasing pressure for sustainable practices. As South Africa continues to be a key supplier of high-quality coal, understanding the market dynamics, including export trends, infrastructure developments, and geopolitical factors, is essential for capitalizing on its strategic position in the global energy market.</p>
                    </Col>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img2.png' alt='img' className='img-fluid rounded-5' data-aos="fade-up"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Container>
        </>
    );
};

export default SaCoal;
