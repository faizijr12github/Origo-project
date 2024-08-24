"use client"
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Industry = () => {
    return (
        <>
            <Container fluid className='industry-hero pb-5'>
                <Row className='h-600 d-flex flex-column align-items-center justify-content-center text-center'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Industry</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services provides comprehensive solutions across a diverse range of industries, including Textiles, Coal Energy, Pharma Packaging, Real Estate, and Creative Media. Our expertise spans these sectors, enabling us to deliver tailored services that meet the unique needs of each industry.</p>
                            <p>Whether it&rsquo;s driving innovation in textile production, ensuring efficient coal sourcing, supplying high-quality pharmaceutical packaging, managing real estate projects, or producing impactful creative media, Origo is your trusted partner for success in any field.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* textiles */}
            <Container>
                <Row className='justify-content-around align-items-center text-center'>
                    <Col lg="5" className='mb-5'>
                        <h2 className='fw-bold mb-4'>Textiles</h2>
                        <p>Origo Business Services is your trusted textile partner, specializing in high-quality home textiles, apparel, leather goods, and towels. Leveraging our industry expertise and extensive supplier network, we ensure top-quality products that meet strict compliance standards, helping you expand your offerings and succeed in new markets.</p>
                        <Link href={'/textiles'} className='btn btn-outline-dark fw-bold rounded-5 px-4'>View More</Link>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/textiles.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            {/* coal */}
            <Container className='mt-5'>
                <Row className='justify-content-around align-items-center text-center'>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/coal.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <h2 className='fw-bold text-center mb-4'>Coal Energy</h2>
                        <p>Origo Business Services is a leading provider in the coal energy sector, offering reliable sourcing of various coal grades, including GCV/GAR 3400 to 7500. Serving major markets in Pakistan, China, and beyond, we ensure a steady supply from trusted sources in South Africa, Indonesia, and Afghanistan. Our focus on quality, timely delivery, and competitive pricing makes Origo the preferred partner for dependable coal energy solutions.</p>
                        <Link href={'/coalEnergy'} className='btn btn-outline-dark fw-bold rounded-5 px-4'>View More</Link>
                    </Col>
                </Row>
            </Container>
            {/* Pharma Packaging */}
            <Container className='mt-5'>

                <Row className='justify-content-around align-items-center text-center'>
                    <Col lg="5" className='mb-5'>
                        <h2 className='fw-bold text-center mb-4'>Pharma Packaging</h2>
                        <p>Origo Business Services provides specialized pharmaceutical packaging solutions, ensuring your products meet the highest safety and quality standards. We offer essential packaging materials like aluminum seals, rubber stoppers, and glass vials from certified, compliant manufacturers. Our emphasis on precision, compliance, and innovation helps pharmaceutical companies preserve product integrity and enhance market appeal.</p>
                        <Link href={'/pharmaPakaging'} className='btn btn-outline-dark fw-bold rounded-5 px-4'>View More</Link>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/pharma-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            {/* Real Estate */}
            <Container className='real-estate mt-5'>
                <Row className='justify-content-around align-items-center text-center'>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/real-estate-img1.png' alt='textile' className='img-fluid rounded-5' />
                    </Col>
                    <Col lg="5" className='mb-5'>
                    <h2 className='fw-bold text-center mb-4'>Real Estate</h2>
                        <p>Origo Business Services offers expert real estate solutions for residential and commercial projects. We specialize in developing, marketing, and managing high-value properties, ensuring each project is precisely executed to maximize returns. With deep market insights and a commitment to excellence, Origo is a trusted partner in the dynamic real estate sector.</p>
                        <Link href={'/realEstate'} className='btn btn-outline-dark fw-bold rounded-5 px-4'>View More</Link>
                    </Col>
                </Row>
            </Container>
            {/* Creative Media */}
            <Container className='real-estate mt-5'>
                <Row className='justify-content-around align-items-center text-center'>
                    <Col lg="5" className='mb-5'>
                    <h2 className='fw-bold text-center mb-4'>Creative Media</h2>
                        <p>Origo Business Services delivers expert real estate solutions for residential and commercial projects. We develop, market, and manage high-value properties with precision, maximizing returns. With deep market insights and a commitment to excellence, Origo is your trusted real estate partner.
                        </p>
                        <Link href={'/creativeMedia'} className='btn btn-outline-dark fw-bold rounded-5 px-4'>View More</Link>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/creative-media-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Industry;
