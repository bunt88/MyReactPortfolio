import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <Container className="resume-container">
      <Row>
        <h1>Resume</h1>
      </Row>

      <Row className="skills">
        <Col>
          Front-End Technologies
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Frameworks (Bootstrap)</li>
            <li>Responsive Web Design</li>
          </ul>
        </Col>
        <Col>
          Back-End Technologies
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB and Mongoose</li>
            <li>API's (web, third-party, RESTful, server-side)</li>
          </ul>
        </Col>
        <Col>
          Education
          <ul>
            <li>University of Utah</li>
            <li style={{ fontSize: "20px", fontStyle: "italic" }}>
              Full Stack Boot Camp - Certification
            </li>
            <li>
              <br></br>
            </li>
            <li>Broadview Entertainment Arts University</li>
            <li style={{ fontSize: "20px", fontStyle: "italic" }}>
              Bachelor's of Fine Arts : Game Art
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
