import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">UYEN NGUYEN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="https://docs.google.com/document/d/13abW9uFe8jPw9Qd8nvKZZp3naDpZR0JnHH_PfXhU1oA/edit"
                        target="_blank">Resume
                    </Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
