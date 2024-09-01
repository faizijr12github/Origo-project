"use client";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import IndonesiaCoalSlider from '../components/IndonesiaCoalSlider';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndonesiaCoal = () => {
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
                            <h2 className='text-danger fw-bold'>Indonesia</h2>
                            <h2 className='fst-italic'>Coal Market</h2>
                            <p>As a leading coal exporter, Indonesia provides diverse, high-quality coal grades to power industries worldwide. With its strategic location and robust infrastructure, Indonesia ensures reliable, efficient coal supply, meeting the demands of global markets. Trust Indonesia&apos;s coal market for sustainable energy solutions that drive industrial growth and energy security.
                            </p>
                        </Col>
                        <Col lg="4" className='mt-5'>
                            <div>
                                <img src='/images/coal/coal-hero-img.png' alt='hero-img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-down"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <IndonesiaCoalSlider/>
            </Container>
            {/* Indonesian Coal Grades */}
            <Container className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img1.png' alt='img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-up"/>
                        </div>
                    </Col>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Indonesian Coal Grades</h2>
                        <h3 className='text-danger fst-italic'>Solutions for Global Energy Demands</h3>
                        <p>Indonesia offers a wide range of coal grades, each tailored to meet specific industrial needs. The primary grades include high-calorific ICI 1 (6500 kcal/kg GAR), mid-calorific ICI 2 (5800 kcal/kg GAR) and ICI 3 (5000 kcal/kg GAR), and lower-calorific ICI 4 (4200 kcal/kg GAR) and ICI 5 (3400 kcal/kg GAR). These grades provide versatile energy solutions, whether for power generation, industrial applications, or export markets, making Indonesian coal a key resource in the global energy supply chain.</p>
                    </Col>
                </Row>
            </Container>
            {/* Market Analysis */}
            <Container fluid className='section3-coal py-5'>
            <Container>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Market Analysis</h2>
                        <h3 className='text-danger fst-italic'>Dynamics of the Indonesian Coal Market</h3>
                        <p>The Indonesian coal market remains a critical player in the global energy sector, driven by robust demand from Asia and beyond. Market analysis shows that while Indonesia continues to benefit from strong export volumes, it also faces challenges such as fluctuating prices, regulatory shifts, and increasing environmental concerns. Understanding these dynamics is crucial for stakeholders aiming to leverage Indonesia&apos;s strategic position as a leading coal supplier and to navigate the complexities of the global coal trade effectively.</p>
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

export default IndonesiaCoal;
