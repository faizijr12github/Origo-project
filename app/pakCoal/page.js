"use client";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PakCoalSlider from '../components/PakCoalSlider';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PakCoal = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
            <Container fluid className='pakCoal-head'>
                <Container>
                    <Row className='justify-content-evenly align-items-center'>
                        <Col lg="5" className='mt-5' data-aos="fade-right">
                            <h2 className='text-success fw-bold'>Pakistan</h2>
                            <h2 className='fst-italic'>Coal Market</h2>
                            <p>The Pakistan coal market is rapidly gaining prominence as the country seeks to secure affordable energy. With vast reserves, especially in Thar, coal is becoming a vital part of Pakistan&apos;s energy mix. Government investments in coal-fired power plants and infrastructure are driving growth, making the market a promising opportunity for both domestic and international players.
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
                <PakCoalSlider />
            </Container>
            {/* Thar Coal */}
            <Container className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img1.png' alt='img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-up" />
                        </div>
                    </Col>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Thar Coal</h2>
                        <h3 className='text-success fst-italic'>Unlocking Pakistan&apos;s Energy Potential</h3>
                        <p>Thar Coal represents a game-changing resource in Pakistan&apos;s energy landscape, with one of the largest lignite coal reserves in the world. Located in the Thar Desert, this vast deposit is key to reducing energy imports and boosting domestic power generation. Through strategic investments and partnerships, Thar Coal is set to fuel Pakistan&apos;s industrial growth and energy security for decades to come.</p>
                    </Col>
                </Row>
            </Container>
            {/* Balochistan Coal */}
            <Container fluid className='section3-coal py-5'>
                <Container>
                    <Row className='justify-content-evenly align-items-center'>
                        <Col lg="5" className='mt-5' data-aos="fade-right">
                            <h2 className='fw-bold'>Balochistan Coal</h2>
                            <h3 className='text-success fst-italic'>A Vital Resource for Industrial Growth</h3>
                            <p>Balochistan Coal is a crucial asset in Pakistan&apos;s energy sector, known for its high-quality reserves that support various industries across the country. The coal from Balochistan, with its significant deposits, plays a vital role in powering cement, brick, and power plants. As the region continues to develop its mining infrastructure, Balochistan Coal remains a key contributor to Pakistan’s economic and industrial growth.</p>
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

export default PakCoal;
