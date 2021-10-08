import React from 'react'
import './Navbar.css'
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

function navbar() {
    return (
        <div>
            <Navbar className="bg-color" variant="dark" fixed="top" expand="lg">
                <Container style={{padding: "6px 0px"}}>
                    <NavbarBrand href="/#"><h3 className="h3">START BOOTSTRAP</h3></NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-toggle"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-bar">
                        <Nav.Item>
                            <Link to="portfolio" className="nav" smooth={true} duration={100}>
                                PORTFOLIO
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="about" className="nav" smooth={true} duration={100}>
                                ABOUT
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="contact" className="nav" smooth={true} duration={100}>
                                CONTACT
                            </Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar
