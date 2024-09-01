"use client";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <h2 className='text-center mt-5 fw-bold sevillana-regular' data-aos="fade-down">Testimonials<i className="bi bi-chat-quote-fill ms-2"></i></h2>
            <Container fluid className='mb-5'>
                <Row className='justify-content-evenly align-items-center'>
                    <Col className='mt-5' lg="5" md="6" data-aos="zoom-in" data-aos-duration="3000">
                        <div className='card p-5 rounded-5 bg-black text-white'>
                            <p>&quot;Origo Business Services has been an exceptional partner in our textile sourcing needs. Their deep market knowledge and extensive network have consistently provided us with high-quality materials at competitive prices. The team&apos;s attention to detail, prompt communication, and commitment to excellence make them a reliable and trusted partner in our supply chain. I highly recommend Origo for anyone seeking top-tier sourcing solutions.&quot;</p>
                            <div>
                                <h4 className="card-title mt-3 mb-1">— Rajeev Sharma</h4>
                                <p className='text-orange fw-bold'>Chairman - Golden Warp, Australia</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='mt-5' lg="5" md="6" data-aos="zoom-in" data-aos-duration="3000">
                        <div className='card p-5 rounded-5 bg-black text-white'>
                            <p>&quot;Origo Business Services has been instrumental in streamlining our coal sourcing process. Their deep understanding of the market, coupled with their ability to secure high-quality coal from top suppliers, has significantly enhanced our operations. The team&apos;s professionalism, transparency, and commitment to delivering on time have made them a trusted partner. I highly recommend Origo for anyone seeking reliable and efficient coal sourcing solutions.&quot;
                            </p>
                            <div>
                                <h4 className="card-title mt-3 mb-1">— Ira Susanty</h4>
                                <p className='text-orange fw-bold'>Coal Sourcing Specialist - Indonesia </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;
