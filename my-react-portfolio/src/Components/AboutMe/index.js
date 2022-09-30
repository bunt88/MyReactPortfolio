import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import myImage from "../../assets/images/IMG_3982 (2).jpg";
// import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col>
          <center>
            <img src={myImage} className="my-image" alt="developer" />
          </center>
          <div>
            <h1 className="name">Courtney Bunting</h1>
            <subtitle className="subtitle">Full Stack Developer</subtitle>
          </div>

          <div className="textBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
