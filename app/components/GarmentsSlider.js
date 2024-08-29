"use client"
import React from 'react';
import Link from 'next/link';
import { Col, Container, Row, Card } from 'react-bootstrap';
// Import Swiper core and required modules
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GarmentsSlider = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <>
                <Container>
                    <Container>
                        <Row className='justify-content-center' data-aos="zoom-in" data-aos-duration="3000">
                            <Col>
                                <Swiper
                                    modules={[ A11y, Autoplay]}
                                    autoplay={{
                                        delay: 2000, // Delay between slides in milliseconds (3000ms = 3s)
                                        disableOnInteraction: false, // Keep autoplay running even when a slide is clicked
                                    }}
                                    loop={true}
                                    spaceBetween={50}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 7,
                                            spaceBetween: 40,
                                        },
                                    }}
                                    // pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Long dress</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'> T-Shirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'> Hoodies</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'> Sweater</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Skirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Trousers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Dress pants</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Tank Top</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Shorts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Fashion Shirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Jackets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Swimsuits</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Briefs</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Pajamas</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>T-Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Polo Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Pajamas</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Romper</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bib</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Skirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Shorts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Basic T-Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Polo Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Night wears</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Trousers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Inner wears</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Briefs</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Pajamas set</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Pullover</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Cardigans</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded-circle' variant="top" src="/images/garments/garments.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Hooded jackets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>
        </>
    )
}

export default GarmentsSlider
