import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
// Import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const SaCoalSlider = () => {
    return (
        <>
            {/* SA Coal */}
            <Container className='mt-5'>
                <Container>
                    <h2 className='text-orange text-center fst-italic fs-1'>
                        South African Coal
                    </h2>
                </Container>
                <Container>
                    <Row className='justify-content-center mt-5'>
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
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 1.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 2.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 3.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 4.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 5.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/South Africa Coal/South Africa Coal 6.webp" />
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SaCoalSlider
