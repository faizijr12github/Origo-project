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
            {/* pakCoal */}
            <Container className='mt-5'>
                <Container>
                    <h2 className='text-orange text-center fst-italic fs-1'>
                        Coal
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
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container rounded-5'>
                                            <Card.Img className='expertise-card-img rounded-5' variant="top" src="/images/coal/coal.jpg" />
                                        </div>
                                        <Card.Body className='px-0 mt-1 text-center'>
                                            <Card.Title className="card-title fw-bold">Coal</Card.Title>
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
        </>
    )
}

export default SaCoalSlider
