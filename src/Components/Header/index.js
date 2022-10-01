import React from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar>
      <Container className="nav-container">
        <NavbarBrand className="brand" href="/">
          Courtney Bunting
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar-collapse">
          <Nav className="nav">
            <Nav.Link
              style={{ color: "aliceblue", fontSize: "20px" }}
              href="/Portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              style={{ color: "aliceblue", fontSize: "20px" }}
              href="/Resume"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              style={{ color: "aliceblue", fontSize: "20px" }}
              href="/Contact"
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
