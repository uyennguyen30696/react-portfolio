import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div id="navbar">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home-page">UYEN NGUYEN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home-page">Home</Nav.Link>
                        <Nav.Link href="#portfolioFullStack-page">Portfolio</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/13abW9uFe8jPw9Qd8nvKZZp3naDpZR0JnHH_PfXhU1oA/edit"
                            target="_blank">Resume
                        </Nav.Link>
                        <Nav.Link href="#contact-page">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
