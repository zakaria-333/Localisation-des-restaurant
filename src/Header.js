import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
// import logo from './images/logo.svg';
import './css/pages.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="px-4 bg-grey justify-content-between">
      <Navbar.Brand href="#">
        <img src="https://banner2.cleanpng.com/20180511/qkw/kisspng-monumental-restaurant-logo-cafe-5af54f48cfbed6.7759304615260260568509.jpg" alt="" width="70" height="40" className="rounded-circle" />
        <span className="ml-2">EatOut</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/about">À propos</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
