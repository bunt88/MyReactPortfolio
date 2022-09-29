import React from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar
      style={{
        backgroundColor: "#003452",
        height: "150px",
        fontSize: "30px",
        color: "#5BB7EB",
      }}
    >
      <Nav className="navbar">
        <Container style={{ color: "#5BB7EB" }}>
          <NavbarBrand
            href="/"
            className="p-4"
            style={{ fontSize: "50px", color: "#0084D1" }}
          >
            Courtney Bunting
          </NavbarBrand>
          <Nav.Link href="#" style={{ color: "#5BB7EB" }}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="#" style={{ color: "#5BB7EB" }}>
            Resume
          </Nav.Link>
          <Nav.Link href="#" style={{ color: "#5BB7EB" }}>
            Contact Me
          </Nav.Link>
        </Container>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
