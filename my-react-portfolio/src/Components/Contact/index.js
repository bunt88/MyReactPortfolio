import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <Form className="contact">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          style={{ background: "#003452", color: "aliceblue" }}
          type="email"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          style={{ background: "#003452", color: "aliceblue" }}
          type="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{ background: "#003452", color: "aliceblue" }}
          as="textarea"
          placeholder="Enter Message Here"
          rows={3}
        />
      </Form.Group>
      <Col xs="auto">
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Col>
    </Form>
  );
}

export default Contact;
