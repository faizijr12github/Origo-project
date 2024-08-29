"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);

    return (
        <>
            <Container fluid className='about-hero py-5'>
                <Row className='justify-content-center'>
                    <Col lg="7" md="10" data-aos="zoom-out">
                        <h1 className='fw-bold mb-3 sevillana-regular'>About Origo</h1>
                        <div className='about-hero-content'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects. </p>
                            <p>We offer a full spectrum of services designed to meet the unique needs of our clients, helping them achieve their business goals. We work with competent suppliers who hold valid certifications and social compliances required for global trade.
                                Additionally, Origo actively invites foreign business communities to introduce their products to the thriving Pakistani market, unlocking vast potential and new opportunities.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='text-white my-5'>
                <Row className=' justify-content-center text-center'>
                    <Col className='vision p-5' lg="6" md="8" sm="11" data-aos="fade-up">
                        <h2 className='mt-4 fw-bold sevillana-regular'><i className="bi bi-lightbulb me-2"></i>Our Vision</h2>
                        <p className='mt-3'>To be a global leader in providing innovative business solutions that drive growth, foster sustainable partnerships, and create value across diverse industries.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='pt-5 text-center'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5 order-last order-lg-first'>
                        <h2 className='fw-bold' data-aos="fade-down">
                            <span className='bg-orange text-white rounded-5 px-4 py-2 sevillana-regular'><i className="bi bi-person-arms-up me-2"></i>Our Mission</span>
                        </h2>
                        <p className='mt-4' data-aos="fade-right">
                            To empower our clients by delivering exceptional marketing and procurement services, fostering innovative project concepts, and facilitating strategic joint ventures, while upholding the highest standards of quality, integrity, and social responsibility.
                        </p>
                    </Col>
                    <Col lg="5" className='mb-5 order-first order-lg-last'>
                        <img src='/images/mission.jpg' alt='mission' className='img-fluid rounded-5 shadow' data-aos="zoom-out"/>
                    </Col>
                </Row>
            </Container>
            <Container className='pt-5 text-center'>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/Goal.jpg' alt='mission' className='img-fluid rounded-5 shadow' data-aos="fade-down-right"/>
                    </Col>
                    <Col lg="5" className='mb-5' data-aos="zoom-in-left">
                        <h2 className='fw-bold sevillana-regular'>
                            <span className='bg-orange text-white rounded-5 px-4 py-2'><i className="bi bi-rocket-takeoff-fill me-2"></i>Our Goal</span>
                        </h2>
                        <p className='mt-4'>Our goal is to create a sustainable and mutually beneficial business ecosystem by bridging gaps between local and international markets, enhancing operational efficiencies, and driving forward-thinking strategies that promote long-term success for our clients and partners.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
