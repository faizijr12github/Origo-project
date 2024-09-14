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
import Image from 'next/image';

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
                                            slidesPerView: 4,
                                            spaceBetween: 40,
                                        },
                                    }}
                                // pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 6.webp"
                                                    alt="White Fabrics 6"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#whiteFabrics" className='text-decoration-none slider-link fw-bold text-dark'>White Fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Fabrics/Dyed Fabrics/Dyed Fabrics 2.webp"
                                                    alt="Dyed Fabrics 2"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#DyedFabrics" className='text-decoration-none slider-link fw-bold text-dark'>Dyed Fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Fabrics/Print Fabrics/Print Fabrics 6.webp"
                                                    alt="Print Fabrics 6"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#PrintFabrics" className='text-decoration-none slider-link fw-bold text-dark'>Print Fabrics</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Sheet Sets/Sheet Sets 3.webp"
                                                    alt="Sheet Sets 3"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#SheetSets" className='text-decoration-none slider-link fw-bold text-dark'>Sheet Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Quilt Cover Sets/Quilt Cover Sets 3.webp"
                                                    alt="Quilt Cover Sets 3"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#QuiltCovers" className='text-decoration-none slider-link fw-bold text-dark'>Quilt Cover Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Comforter Set/Comforter Sets 6.webp"
                                                    alt="Comforter Sets 6"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#ComforterSets" className='text-decoration-none slider-link fw-bold text-dark'>Comforter Sets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Mattress Cover/Mattress Covers 6.webp"
                                                    alt="Mattress Covers 6"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#MattressCover" className='text-decoration-none slider-link fw-bold text-dark'>Mattress Covers</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Valance Sheets/Valance Sheets 1.webp"
                                                    alt="Valance Sheets 1"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#Valance" className='text-decoration-none slider-link fw-bold text-dark'>Valances</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Curtains/Curtains 2.webp"
                                                    alt="Curtains 2"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#Curtains" className='text-decoration-none slider-link fw-bold text-dark'>Curtains</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Ironing Board Cover/Ironing Board Cover 3.webp"
                                                    alt="Ironing Board Cover 3"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#IroningBoard" className='text-decoration-none slider-link fw-bold text-dark'>Ironing Boards</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Individual Flat Sheets/Individual Flat Sheets 5.webp"
                                                    alt="Individual Flat Sheets 5"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#IndividualFlatSheets" className='text-decoration-none slider-link fw-bold text-dark'>Individual Flat Sheets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Fitted Sheets/Fitted Sheet 6.webp"
                                                    alt="Fitted Sheet 6"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#FittedSheets" className='text-decoration-none slider-link fw-bold text-dark'>Fitted Sheets</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Pillow Cases/Pillow Cases 2.webp"
                                                    alt="Pillow Cases 2"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#PillowCases" className='text-decoration-none slider-link fw-bold text-dark'>Pillow Cases</Link>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className='border-0 htcards' style={{ width: '100%' }}>
                                            <div className='img-container'>
                                                <Image
                                                    src="/images/Home Textiles/Madeups/Hotel Sheeting/Hotel Sheeting 2.webp"
                                                    alt="Hotel Sheeting 2"
                                                    layout="responsive"
                                                    width={100}
                                                    height={100}
                                                    loading="lazy"
                                                    className='img-fluid rounded'
                                                />

                                            </div>
                                            <Card.Body className='px-0 mt-1 text-center'>
                                                <Link href="#HotelSheeting" className='text-decoration-none slider-link fw-bold text-dark'>Hotel Sheeting</Link>
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
