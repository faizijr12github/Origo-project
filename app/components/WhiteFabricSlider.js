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


const WhiteFabricSlider = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1400,
        });
    }, []);
    return (
        <>
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
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 1.webp"
                                            alt="White Fabrics 1"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="expertise-card" style={{ width: '100%' }}>
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 2.webp"
                                            alt="White Fabrics 2"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="expertise-card" style={{ width: '100%' }}>
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 3.webp"
                                            alt="White Fabrics 3"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="expertise-card" style={{ width: '100%' }}>
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 4.webp"
                                            alt="White Fabrics 4"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="expertise-card" style={{ width: '100%' }}>
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 5.webp"
                                            alt="White Fabrics 5"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="expertise-card" style={{ width: '100%' }}>
                                    <div className='img-container'>
                                        <img
                                            src="/images/Home Textiles/Fabrics/White Fabric/White Fabrics 6.webp"
                                            alt="White Fabrics 6"
                                            layout="responsive"
                                            loading="lazy"
                                            className='img-fluid rounded expertise-card-img'
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>


                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WhiteFabricSlider
