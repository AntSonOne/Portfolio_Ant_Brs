import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="6" className="footer-copywright">
            <span>Développement web & logiciel</span>
          </Col>
          <Col md="6" className="footer-copywright">
            <span>Copyright {year} © </span>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer