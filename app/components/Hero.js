"use client"
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
        // You can add options here
        duration: 1500,
    });
}, []);
  return (
    <>
      <Container fluid className='hero-slider px-0'>
        <Carousel>
          <Carousel.Item>
            <img src='/images/hero-bg.webp' alt='hero' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="9" md="10" data-aos="zoom-in">
                  <h1 className='fw-bold mb-3'>Origo Business Services</h1>
                  <p>At Origo, we blend tradition and innovation in textiles with sustainable coal energy, delivering superior quality in every fiber and energy solution. Join us in building a world where industry and environment thrive together</p>
                  <Link href={'/downloads'} className='hero-btn1 btn'>Downloads <i className="bi bi-download ms-2"></i></Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/textile-slider.webp' alt='textile' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9" data-aos="zoom-in">
                  <h1 className='fw-bold mb-3'>Origo Textiles</h1>
                  <h3>Responsibly Sourced, Expertly Crafted</h3>
                  <p>Responsibly Sourced, Expertly CraftedWe source the finest materials globally to create textiles that embody quality and sustainability.</p>
                  <Link href={'/textiles'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/coal-slider.webp' alt='coal' className="img-fluid hero-slider-img" />
            <Carousel.Caption>
              <Row className="justify-content-center text-center text-white">
                <Col lg="8" md="9" data-aos="zoom-in">
                  <h1 className='fw-bold mb-3'>Origo Coal</h1>
                  <h3>Powering Progress, Powering Oppertunities</h3>
                  <p>We source our coal responsibly, ensuring dependable energy solutions that support both industry and environmental stewardship.</p>
                  <Link href={'/coalEnergy'} className='hero-btn1 btn'>Learn More</Link>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    </>
  )
}

export default Hero;
