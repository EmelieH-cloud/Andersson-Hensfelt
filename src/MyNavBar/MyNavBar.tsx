import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbarstyles.css'
import Navbar from 'react-bootstrap/Navbar';
import { RxHamburgerMenu } from "react-icons/rx"; 
import { useLanguage } from '../../context/LanguageContext'

function MyNavBar() {

    // destrukturera 'language' från kontexten
    const {language} = useLanguage();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
         
      <Container>
    
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        
        {/* Anpassad hamburgermeny med RxHamburgerMenu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <RxHamburgerMenu size={30} color="black" /> 
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{language === "Svenska" ? "Hem" : "Home"}</Nav.Link>
            <Nav.Link href="#link">{language === "Svenska" ? "Om oss" : "About us"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
