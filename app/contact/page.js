"use client";
import Link from 'next/link'
import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <Container fluid className='contact-bg py-5'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col className='mt-5' lg="5">
                            <h1 className='text-orange fw-bold mb-3'>Contact Us</h1>
                            <p className='text-white'>Let Origo Business Services be your partner in growth and success. For more information or to discuss your specific needs, please contact us at:</p>
                            <p className='text-white'><span className='text-orange me-2'><i class="bi bi-envelope-fill"></i></span>AskOrigo@Gmail.Com</p>
                            <p><span className='text-orange me-2'><i class="bi bi-linkedin"></i></span><Link className='text-white' href={'https://www.linkedin.com/company/origo-business-services '} target='blank'>linkedin</Link></p>
                        </Col>
                        <Col className='mt-5' lg="5">
                            <Form>
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
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                {/* cards */}
                <Container className='mt-5'>
                    <Row className='justify-content-center align-items-center'>
                        <Col className='mt-5' lg="5">
                            <div class="card contact-card mb-3">
                                <div class="row px-3 g-0">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/Faizi.jpg" alt="contact1" class="img-fluid rounded-circle contact-img my-3" width={250} />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body text-center text-md-start">
                                            <h4 class="card-title mt-3 mb-1">MF Faizi </h4>
                                            <p class="card-text"><i class="bi bi-patch-check-fill me-2 text-orange"></i>Director Marketing <br /> <i class="bi bi-telephone-fill me-2 text-orange"></i>+92 321 4455367 <br />  <i class="bi bi-whatsapp me-2 text-orange"></i>WhatsApp <i class="bi bi-wechat mx-2 text-orange"></i>WeChat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5' lg="5">
                        <div class="card contact-card mb-3">
                                <div class="row px-3 g-0">
                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                        <img src="/images/Faheem.jpg" alt="contact1" class="img-fluid rounded-circle contact-img my-3" width={250} />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body text-center text-md-start">
                                            <h4 class="card-title mt-3 mb-1">Faheem M</h4>
                                            <p class="card-text"><i class="bi bi-patch-check-fill me-2 text-orange"></i>Director Operations <br /> <i class="bi bi-telephone-fill me-2 text-orange"></i>+92 320 2422420 <br />  <i class="bi bi-whatsapp me-2 text-orange"></i>WhatsApp <i class="bi bi-wechat mx-2 text-orange"></i>WeChat</p>
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
