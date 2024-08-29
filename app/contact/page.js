"use client";
import Link from 'next/link'
import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);

    return (
        <>
            <Container fluid className='contact-bg py-5'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col className='mt-5' lg="5" data-aos="fade-right">
                            <h1 className='text-orange fw-bold mb-3'>Contact Us</h1>
                            <p className='text-white'>Let Origo Business Services be your partner in growth and success. For more information or to discuss your specific needs, please contact us at:</p>
                            <p className='text-white'>
                                <span className='text-orange me-2'>
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <a href="mailto:AskOrigo@Gmail.Com" className='text-white'>askOrigo@Gmail.Com</a>
                            </p>
                            <p><span className='text-orange me-2'><i className="bi bi-linkedin"></i></span><Link className='text-white' href={'https://www.linkedin.com/company/origo-business-services '} target='blank'>linkedin</Link></p>
                        </Col>
                        <Col className='mt-5' lg="5">
                            <Form data-aos="fade-down">
                                <Form.Group controlId="formName">
                                    <Form.Label className='form-label'>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Label className='form-label'>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formSubject" className="mt-3">
                                    <Form.Label className='form-label'>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formMessage" className="mt-3">
                                    <Form.Label className='form-label'>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="mt-4 w-100 conatct-form-btn">
                                    Send Message <i className="bi bi-send-fill ms-1"></i>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                {/* cards */}
                <Container className='mt-5'>
                    <Row className='justify-content-center align-items-center'>
                        <Col className='mt-5' lg="5" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="card contact-card mb-3">
                                <div className="row px-3 g-0">
                                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/Faizi.jpg" alt="contact1" className="img-fluid rounded-circle contact-img my-3" width={250} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-center text-md-start">
                                            <h4 className="card-title mt-3 mb-1">MF Faizi </h4>
                                            <p className="card-text"><i className="bi bi-patch-check-fill me-2 text-orange"></i>Director Marketing <br /> <i className="bi bi-telephone-fill me-2 text-orange"></i>+92 321 4455367 <br />  <i className="bi bi-whatsapp me-2 text-orange"></i>WhatsApp <i className="bi bi-wechat mx-2 text-orange"></i>WeChat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5' lg="5" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="card contact-card mb-3">
                                <div className="row px-3 g-0">
                                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/Faheem.jpg" alt="contact1" className="img-fluid rounded-circle contact-img my-3" width={250} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-center text-md-start">
                                            <h4 className="card-title mt-3 mb-1">Faheem M</h4>
                                            <p className="card-text"><i className="bi bi-patch-check-fill me-2 text-orange"></i>Director Operations <br /> <i className="bi bi-telephone-fill me-2 text-orange"></i>+92 320 2422420 <br />  <i className="bi bi-whatsapp me-2 text-orange"></i>WhatsApp <i className="bi bi-wechat mx-2 text-orange"></i>WeChat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Contact
