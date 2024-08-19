import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container fluid className='footer-bg py-5'>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col lg="4" md="6">
                            <div className='pt-5 text-white'>
                                <img src='/images/origo_business_services_logo.jpg' alt='logo' className='img-fluid rounded mb-4' width={80} />
                                <p>221B Baker Street, P.O Box 353 Park <br /> Road, USA - 215431</p>
                                <p>AskOrigo@Gmail.Com</p>
                                <ul class="list-unstyled mylinks">
                                <li><Link className='btn btn-outline-light rounded-circle fs-5 mt-4' href="https://www.linkedin.com/company/origo-business-services" target='blank'><i class="bi bi-linkedin"></i></Link></li>
                            </ul>
                            </div>
                        </Col>
                        <Col lg="2" md="6" className='pt-5'>
                            <h4 className='text-white fw-bold'>Quick Links</h4>
                            <ul class="list-unstyled mt-4">
                                <li><Link href="/about" class="slide-link">About</Link></li>
                                <li><Link href="/services" class="slide-link">Services</Link></li>
                                <li><Link href="/industry" class="slide-link">Industry</Link></li>
                                <li><Link href="/contact" class="slide-link">Contact</Link></li>
                            </ul>
                        </Col>
                        <Col lg="2" md="6" className='pt-5'>
                        <h4 className='text-white fw-bold'>Support</h4>
                            <ul class="list-unstyled mt-4">
                                <li><Link href="/" class="slide-link">Privacy policy</Link></li>
                                <li><Link href="/" class="slide-link">Terms & Conditions</Link></li>
                                <li><Link href="/industry" class="slide-link">FAQs</Link></li>
                            </ul>
                        </Col>
                        <Col lg="3" md="6" className='pt-5'>
                        <h4 className='text-white fw-bold'>Core Features</h4>
                            <ul class="list-unstyled mt-4">
                                <li><Link href="/" class="slide-link">Marketing</Link></li>
                                <li><Link href="/" class="slide-link">Procurement</Link></li>
                                <li><Link href="/industry" class="slide-link">Project Execution</Link></li>
                                <li><Link href="/industry" class="slide-link">Strategic Partnerships</Link></li>
                                <li><Link href="/industry" class="slide-link">Business Development</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer
