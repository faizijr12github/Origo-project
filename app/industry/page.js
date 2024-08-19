"use client"
import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Industry = () => {
    return (
        <>
            <Container fluid className='industry-hero pb-5'>
                <Row className='h-600 d-flex flex-column align-items-center justify-content-center text-center'>
                    <Col lg="6" md="8">
                        <h1 className='fw-bold'>Industry</h1>
                        <div className='hero-p mt-3'>
                            <p className='mt-4'>Origo Business Services provides comprehensive solutions across a diverse range of industries, including Textiles, Coal Energy, Pharma Packaging, Real Estate, and Creative Media. Our expertise spans these sectors, enabling us to deliver tailored services that meet the unique needs of each industry.</p>
                            <p>Whether it&rsquo;s driving innovation in textile production, ensuring efficient coal sourcing, supplying high-quality pharmaceutical packaging, managing real estate projects, or producing impactful creative media, Origo is your trusted partner for success in any field.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='fw-bold text-center mb-5'>Textiles</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>Origo Business Services is a trusted partner in the textile industry, offering a broad range of solutions tailored to meet the needs of global markets.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>We specialize in sourcing and supplying high-quality home textiles, apparels, leather goods, and towels. Our deep industry knowledge and extensive supplier network ensure that we deliver products that meet the highest standards of quality and compliance.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>Whether you&rsquo;re looking to enhance your product offerings or enter new markets, Origo provides the expertise and resources needed to succeed in the competitive world of textiles.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/textiles.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='textile-sec2'>
                <Container>
                    <Row className='justify-content-around align-items-center'>
                        <Col lg="5" className='mb-5'>
                            <img src='/images/textile-img2.png' alt='textile' className='img-fluid rounded' />
                        </Col>
                        <Col lg="5" className='mb-5'>
                            <h3 className='text-orange fw-bold mb-3'>Textiles Product Range</h3>
                            <p>Our extensive experience in the textile industry allows us to deliver exceptional products that meet global standards. We provide:</p>
                            <Accordion className="dark-accordion mt-4">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Home Textiles</Accordion.Header>
                                    <Accordion.Body>
                                        High-quality fabrics and Made Ups for household use.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Garments</Accordion.Header>
                                    <Accordion.Body>
                                        Stylish and durable casual & Sports knitted clothing items.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Towels</Accordion.Header>
                                    <Accordion.Body>
                                        Soft and absorbent towels and bathrobes.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* coal */}
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
            {/* Pharma Packaging */}
            <Container className='mt-5'>
                <h2 className='fw-bold text-center mb-5 pt-5'>Pharma Packaging</h2>
                <Row className='justify-content-around align-items-center'>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/pharma-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services offers specialized solutions in pharmaceutical packaging, ensuring that your products meet the highest standards of safety and quality.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>We supply a range of essential packaging materials, including aluminum seals and caps, rubber stoppers, and glass vials, sourced from reputable manufacturers with the necessary certifications and social compliances.</p>
                        <p className='mt-3'><i class="bi bi-check-circle-fill me-3"></i>Our focus on precision, compliance, and innovation helps pharmaceutical companies maintain the integrity of their products while enhancing their market appeal.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Packaging Product Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>Origo specializes in high-quality pharmaceutical packaging solutions to ensure product safety and compliance. Our offerings include:</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Aluminium Seals & Caps:</span> Durable and secure sealing solutions.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Rubber Stoppers:</span> Reliable closures for various vial types.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Glass Vials:</span> Premium containers for pharmaceutical products.
                                </p>
                            </div>
                        </Col>
                        <Col lg="5" className="mt-5">
                            <img src='images/pharma-img2.png' alt='pharma' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* Real Estate */}
            <Container className='real-estate mt-5'>
                <h2 className='fw-bold text-center py-5'>Real Estate</h2>
                <Row className='justify-content-around align-items-center'>

                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services provides expert solutions in the real estate sector, catering to both residential and commercial projects.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>We specialize in developing, marketing, and managing high-value properties that meet the diverse needs of our clients. From luxury residential developments to strategic commercial investments, our comprehensive services ensure that each project is executed with precision and tailored to maximize returns.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>Origo&rsquo;s deep market insights and commitment to excellence make us a trusted partner in the dynamic real estate landscape.</p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/real-estate-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <img src='images/real-estate-img2.png' alt='pharma' className='img-fluid' />
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Real Estate Projects Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>We offer comprehensive real estate services, catering to both residential and commercial projects. Our expertise includes:</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Residential Projects:</span> Developing and marketing high-value residential properties.</p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Commercial Projects:</span> Providing strategic solutions for commercial real estate investments.</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
            {/* Creative Media */}
            <Container className='real-estate mt-5'>
                <h2 className='fw-bold text-center py-5'>Creative Media</h2>
                <Row className='justify-content-around align-items-center'>

                    <Col lg="5" className='mb-5'>
                        <p><i class="bi bi-check-circle-fill me-3"></i>
                            Origo Business Services excels in the creative media industry, offering innovative solutions that bring ideas to life.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>Our expertise spans across various media formats, including short films, game shows, and movies for change, allowing us to craft compelling content that resonates with audiences. We collaborate with talented creators and utilize cutting-edge technology to produce media that not only entertains but also inspires and drives social impact.</p>
                        <p className='mt-1'><i class="bi bi-check-circle-fill me-3"></i>With Origo, your creative vision is transformed into powerful stories that connect with people and leave a lasting impression.
                        </p>
                    </Col>
                    <Col lg="5" className='mb-5'>
                        <img src='/images/creative-media-img1.png' alt='textile' className='img-fluid rounded' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pharma-sec2 py-5 media">
                <Container>
                    <Row className="justify-content-around align-items-center pb-5">
                        <Col lg="5" className="mt-5">
                            <img src='/images/creative-media-img2.png' alt='pharma' className='img-fluid rounded' />
                        </Col>
                        <Col lg="5" className="mt-5">
                            <h2 className='fw-bold text-orange mb-5'>Media Product Range</h2>
                            <div className='pharma-sec2-box text-white'>
                                <p>Origo is committed to creating impactful and engaging media content and carrying out noticeable media projects for socio-economic change. 
                                </p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Movies for Change</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Short Films projects</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Game Shows</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Magazine Programs</span></p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Music -</span>  Lyrics & Compositions </p>
                                <p><span className='fw-bold text-orange'><i class="bi bi-check-circle-fill me-1"></i>Branding -</span>  Development, Promotion, Management, Extensions, Recovery</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Industry;
