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
                <Container>
                    <Row className='justify-content-center mt-5' data-aos="fade-up">
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
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Home Textiles</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Fabrics</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Made ups</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Garments</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Women&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Children&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Men&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Towels</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
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
                <Container>
                    <Row className='justify-content-center mt-5' data-aos="fade-up">
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
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Home Textiles</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Fabrics</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Made ups</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Garments</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Women&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Children&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Men&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Towels</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
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
                <Container>
                    <Row className='justify-content-center mt-5' data-aos="fade-up">
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
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Home Textiles</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Fabrics</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Made ups</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Garments</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Women&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Children&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Men&apos;s </Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/garments/garments.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Towels</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
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
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/coal-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>Pakistan</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/coal-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>South Africa</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/coal-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i className="bi bi-flag me-2"></i>Indonesia</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/coal-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold"><i classNa="bi bi-flag me-2"></i>Afghanistan</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand.
                                            </Card.Text>
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
