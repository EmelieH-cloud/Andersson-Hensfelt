import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbarstyles.css';
import Navbar from 'react-bootstrap/Navbar';
import { RxHamburgerMenu } from "react-icons/rx"; 
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

function MyNavBar() {
  // destrukturera 'language' från LanguageContext 
  const { language } = useLanguage();

  // destrukturera 'theme' från ThemeContext
  const { theme } = useTheme();

  // dynamiska css-klasser
  const navbarBg = theme === 'darkmode' ? 'dark-navbar' : 'light-navbar';
  const navLinkColor = theme === 'darkmode' ? 'text-white' : 'text-dark'; // Dynamisk klass för textfärg
  const iconColor = theme === 'darkmode' ? 'white' : 'black'; // Dynamisk färg för hamburger-ikonen

  return (
    <Navbar expand="lg" className={navbarBg}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className={`${navbarBg}`}>Hej</h1>
        </Navbar.Brand>
        
        {/* Anpassad hamburgermeny med RxHamburgerMenu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <RxHamburgerMenu size={30} color={iconColor} /> 
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={navLinkColor}>
              {language === "Svenska" ? "Hem" : "Home"}
            </Nav.Link>
            <Nav.Link href="#link" className={navLinkColor}>
              {language === "Svenska" ? "Om oss" : "About us"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
