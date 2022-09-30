import React from "react";
import comingSoon from "../../assets/images/coming soon.jpg";
import DNDRightHere from "../../assets/images/DND Right Here.png";
import MedTracker from "../../assets/images/MedTracker_Image.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Naviagation from "../components/Navbar";

const Portfolio = () => {
  return (
    <Container className="portfolio-container">
      <Row className="portfolio-row">
        <Card className="portfolio-card">
          <Card.Img src={MedTracker} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>Med Tracker App</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>

        <Card className="portfolio-card">
          <Card.Img src={DNDRightHere} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>DND Right Here App</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>

        <Card className="portfolio-card">
          <Card.Img src={comingSoon} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>Mint</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>

        <Card className="portfolio-card">
          <Card.Img src={comingSoon} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>

        <Card className="portfolio-card">
          <Card.Img src={comingSoon} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>

        <Card className="portfolio-card">
          <Card.Img src={comingSoon} className="portfolio-image" />
          <Card.Body className="portfolio-body">
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text></Card.Text>
            <a href="https://github.com/bunt88" target="blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/courtney-bunting-1b121451/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Portfolio;
