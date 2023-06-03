import React from 'react';
import './css/pages.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

const About = () => {
  return (
    <div className="py-5">
      <Container style={{fontSize:18}}>
        <Row>
          <Col>
            <h2>À propos de nous</h2>
            <p>Bienvenue sur notre application de recherche de restaurants ! Nous sommes dédiés à vous aider à trouver le restaurant parfait en fonction de votre emplacement et de vos préférences.</p>
            <p>Notre application utilise la dernière technologie pour vous fournir des informations précises et à jour sur les restaurants locaux. Nous travaillons avec les restaurants les mieux notés de votre région pour vous assurer d'avoir accès aux meilleures options de restauration.</p>
            <p>Notre équipe est composée de passionnés de cuisine qui aiment explorer de nouveaux restaurants et de nouvelles cuisines. Nous nous engageons à vous aider à trouver le restaurant parfait pour toute occasion, que ce soit un dîner romantique pour deux ou un repas familial convivial.</p>
            <p>Nous croyons que la restauration est plus que de manger. C'est une expérience qui rassemble les gens et crée des souvenirs. C'est pourquoi nous sommes dédiés à vous aider à découvrir de nouvelles et passionnantes options de restauration.</p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default About;
