import React from "react";
import "./style.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar({ onToggle }) {
    return (
        <div id="navbar-wrapper">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">UYEN NGUYEN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onToggle} /> {/* If navbar expands, the rest of the page will be blurred */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#projects-full-stack">Full Stack</NavDropdown.Item>
                            <NavDropdown.Item href="#projects-front-end">Front End</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="/pdf/resume.pdf" target="_blank">Resume</Nav.Link> */}
                        <Nav.Link href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} target="_blank">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;
