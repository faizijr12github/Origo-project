import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const WhyOrigo = () => {
  useEffect(() => {
    AOS.init({
      // You can add options here
      duration: 1300,
    });
  }, []);
  return (
    <>
      <Container fluid className='why-origo-bg py-5'>
        <h1 data-aos="fade-down" className='text-center text-orange fw-bold mt-5 sevillana-regular'>Why Choose Origo <i className="bi bi-patch-question-fill"></i></h1>
        <Container>
          <Row className='justify-content-around align-items-center'>
            <Col data-aos="fade-right" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Comprehensive-Solutions.png"
                    alt="Comprehensive Solutions"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Comprehensive Solutions</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We offer end-to-end services tailored to your specific needs, ensuring a seamless experience from start to finish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col data-aos="fade-left" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/global-reach.png"
                    alt="Global Reach"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Global Reach</h2></Card.Title>
                  <Card.Text className='text-white'>
                    Our extensive network and strategic partnerships enable us to facilitate international business opportunities and market expansion.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row data-aos="fade-up" className='justify-content-around align-items-center'>
            <Col className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Quality-Assurance.webp"
                    alt="Quality Assurance"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Quality Assurance</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We are committed to delivering the highest standards in every project, ensuring excellence and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Innovation-Creativity.webp"
                    alt="Innovation Creativity"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Innovation and Creativity</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We prioritize pioneering new ideas and innovative solutions to keep your business ahead of the curve.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='justify-content-around align-items-center'>
            <Col data-aos="fade-right" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Strategic-Partnerships.png"
                    alt="Strategic Partnerships"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                    className='rounded-circle'
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Strategic Partnerships</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We build and nurture mutually beneficial relationships to drive sustainable growth and success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col data-aos="fade-left" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Industry-Expertise.webp"
                    alt="Industry Expertise"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Industry Expertise</h2></Card.Title>
                  <Card.Text className='text-white'>
                    Our team of professionals has in-depth knowledge and experience across multiple industries, providing you with expert insights and guidance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row data-aos="fade-up" className='justify-content-around align-items-center'>
            <Col className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Customer-Centric-Approach.webp"
                    alt="Customer-Centric Approach"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Customer-Centric Approach</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We focus on understanding your unique needs and delivering personalized services that add real value to your business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Sustainable-Practices.png"
                    alt="Sustainable Practices"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Sustainable Practices</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We uphold social and environmental responsibility, working with suppliers who have valid certifications and social compliances required for global trade.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='justify-content-around align-items-center'>
            <Col data-aos="fade-right" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Connecting-Buyers.webp"
                    alt="Connecting Buyers"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Connecting Buyers with Unfamiliar Suppliers</h2></Card.Title>
                  <Card.Text className='text-white'>
                    We bridge the gap between buyers and new suppliers, facilitating trustworthy and beneficial partnerships.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col data-aos="fade-left" className='mt-5' lg="5">
              <Card className='border-0 bg-black text-center'>
                <div className='img-container rounded-circle float-animation'>
                  <img
                    src="/images/Price-Negotiations.png"
                    alt="Price Negotiations"
                    width={100}
                    height={100}
                    layout="fixed"
                    loading="lazy"
                  />
                </div>

                <Card.Body>
                  <Card.Title><h2 className='fw-bold text-orange'>Excellent Price Negotiations</h2></Card.Title>
                  <Card.Text className='text-white'>
                    Our expertise in negotiation ensures you get the best prices without compromising on quality or service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default WhyOrigo
