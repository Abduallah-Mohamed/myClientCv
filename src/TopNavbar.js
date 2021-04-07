import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./styles/Navbar.css";

export default class TopNavbar extends Component {
    render() {
        return (
            <div className="TopNavbar">
                <Navbar bg="light" expand="lg" id="TopNavbar">
                    <Navbar.Brand id="brand" href="#home">
                        Abdu-Allah
                    </Navbar.Brand>

                    <Navbar.Toggle
                        style={{
                            backgroundColor: "white",
                            marginRight: "30px",
                        }}
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" id="links">
                            <Nav.Link className="links" href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="links" href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link className="links" href="#services">
                                Services
                            </Nav.Link>
                            <Nav.Link className="links" href="#portoflio">
                                Projects
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
