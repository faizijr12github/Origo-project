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


const TowelSlider = () => {
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
                                            slidesPerView: 4,
                                            spaceBetween: 40,
                                        },
                                    }}
                                    // pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Terry Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Linen</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Terry & Waffle Bathrobes</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Hand Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Sheet</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Washcloth</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Mat</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Beach Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Guest Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Kids Hooded Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Spa Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Gym Towel</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bathrobes</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Mats</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Shower Curtains</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Shower Caps</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Gloves</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Wraps</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Slippers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Mitts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Bath Skirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/towels.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Wraps</Link>
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

export default TowelSlider
