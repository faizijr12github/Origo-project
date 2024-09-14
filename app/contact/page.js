"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button, Modal, Spinner } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1300,
        });
    }, []);

    // form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false); // to show spinner
    const [showModal, setShowModal] = useState(false); // to control modal visibility

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            const res = await fetch('/api/Email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.status === 200) {
                setShowModal(true); // Show modal
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form fields
                setTimeout(() => {
                    setShowModal(false); // Hide modal after 3 seconds
                }, 3000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Container fluid className='contact-bg py-5'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col className='mt-5' lg="5" data-aos="fade-right">
                            <h1 className='text-orange fw-bold mb-3'>Contact Us</h1>
                            <p className='text-white'>Let Origo Business Services be your partner in growth and success. For more information or to discuss your specific needs, please contact us at:</p>
                            <h5 className='text-orange fw-bold mb-3'>General Inquiries</h5>
                            <p className='text-white'>
                                <span className='text-orange me-2'>
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <a href="mailto:askorigo@gmail.com" className='text-white'>askorigo@gmail.com</a>
                            </p>
                            <p className='text-white'>
                                <span className='text-orange me-2'>
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <a href="mailto:services@origobiz.com" className='text-white'>services@origobiz.com</a>
                            </p>

                            <h5 className='text-orange fw-bold mb-3'>Textile Inquiries</h5>
                            <p className='text-white'>
                                <span className='text-orange me-2'>
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <a href="mailto:textiles@origobiz.com" className='text-white'>textiles@origobiz.com</a>
                            </p>

                            <h5 className='text-orange fw-bold mb-3'>Coal Energy Inquiries</h5>
                            <p className='text-white'>
                                <span className='text-orange me-2'>
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <a href="mailto:coalenergy@origobiz.com" className='text-white'>coalenergy@origobiz.com</a>
                            </p>

                        </Col>
                        <Col className='mt-5' lg="5">
                            {/* Contact form */}
                            <Form onSubmit={handleSubmit} data-aos="fade-down">
                                <Form.Group controlId="name">
                                    <Form.Label className="form-label">Name</Form.Label>
                                    <Form.Control type="text" value={formData.name} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="email" className="mt-3">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control type="email" value={formData.email} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="subject" className="mt-3">
                                    <Form.Label className="form-label">Subject</Form.Label>
                                    <Form.Control type="text" value={formData.subject} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="message" className="mt-3">
                                    <Form.Label className="form-label">Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} value={formData.message} onChange={handleChange} />
                                </Form.Group>

                                <Button type="submit" className="mt-4 w-100 conatct-form-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            Sending... <Spinner animation="border" size="sm" className="ms-2" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message <i className="bi bi-send-fill ms-1"></i>
                                        </>
                                    )}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                {/* Success modal */}
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Success</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Your message has been sent successfully!</p>
                                </Modal.Body>
                            </Modal>
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
    );
};

export default Contact;
