"use client"
import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import HomeTextilesHeroSlider from '../components/HomeTextilesHeroSlider'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhiteFabricSlider from '../components/WhiteFabricSlider';
import DyedFabricsSlider from '../components/DyedFabricsSlider';
import PrintFabricsSlider from '../components/PrintFabricsSlider';
import SheetSetsSlider from '../components/SheetSetsSlider';
import QuiltCoverSlider from '../components/QuiltCoverSlider';
import ComforterSetsSlider from '../components/ComforterSetsSlider';
import MattressCoverSlider from '../components/MattressCoverSlider';
import ValancesSlider from '../components/ValancesSlider';
import CurtainsSlider from '../components/CurtainsSlider';
import IroningBoardsSlider from '../components/IroningBoardsSlider';
import IndividualFlatSheetSlider from '../components/IndividualFlatSheetSlider';
import FittedSheetSlider from '../components/FittedSheetSlider';
import PillowCaseSlider from '../components/PillowCaseSlider';
import HotelSheetingSlider from '../components/HotelSheetingSlider';

const HomeTextiles = () => {
    useEffect(() => {
        AOS.init({
            // You can add options here
            duration: 1300,
        });
    }, []);
    return (
        <>
            <Container fluid className='py-5'>
                <h2 className='text-center fw-bold mb-3'>Home Textiles</h2>
                <p className='text-center'>Elegance and comfort woven into every thread of our home textiles
                </p>
                <Row className='justify-content-center'>
                    <Col lg="9" className='mt-5'><HomeTextilesHeroSlider /></Col>
                </Row>
            </Container>
            {/* Fabrics */}
            {/* White Fabrics */}
            <Container>
                <h2 className='text-center pt-5'><span className='bg-black text-white px-5 py-3 rounded-5 shadow sevillana-regular'>Fabrics</span></h2>
                <h2 id='whiteFabrics' className='pt-5 text-center fst-italic text-orange sevillana-regular'>White Fabrics</h2>
            </Container>
            <WhiteFabricSlider/>
            {/* Dyed Fabrics */}
            <Container>
                <h2 id='DyedFabrics' className='text-center fst-italic text-orange'>Dyed Fabrics</h2>
            </Container>
            <DyedFabricsSlider/>
            {/* Print fabrics */}
            <Container>
                <h2 id='PrintFabrics' className='text-center fst-italic text-orange'>Print Fabrics</h2>
            </Container>
            <PrintFabricsSlider/>
            {/* Made ups */}
            {/* Sheet Sets */}
            <Container>
                <h2 className='text-center pt-5 sevillana-regular' data-aos="zoom-out"><span className='bg-black text-white px-5 py-3 rounded-5 shadow'>Made ups</span></h2>
                <h2 id='SheetSets' className='pt-5 text-center fst-italic text-orange'>Sheet Sets</h2>
            </Container>
            <SheetSetsSlider/>
            {/* Quilt Cover Sets */}
            <Container>
                <h2 id='QuiltCovers' className='text-center fst-italic text-orange'>Quilt Cover Sets</h2>
            </Container>
            <QuiltCoverSlider/>
            {/* comforter sets */}
            <Container>
                <h2 id='ComforterSets' className='text-center fst-italic text-orange'>Comforter Sets</h2>
            </Container>
            <ComforterSetsSlider/>
            {/* mattress covers */}
            <Container>
                <h2 id='MattressCover' className='text-center fst-italic text-orange'>Mattress Covers</h2>
            </Container>
            <MattressCoverSlider/>
            {/* valances */}
            <Container>
                <h2 id='Valance' className='text-center fst-italic text-orange'>Valances</h2>
            </Container>
            <ValancesSlider/>
            {/* Curtains */}
            <Container>
                <h2 id='Curtains' className='text-center fst-italic text-orange'>Curtains</h2>
            </Container>
            <CurtainsSlider/>
            {/* Ironing boards */}
            <Container>
                <h2 id='IroningBoard' className='text-center fst-italic text-orange'>Ironing Boards</h2>
            </Container>
            <IroningBoardsSlider/>
            {/*  Individual Flat Sheets */}
            <Container>
                <h2 id='IndividualFlatSheets' className='text-center fst-italic text-orange'>Individual Flat Sheets</h2>
            </Container>
            <IndividualFlatSheetSlider/>
            {/* Fitted sheets */}
            <Container>
                <h2 id='FittedSheets' className='text-center fst-italic text-orange'>Fitted Sheets</h2>
            </Container>
            <FittedSheetSlider/>
            {/* pillow cases */}
            <Container>
                <h2 id='PillowCases' className='text-center fst-italic text-orange'>Pillow Cases</h2>
            </Container>
            <PillowCaseSlider/>
            {/* Hotel sheeting */}
            <Container>
                <h2 id='HotelSheeting' className='text-center fst-italic text-orange'>Hotel Sheeting</h2>
            </Container>
            <HotelSheetingSlider/>
        </>
    )
}

export default HomeTextiles
