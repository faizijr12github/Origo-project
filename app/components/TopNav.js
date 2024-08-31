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
                        <img loading="lazy" src='/images/origo_business_services_logo.jpg' alt='origo-logo' className='img-fluid rounded' width={80} />
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
                                    <img loading="lazy" src='/images/origo_business_services_logo.jpg' alt='origo-logo' className='img-fluid rounded' width={80} />
                                </Navbar.Brand>
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1">
                            <Nav.Link href="/"><i className="bi bi-house-fill"></i></Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/textiles">Textiles</Nav.Link>
                            <Nav.Link href="/coalEnergy">Coal Energy</Nav.Link>
                        </Nav>
                        <Nav.Link href="/contact" className='contact-btn'><i className="bi bi-person-fill me-1"></i>Contact</Nav.Link>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default TopNav;
