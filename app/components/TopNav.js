"use client";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TopNav() {
    const expand = 'md'; // Set the desired breakpoint

    return (
        <Navbar expand={expand} bg="none" variant="light" className="px-5 shadow-sm">
            <Container fluid>

                <Link href="/" passHref>
                    <Navbar.Brand>
                        <img loading="lazy" src='/images/origo_business_services_logo.webp' alt='origo-logo' className='img-fluid rounded' width={80} />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <Link href="/" passHref>
                                <Navbar.Brand>
                                    <img loading="lazy" src='/images/origo_business_services_logo.webp' alt='origo-logo' className='img-fluid rounded' width={80} />
                                </Navbar.Brand>
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1">
                            <Nav.Link href="/"><i className="bi bi-house-fill"></i></Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <NavDropdown title="Textiles" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/textiles">
                                    All Textiles
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/homeTextiles">Home Textiles</NavDropdown.Item>
                                <NavDropdown.Item href="/garments">
                                    Garments
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/towels">Towels</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Coal Energy" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/coalEnergy">
                                    All Coal Markets
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/pakCoal">Pakistan</NavDropdown.Item>
                                <NavDropdown.Item href="/saCoal">South Africa</NavDropdown.Item>
                                <NavDropdown.Item href="/indonesiaCoal">Indonesia</NavDropdown.Item>
                                <NavDropdown.Item href="/afgCoal">Afghanistan</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link href="https://www.linkedin.com/company/origo-business-services" target='blank' className='text-dark me-3'><i className="bi bi-linkedin fs-3"></i></Link>
                            <Nav.Link href="/contact" className='contact-btn'><i className="bi bi-person-fill me-1"></i>Contact</Nav.Link>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default TopNav;
