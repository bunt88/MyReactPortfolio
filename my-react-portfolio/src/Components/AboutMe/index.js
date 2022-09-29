import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <Container fluid className="center" style={{ background: "#C8E2E8" }}>
      <Row className="justify-content-center" style={{}}>
        <Image fluid />
      </Row>

      <Row className="align-text-center" style={{}}>
        <h1>Courtney Bunting</h1>
        <h3>Full Stack Developer</h3>
      </Row>
      <Row className="justify-content-center" style={{}}>
        <p>info about Courtney Bunting</p>
      </Row>
    </Container>
  );
};

export default AboutMe;
