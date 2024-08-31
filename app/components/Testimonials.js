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
                        <div className="card bg-black text-white mb-3 shadow-lg p-3 rounded-5">
                            <div className="row px-3 g-0">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="contact1" className="img-fluid rounded-circle contact-img my-3" />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body text-center text-md-start">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.</p>
                                        <h4 className="card-title mt-3 mb-1">John Smith</h4>
                                        <p className='text-orange fw-bold'>Product manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='mt-5' lg="5" md="6" data-aos="zoom-in" data-aos-duration="3000">
                        <div className="card bg-black text-white mb-3 shadow-lg p-3 rounded-5">
                            <div className="row px-3 g-0">
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="contact1" className="img-fluid rounded-circle contact-img my-3" />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body text-center text-md-start">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.</p>
                                        <h4 className="card-title mt-3 mb-1">John Smith</h4>
                                        <p className='text-orange fw-bold'>Product manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;
