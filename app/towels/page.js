"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import TowelSlider from '../components/TowelsSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TerryTowelSlider from '../components/TerryTowelSlider';
import BathRobesSlider from '../components/BathRobesSlider';
import BathTowelsSlider from '../components/BathTowelsSlider';
import HandTowelsSlider from '../components/HandTowelsSlider';
import BathMattSlider from '../components/BathMattSlider';
import BeachTowelSlider from '../components/BeachTowelSlider';
import KidsHoodedTowelSlider from '../components/KidsHoodedTowelSlider';
import SpaTowelSlider from '../components/SpaTowelSlider';
import GymTowelSlider from '../components/GymTowelSlider';


const Towel = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
                <h2 className='text-center fw-bold mb-3'>Towels</h2>
                <p className='text-center'>Softness and durability in every towel, designed to elevate your everyday
                </p>
                <Row className='justify-content-center'>
                    <Col lg="9" className='mt-5'><TowelSlider /></Col>
                </Row>
            </Container>
            {/* Towels */}
            {/* Terry Towels */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular'><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Towels</span></h2>
                <h2 id='TerryTowels' className='pt-5 text-center fst-italic text-orange'>Terry Towels</h2>
            </Container>
            <TerryTowelSlider />
            {/* Bathrobes */}
            <Container>
                <h2 id='Bathrobes' className='text-center fst-italic text-orange'>Bathrobes</h2>
            </Container>
            <BathRobesSlider />
            {/* Bath Towel */}
            <Container>
                <h2 id='BathTowels' className='text-center fst-italic text-orange'>Bath Towels</h2>
            </Container>
            <BathTowelsSlider />
            {/* Hand Towel */}
            <Container>
                <h2 id='HandTowels' className='text-center fst-italic text-orange'>Hand Towels</h2>
            </Container>
            <HandTowelsSlider />
            {/* Bath Mat */}
            <Container>
                <h2 id='BathMats' className='text-center fst-italic text-orange'>Bath Mats</h2>
            </Container>
            <BathMattSlider />
            {/* Beach Towel */}
            <Container>
                <h2 id='BeachTowel' className='text-center fst-italic text-orange'>Beach Towels</h2>
            </Container>
            <BeachTowelSlider />
            {/* Kids Hooded Towel */}
            <Container>
                <h2 id='KidsHoodedTowel' className='text-center fst-italic text-orange'>Kids Hooded Towels</h2>
            </Container>
            <KidsHoodedTowelSlider />
            {/* Spa Towel */}
            <Container>
                <h2 id='SpaTowel' className='text-center fst-italic text-orange'>Spa Towels</h2>
            </Container>
            <SpaTowelSlider />
            {/* Gym Towel */}
            <Container>
                <h2 id='GymTowel' className='text-center fst-italic text-orange'>Gym Towels</h2>
            </Container>
            <GymTowelSlider />
        </>
    )
}

export default Towel
