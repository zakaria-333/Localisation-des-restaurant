import React from 'react';
import './css/pages.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom bg-grey py-3">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>Nous contacter</h5>
            <p>123 Rue Principale<br />Ville, Pays 12345<br />(123) 456-7890<br />info@monappli.com</p>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Suivez-nous</h5>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com"><i className="bi bi-instagram"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
