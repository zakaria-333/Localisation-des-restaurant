import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Nous Contacter</h2>
            <p>Vous avez une question ou un commentaire ? Nous aimerions avoir de vos nouvelles !</p>
            <p>Pour nous contacter, veuillez envoyer un e-mail à l'adresse suivante :</p>
            <p><a href="mailto:contact@myapp.com">contact@myapp.com</a></p>
          </Col>
          <Col md={6}>
            <h2>Restons en Contact</h2>
            <p>Pour rester informé de nos dernières nouvelles et offres, connectez-vous avec nous sur les réseaux sociaux :</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
              <li className="list-inline-item"><a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com"><i className="bi bi-instagram"></i></a></li>
            </ul>
            <p>Ou visitez-nous à notre adresse :</p>
            <p>123 Rue Principale<br />Ville, Pays 12345</p>
            <p>Téléphone : 555-1234</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;