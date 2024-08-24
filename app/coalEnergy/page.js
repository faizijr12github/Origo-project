import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CoalEnergy = () => {
    return (
        <>
            {/* Coal-Energy-hero */}
            <Container fluid className='coal-energy-hero'>
                <Row className='d-flex flex-column align-items-center justify-content-center text-center h-700 pb-4'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Coal Energy</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services is a dynamic company dedicated to providing comprehensive marketing, procurement and business development solutions across various industries. Our expertise spans Textiles, Pharmaceutical Packaging, Coal Energy, Real Estate, and Creative Media projects. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <h2 className='fw-bold text-center py-5'>Coal Energy</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>Origo Business Services is a key player in the coal energy sector, providing reliable sourcing and procurement services for various grades of coal, including GCV/GAR from 3400 up to 7500. We cater to the energy needs of major markets in Pakistan, China, and beyond, ensuring a steady supply of high-quality coal from trusted sources in regions like South Africa, Indonesia, and Afghanistan.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>Our commitment to quality, timely delivery, and competitive pricing makes Origo a preferred partner for businesses seeking dependable coal energy solutions.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/coal.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="coal-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5 text-center">
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 2600 - 3400</button>
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 3400 - 4200</button>
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 4200 - 5000</button>
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 5000 - 5800</button>
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 5800 - 6500</button>
                            <button className="btn btn-outline-light fw-bold m-3"><span className="me-5">GAR</span> 6500 - 7500</button>
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h3 className="text-orange fw-bold text-center pt-3 pb-5">Coal Product Range</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="py-5 coal-last-sec">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <h3 className="text-orange fw-bold text-center my-3">Coal Markets</h3>
                            <div className='coal-sec-3'>
                                <p>Origo excels in sourcing and supplying coal from key regions to ensure a steady and reliable energy supply. Our coal sourcing services cover:</p>
                                <p><span className='fw-bold'><i class="bi bi-flag-fill me-1"></i>Pakistan:</span> Local sourcing for efficient energy solutions.</p>
                                <p><span className='fw-bold'><i class="bi bi-flag-fill me-1"></i>South Africa:</span> High-quality coal with reliable delivery.</p>
                                <p><span className='fw-bold'><i class="bi bi-flag-fill me-1"></i>Afghanistan:</span> Strategic sourcing from a key region.
                                </p>
                                <p><span className='fw-bold'><i class="bi bi-flag-fill me-1"></i>Indonesia:</span> Competitive pricing and quality assurance.</p>
                            </div>
                        </Col>
                        <Col lg="5" className="mt-5 text-center">
                        <img src='/images/coal-img-2.png' alt='coal' className='img-fluid float-animation' />
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default CoalEnergy
