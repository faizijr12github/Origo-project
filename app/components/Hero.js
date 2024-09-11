"use client"
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
// Import Swiper core and required modules
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
// AOS
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <Container fluid className='px-0'>
        <Row className='justify-content-center'>
          <Col>
            <Swiper
              modules={[A11y, Autoplay, Navigation, Scrollbar]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={50}
              navigation={true} // Adds navigation controls (prev/next buttons)
              scrollbar={{ draggable: true }} // Adds draggable scrollbar
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <Row className='justify-content-center home-hero'>
                  <Col lg="7" md="10" data-aos="zoom-out" className='px-5'>
                    <h1 className='fw-bold mb-3 text-white'>Origo Business Services</h1>
                    <div>
                      <p className='text-white'>At Origo, we blend tradition and innovation in textiles with sustainable coal energy, delivering superior quality in every fiber and energy solution. Join us in building a world where industry and environment thrive together</p>
                      <Link href={'/downloads'} className='hero-btn1 btn'>Downloads <i className="bi bi-download ms-2"></i></Link>
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row className='justify-content-center home-hero1'>
                  <Col lg="7" md="10" data-aos="zoom-out" className='px-5'>
                    <h1 className='fw-bold mb-3 text-white'>Origo Textiles</h1>
                    <h3 className='fw-bold mb-3 text-white'>Responsibly Sourced, Expertly Crafted</h3>
                    <div>
                      <p className='text-white'>Responsibly Sourced, Expertly CraftedWe source the finest materials globally to create textiles that embody quality and sustainability</p>
                      <Link href={'/textiles'} className='hero-btn1 btn'>Learn More</Link>
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row className='justify-content-center home-hero2'>
                  <Col lg="7" md="10" data-aos="zoom-out" className='px-5'>
                    <h1 className='fw-bold mb-3 text-white'>Origo Coal</h1>
                    <h3 className='fw-bold mb-3 text-white'>Powering Progress, Powering Opportunities</h3>
                    <div>
                      <p className='text-white'>We source our coal responsibly, ensuring dependable energy solutions that support both industry and environmental stewardship.</p>
                      <Link href={'/coalEnergy'} className='hero-btn1 btn'>Learn More</Link>
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
