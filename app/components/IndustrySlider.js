"use client"
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
// Import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// AOS
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const IndustrySlider = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
            {/* textile */}
            <Container className='pt-5 d-flex justify-content-center sevillana-regular' data-aos="fade-up">
                <h1 className='fw-bold fs-1 sevillana-regular'>
                    Textile Products
                </h1>
            </Container>
            <Container>
                {/* home textiles */}
                <Container>
                    <h2 className='text-orange text-center fst-italic fs-1 sevillana-regular' data-aos="fade-down">
                        Home Textiles
                    </h2>
                </Container>
                <Container className='mt-5'>
                    <Row className='justify-content-center' data-aos="fade-up" data-aos-duration="3000">
                        <Col>
                            <Swiper
                                modules={[A11y, Autoplay]}
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
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                            // pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 6.webp"
                                                    alt="White Fabric"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>White Fabrics</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Fabrics/Dyed Fabrics/Dyed Fabrics 2.webp"
                                                    alt="Dyed Fabrics"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Dyed Fabrics</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Fabrics/Print Fabrics/Print Fabrics 6.webp"
                                                    alt="Print Fabrics"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Print Fabrics</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Sheet Sets/Sheet Sets 3.webp"
                                                    alt="Sheet Sets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Sheet Sets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Quilt Cover Sets/Quilt Cover Sets 3.webp"
                                                    alt="Quilt Cover Sets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Quilt Cover Sets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Comforter Set/Comforter Sets 6.webp"
                                                    alt="Comforter Sets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Comforter Sets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Mattress Cover/Mattress Covers 6.webp"
                                                    alt="Mattress Covers"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Mattress Covers</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Valance Sheets/Valance Sheets 1.webp"
                                                    alt="Valance Sheets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Valances</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Curtains/Curtains 2.webp"
                                                    alt="Curtains"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Curtains</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Ironing Board Cover/Ironing Board Cover 3.webp"
                                                    alt="Ironing Board Cover"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Ironing Board Covers</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Individual Flat Sheets/Individual Flat Sheets 5.webp"
                                                    alt="Individual Flat Sheets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Individual Flat Sheets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Fitted Sheets/Fitted Sheet 6.webp"
                                                    alt="Fitted Sheet"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Fitted Sheets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Pillow Cases/Pillow Cases 2.webp"
                                                    alt="Pillow Cases"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Pillow Cases</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Home Textiles/Madeups/Hotel Sheeting/Hotel Sheeting 2.webp"
                                                    alt="Hotel Sheeting"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Hotel Sheeting</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
                {/* Garments */}
                <Container>
                    <h2 className='text-orange text-center fst-italic fs-1 sevillana-regular' data-aos="fade-down">
                        Garments
                    </h2>
                </Container>
                <Container className='mt-5'>
                    <Row className='justify-content-center' data-aos="zoom-in" data-aos-duration="3000">
                        <Col>
                            <Swiper
                                modules={[A11y, Autoplay]}
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
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                            // pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women T-Shirts/Women T Shirts 1.webp"
                                                    alt="Women T-Shirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s T-Shirts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Hoodies/Women Hoodies 4.webp"
                                                    alt="Women Hoodies"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Hoodies</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Skirts/Women Skirts 2.webp"
                                                    alt="Women Skirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Skirts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Trousers/Women Trousers 3.webp"
                                                    alt="Women Trousers"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Trousers</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Denim Jeans/Women Denim Jeans 2.webp"
                                                    alt="Women Denim Jeans"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Denim Jeans</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Tank Tops/Women Tank Tops 1.webp"
                                                    alt="Women Tank Tops"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Tank Tops</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Shorts/Women Shorts 5.webp"
                                                    alt="Women Shorts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Shorts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Women Garments/Women Swimsuits/Women Swimsuits 3.webp"
                                                    alt="Women Swimsuits"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Women&apos;s Swimsuits</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children T-Shirts/Children T Shirts 4.webp"
                                                    alt="Children T-Shirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s T-Shirts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children Polo Shirts/Children Polo Shirts 4.webp"
                                                    alt="Children Polo Shirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s Polo Shirts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children Pajamas/Children Pajamas 6.webp"
                                                    alt="Children Pajamas"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s Pajamas</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children Romper/Children Rompers 1.webp"
                                                    alt="Children Rompers"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s Rompers</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children Skirts/Children Skirts 2.webp"
                                                    alt="Children Skirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s Skirts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Children Garments/Children Shorts/Children Shorts 3.webp"
                                                    alt="Children Shorts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Children&apos;s Shorts</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens T Shirts/Men T Shirts 6.webp"
                                                    alt="Men T Shirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s T-Shirt</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens Polo Shirts/Men Polo Shirts 1.webp"
                                                    alt="Men Polo Shirts"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s Polo Shirt</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens Nightwear/Men Nightwear 1.webp"
                                                    alt="Men Nightwear"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s Nightwears</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens Trousers/Men Trousers 2.webp"
                                                    alt="Men Trousers"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s Trousers</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens Denim Jeans/Mens Denim Jeans 1.webp"
                                                    alt="Men's Denim Jeans"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s Denim Jeans</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/garments/Mens Garments/Mens Hooded Jackets/Mens Hooded Jackets 2.webp"
                                                    alt="Men's Hooded Jackets"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Men&apos;s Hooded Jackets</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
                {/* Towels */}
                <Container>
                    <h2 className='text-orange text-center fst-italic fs-1 sevillana-regular' data-aos="fade-down">
                        Towels
                    </h2>
                </Container>
                <Container className='mt-5'>
                    <Row className='justify-content-center' data-aos="fade-up" data-aos-duration="3000">
                        <Col>
                            <Swiper
                                modules={[A11y, Autoplay]}
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
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                            // pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Terry Towels/Terry Towels 6.webp"
                                                    alt="Terry Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Terry Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Bathrobes/Bathrobes 6.webp"
                                                    alt="Bathrobes"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Bathrobes</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Bath Towels/Bath Towels 1.webp"
                                                    alt="Bath Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Bath Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Hand Towels/Hand Towels 2.webp"
                                                    alt="Hand Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Hand Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Bath Mats/Bath Mats 5.webp"
                                                    alt="Bath Mats"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Bath Mats</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Beach Towel/Beach Towels 4.webp"
                                                    alt="Beach Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Beach Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Kids Hooded Towels/Kids Hooded Towel 4.webp"
                                                    alt="Kids Hooded Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Kids Hooded Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Spa Towels/Spa Towel 1.webp"
                                                    alt="Spa Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Spa Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className='border-0 htcards' style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/towels/Gym Towels/Gym Towel 5.webp"
                                                    alt="Gym Towels"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <p>Gym Towels</p>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* coal energy */}
            <Container>
                <Container>
                    <h1 className='fw-bold fs-1 sevillana-regular text-center'>
                        Coal Markets
                    </h1>
                </Container>
                <Container>
                    <Row className='justify-content-center mt-5' data-aos="zoom-in">
                        <Col>
                            <Swiper
                                modules={[Pagination, A11y, Autoplay]}
                                autoplay={{
                                    delay: 2000, // Delay between slides in milliseconds (3000ms = 3s)
                                    disableOnInteraction: false, // Keep autoplay running even when a slide is clicked
                                }}
                                loop={true}
                                spaceBetween={50}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Pakistan Coal/Pakistan Coal 6.webp"
                                                    alt="Pakistan Coal"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>Pakistan Coal</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/South Africa Coal/South Africa Coal 6.webp"
                                                    alt="South Africa Coal"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>South Africa Coal</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Indonesia Coal/Indonesia Coal 2.webp"
                                                    alt="Indonesia Coal"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>Indonesia Coal</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <div className='img-container rounded'>
                                                <Image
                                                    className='expertise-card-img rounded'
                                                    src="/images/Afghanistan Coal/Afghanistan Coal 1.webp"
                                                    alt="Afghanistan Coal"
                                                    width={500}
                                                    height={300}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>Afghanistan Coal</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default IndustrySlider;
