import * as React from 'react'
import '../styles/header.css'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar className="color-nav">
            <Container fluid>
                <Navbar.Brand className="brand-nav ml-2" href="/">Brian Yen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-nav mx-2" href="/about">About</Nav.Link>
                        <Nav.Link className="text-nav mx-2" href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header