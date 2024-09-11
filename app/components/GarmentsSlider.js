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
                                            slidesPerView: 4,
                                            spaceBetween: 40,
                                        },
                                    }}
                                    // pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women T-Shirts/Women T Shirts 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenTShirts" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s T-Shirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Hoodies/Women Hoodies 4.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenHoodies" className='text-decoration-none slider-link fw-bold text-dark'> Women&apos;s Hoodies</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Skirts/Women Skirts 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenSkirts" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Skirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Trousers/Women Trousers 3.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenTrousers" className='text-decoration-none slider-link fw-bold text-dark'> Women&apos;s Trousers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Denim Jeans/Women Denim Jeans 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenDenimJeans" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Denim Jeans</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Tank Tops/Women Tank Tops 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenTankTops" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Tank Tops</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Shorts/Women Shorts 5.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenShorts" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Shorts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Women Garments/Women Swimsuits/Women Swimsuits 3.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#WomenSwimsuits" className='text-decoration-none slider-link fw-bold text-dark'>Women&apos;s Swimsuits</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Children T-Shirts/Children T Shirts 4.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChildrenTShirts" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s T-Shirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Chilcren Polo Shirts/Children Polo Shirts 4.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChilcrenPoloShirts" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Polo Shirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Children Pajamas/Children Pajamas 6.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChildrenPajamas" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Pajamas</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Children Romper/Children Rompers 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChildrenRomper" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Rompers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Children Skirts/Children Skirts 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChildrenSkirts" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Skirts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Children Garments/Children Shorts/Children Shorts 3.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ChildrenShorts" className='text-decoration-none slider-link fw-bold text-dark'>Children&apos;s Shorts</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens T Shirts/Men T Shirts 6.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensTShirts" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s T-Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens Polo Shirts/Men Polo Shirts 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensPoloShirts" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Polo Shirt</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens Nightwear/Men Nightwear 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensNightwear" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Nightwears</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens Trousers/Men Trousers 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensTrousers" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Trousers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens Denim Jeans/Mens Denim Jeans 1.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensDenimJeans" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Denim Jeans</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Card.Img className='expertise-card-img rounded' variant="top" src="/images/garments/Mens Garments/Mens Hooded Jackets/Mens Hooded Jackets 2.webp" />
                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MensHoodedJackets" className='text-decoration-none slider-link fw-bold text-dark'>Men&apos;s Hooded Jackets</Link>
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
