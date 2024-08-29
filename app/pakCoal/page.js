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
                            <h2 className='fw-bold'>Coal Energy</h2>
                            <h2 className='text-success fst-italic'>Pakistan</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
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
                <PakCoalSlider/>
            </Container>
            <Container className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="4" className='mt-5'>
                        <div>
                            <img src='/images/coal/coal-img1.png' alt='img' className='img-fluid rounded-5 shadow-lg' data-aos="fade-up"/>
                        </div>
                    </Col>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Heading</h2>
                        <h2 className='text-success fst-italic'>Sub Heading</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='section3-coal py-5'>
            <Container>
                <Row className='justify-content-evenly align-items-center'>
                    <Col lg="5" className='mt-5' data-aos="fade-right">
                        <h2 className='fw-bold'>Heading</h2>
                        <h2 className='text-success fst-italic'>Sub Heading</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
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

export default PakCoal;
