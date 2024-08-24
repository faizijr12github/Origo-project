import React from 'react';
import Link from 'next/link';
import { Col, Container, Row, Card } from 'react-bootstrap';
// Import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const IndustrySlider = () => {
    return (
        <>
            <Container>
                <Container className='pt-5 d-flex justify-content-center'>
                    <h1 className='fw-bold fst-italic fs-1'>
                        Industries
                    </h1>
                </Container>
                <Container>
                    <Row className='justify-content-center mt-5'>
                        <Col>
                            <Swiper
                                modules={[Pagination, A11y]}
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
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/textile-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold">Textiles</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                            <Link href="/textiles" className='btn btn-outline-dark'><i class="bi bi-arrow-right-circle-fill me-1"></i> Read More</Link>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/coal-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold">Coal Energy</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                            <Link href="/coalEnergy" className='btn btn-outline-dark'><i class="bi bi-arrow-right-circle-fill me-1"></i> Read More</Link>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/pharma-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold">Pharma Pakaging</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                            <Link href="/pharmaPakaging" className='btn btn-outline-dark'><i class="bi bi-arrow-right-circle-fill me-1"></i> Read More</Link>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/real-estate-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold">Real Estate</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                            <Link href="/realEstate" className='btn btn-outline-dark'><i class="bi bi-arrow-right-circle-fill me-1"></i> Read More</Link>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="expertise-card" style={{ width: '100%' }}>
                                        <div className='img-container'>
                                            <Card.Img className='expertise-card-img rounded' variant="top" src="/images/creative-media-slider.webp" />
                                        </div>
                                        <Card.Body className='px-0 mt-1'>
                                            <Card.Title className="card-title fw-bold">Creative Media</Card.Title>
                                            <Card.Text>
                                                Innovative strategies to elevate your brand and expand market reach.
                                            </Card.Text>
                                            <Link href="/creativeMedia" className='btn btn-outline-dark'><i class="bi bi-arrow-right-circle-fill me-1"></i> Read More</Link>
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
