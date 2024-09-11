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
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Terry Towels/Terry Towels 6.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#TerryTowels" className='text-decoration-none slider-link fw-bold text-dark'>Terry Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Bathrobes/Bathrobes 6.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#Bathrobes" className='text-decoration-none slider-link fw-bold text-dark'>Bathrobes</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Bath Towels/Bath Towels 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#BathTowels" className='text-decoration-none slider-link fw-bold text-dark'>Bath Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="\images\towels\Hand Towels\Hand Towels 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#HandTowels" className='text-decoration-none slider-link fw-bold text-dark'>Hand Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Bath Mats/Bath Mats 5.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#BathMats" className='text-decoration-none slider-link fw-bold text-dark'>Bath Mats</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Beach Towel/Beach Towels 4.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#BeachTowel" className='text-decoration-none slider-link fw-bold text-dark'>Beach Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Kids Hooded Towels/Kids Hooded Towel 4.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#KidsHoodedTowel" className='text-decoration-none slider-link fw-bold text-dark'>Kids Hooded Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Spa Towels/Spa Towel 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#SpaTowel" className='text-decoration-none slider-link fw-bold text-dark'>Spa Towels</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/towels/Gym Towels/Gym Towel 5.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#GymTowel" className='text-decoration-none slider-link fw-bold text-dark'>Gym Towels</Link>
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
