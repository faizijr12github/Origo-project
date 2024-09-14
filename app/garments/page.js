"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import GarmentsSlider from '../components/GarmentsSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WomenTshirtSlider from '../components/WomenTshirtSlider';
import WomenHoodiesSlider from '../components/WomenHoodiesSlider';
import WomenSkirtSlider from '../components/WomenSkirtSlider';
import WomenTrouserSlider from '../components/WomenTrouserSlider';
import WomenJeansSlider from '../components/WomenJeansSlider';
import WomenTankTopSlider from '../components/WomenTankTopSlider';
import WomenShortsSlider from '../components/WomenShortsSlider';
import WomenSwimsuitSlider from '../components/WomenSwimsuitSlider';
import ChildrenPoloShirt from '../components/ChildrenPoloShirt';
import ChildrenPajamaSlider from '../components/ChildrenPajamaSlider';
import ChildrenRomperSlider from '../components/ChildrenRomperSlider';
import ChildrenSkirtsSlider from '../components/ChildrenSkirtsSlider';
import ChildrenShortSlider from '../components/ChildrenShortSlider';
import MenTshirtSlider from '../components/MenTshirtSlider';
import MenPoloShirtSlider from '../components/MenPoloShirtSlider';
import MenNightwearSlider from '../components/MenNightwearSlider';
import MenTrouserSlider from '../components/MenTrouserSlider';
import MenDenimjeanSlider from '../components/MenDenimjeanSlider';
import MenHoodedJacketSlider from '../components/MenHoodedJacketSlider';
import ChildrenTshirtSlider from '../components/ChildrenTshirtSlider';


const Garments = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
                <h2 className='text-center fw-bold mb-3'>Garments</h2>
                <p className='text-center'>Crafting garments that blend style, comfort, and quality in every stitch</p>
                <Row className='justify-content-center'>
                    <Col lg="9" className='mt-5'><GarmentsSlider /></Col>
                </Row>
            </Container>
            {/* Women */}
            {/* T-Shirts */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular'><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Women Garments</span></h2>
            </Container>
            {/* t-shirt */}
            <Container>
                <h2 id='WomenTShirts' className='pt-5 text-center fst-italic text-orange'>Women T-Shirts</h2>
            </Container>
            <WomenTshirtSlider />
            {/* Hoodies */}
            <Container>
                <h2 id='WomenHoodies' className='text-center fst-italic text-orange'>Women Hoodies</h2>
            </Container>
            <WomenHoodiesSlider />
            {/* Skirt */}
            <Container>
                <h2 id='WomenSkirts' className='text-center fst-italic text-orange'>Women Skirts</h2>
            </Container>
            <WomenSkirtSlider />
            {/* Trousers */}
            <Container>
                <h2 id='WomenTrousers' className='text-center fst-italic text-orange'>Women Trousers</h2>
            </Container>
            <WomenTrouserSlider />
            {/* Jeans */}
            <Container>
                <h2 id='WomenDenimJeans' className='text-center fst-italic text-orange'>Women Denim Jeans</h2>
            </Container>
            <WomenJeansSlider />
            {/* Tank Top */}
            <Container>
                <h2 id='WomenTankTops' className='text-center fst-italic text-orange'>Women Tank Tops</h2>
            </Container>
            <WomenTankTopSlider />
            {/* Shorts */}
            <Container>
                <h2 id='WomenShorts' className='text-center fst-italic text-orange'>Women Shorts</h2>
            </Container>
            <WomenShortsSlider />
            {/* Swimsuits */}
            <Container>
                <h2 id='WomenSwimsuits' className='text-center fst-italic text-orange'>Women Swimsuits</h2>
            </Container>
            <WomenSwimsuitSlider />
            {/* Children’s */}
            {/* T-Shirt */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-in"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Children Garments</span></h2>
                <h2 id='ChildrenTShirts' className='pt-5 text-center fst-italic text-orange'>Children T-Shirts</h2>
            </Container>
            <ChildrenTshirtSlider />
            {/* Polo Shirt */}
            <Container>
                <h2 id='ChilcrenPoloShirts' className='text-center fst-italic text-orange'>Children Polo Shirts</h2>
            </Container>
            <ChildrenPoloShirt />
            {/* Pajamas */}
            <Container>
                <h2 id='ChildrenPajamas' className='text-center fst-italic text-orange'>Children Pajamas</h2>
            </Container>
            <ChildrenPajamaSlider />
            {/* Romper */}
            <Container>
                <h2 id='ChildrenRomper' className='text-center fst-italic text-orange'>Children Rompers</h2>
            </Container>
            <ChildrenRomperSlider />
            {/* Skirts */}
            <Container>
                <h2 id='ChildrenSkirts' className='text-center fst-italic text-orange'>Children Skirts</h2>
            </Container>
            <ChildrenSkirtsSlider />
            {/* Shorts */}
            <Container>
                <h2 id='ChildrenShorts' className='text-center fst-italic text-orange'>Children Shorts</h2>
            </Container>
            <ChildrenShortSlider />
            {/* Men’s */}
            {/* Basic T-Shirt */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-in"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Men Garments</span></h2>
                <h2 id='MensTShirts' className='pt-5 text-center fst-italic text-orange'>Men T-Shirts</h2>
            </Container>
            <MenTshirtSlider />
            {/* Polo Shirt */}
            <Container>
                <h2 id='MensPoloShirts' className='text-center fst-italic text-orange'>Men Polo Shirts</h2>
            </Container>
            <MenPoloShirtSlider />
            {/* Night wears */}
            <Container>
                <h2 id='MensNightwear' className='text-center fst-italic text-orange'>Men Nightwears</h2>
            </Container>
            <MenNightwearSlider />
            {/* Trousers */}
            <Container>
                <h2 id='MensTrousers' className='text-center fst-italic text-orange'>Men Trousers</h2>
            </Container>
            <MenTrouserSlider />
            {/* Mens Denim Jeans */}
            <Container>
                <h2 id='MensDenimJeans' className='text-center fst-italic text-orange'>Men Denim Jeans</h2>
            </Container>
            <MenDenimjeanSlider />
            {/* Mens Hooded Jackets */}
            <Container>
                <h2 id='MensHoodedJackets' className='pt-5 text-center fst-italic text-orange'>Men Hooded Jackets</h2>
            </Container>
            <MenHoodedJacketSlider />
        </>
    )
}

export default Garments
