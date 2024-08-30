"use client"
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container fluid className='bg-black py-5'>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col lg="4" md="6">
                            <div className='pt-5 text-white'>
                                <img src='/images/origo_business_services_logo.jpg' alt='logo' className='img-fluid rounded mb-4' width={80} />
                                <p><i className="bi bi-geo-alt-fill me-1"></i>82-E, Wapda Town <br /> Bagewal Road, Faisalabad, Pakistan</p>
                                <p><i className="bi bi-envelope-fill me-2"></i><a href="mailto:AskOrigo@Gmail.Com" className='text-white'>askOrigo@Gmail.Com</a></p>
                                <ul className="list-unstyled mylinks">
                                <li><Link className='btn btn-outline-light rounded-circle fs-5 mt-3' href="https://www.linkedin.com/company/origo-business-services" target='blank'><i className="bi bi-linkedin"></i></Link></li>
                            </ul>
                            </div>
                        </Col>
                        <Col lg="2" md="6" className='pt-5'>
                            <h4 className='text-white fw-bold'>Quick Links</h4>
                            <ul className="list-unstyled mt-4">
                                <li><Link href="/about" className="slide-link">About</Link></li>
                                <li><Link href="/services" className="slide-link">Services</Link></li>
                                <li><Link href="/textiles" className="slide-link">Textiles</Link></li>
                                <li><Link href="/coalEnergy" className="slide-link">Coal Energy</Link></li>
                                <li><Link href="/contact" className="slide-link">Contact</Link></li>
                            </ul>
                        </Col>
                        <Col lg="2" md="6" className='pt-5'>
                        <h4 className='text-white fw-bold'>Support</h4>
                            <ul className="list-unstyled mt-4">
                                <li><Link href="/" className="slide-link">Privacy policy</Link></li>
                                <li><Link href="/" className="slide-link">Terms & Conditions</Link></li>
                                <li><Link href="/industry" className="slide-link">FAQs</Link></li>
                            </ul>
                        </Col>
                        <Col lg="3" md="6" className='pt-5'>
                        <h4 className='text-white fw-bold'>Core Features</h4>
                            <ul className="list-unstyled mt-4">
                                <li><Link href="/" className="slide-link">Marketing</Link></li>
                                <li><Link href="/" className="slide-link">Procurement</Link></li>
                                <li><Link href="/industry" className="slide-link">Project Execution</Link></li>
                                <li><Link href="/industry" className="slide-link">Strategic Partnerships</Link></li>
                                <li><Link href="/industry" className="slide-link">Business Development</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer
