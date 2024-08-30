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

const HomeTextilesHeroSlider = () => {
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
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/White-fabrics-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>White Fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/Dyed-fabrics-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Dyed fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/Print-fabrics-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Print Fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/Sheet-Sets-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Sheet Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/QuiltCoverSets-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Quilt Cover Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/comforter-sets-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Comforter Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/mattress-covers-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Mattress Covers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/duvet-cover-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Duvet Covers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/valances-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Valances</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/curtains-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Curtains</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/Ironing-boards-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Ironing boards</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/individual-Flat-sheets.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Individual Flat Sheets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/fitted-sheets-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Fitted Sheets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/pillow-cases-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Pillow Cases</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/homeTextiles/Hotel-sheeting-slider.jpg" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="/textiles" className='text-decoration-none slider-link fw-bold text-dark'>Hotel Sheeting</Link>
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

export default HomeTextilesHeroSlider
