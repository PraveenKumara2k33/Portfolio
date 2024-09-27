import { Container, Row, Col, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';  // Import HashLink for smooth scrolling
import MailLogo from './assets/skills/mail.svg';
import InstagramLogo from './assets/skills/instagram.svg';
import LinkedinLogo from './assets/skills/linkedin.svg';
import GitHubLogo from './assets/skills/github.svg';
import './Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="footer-section Footer" id='footer'>
      <Container>
        <Row className="mb-8">
          <Col md={4} xs={5}>
            <h4 className="footer-heading">NavBar</h4>
            <Nav className="footer-nav">
              <Nav.Link as={Link} smooth to="/#" className="footer-link">Home</Nav.Link>
              <Nav.Link as={Link} smooth to="/#qualification" className="footer-link">Qualification</Nav.Link>
              <Nav.Link as={Link} smooth to="/#skills" className="footer-link">Skills</Nav.Link>
              <Nav.Link as={Link} smooth to="/#projects" className="footer-link">Projects</Nav.Link>
              <Nav.Link as={Link} smooth to="/#publication" className="footer-link">Publications</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} xs={5}>
            <h4 className="footer-heading">About</h4>
            <p className="footer-text">
              Dynamic software developer with over a year of experience in front-end, WordPress, and Java technologies. 
              Completed a Java Trainee program at Cognizant, strengthening skills in HTML, CSS, JavaScript, SQL, Core Java, 
              JSP, Servlets, and Spring Boot. At Senchola Technology Solutions, contributed to responsive apps and optimized 
              restaurant operations, improving efficiency and cutting costs. Skilled in creating user-focused designs and innovative
              solutions. Ready to apply technical expertise to new challenges.
            </p>
          </Col>

          <Col md={4} className="colfex">
            <div className="contact-follow-wrapper">
              <div className="contact">
                <h4 className="footer-heading">Contact Us</h4>
                <p className="footer-text flex">
                  <img src={MailLogo} className="footer-icon h-8" alt="Mail Logo" />
                  <a href="mailto:apraveenkumar720@gmail.com" className="footer-link">apraveenkumar720@gmail.com</a>
                </p>
              </div>
              <div className="follow">
                <h4 className="footer-heading">Follow Us</h4>
                <div className="footer-icons">
                  <a href="https://www.instagram.com/apk2k/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramLogo} className="footer-icon h-8" alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/praveenkumar2k33/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} className="footer-icon h-8" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/PraveenKumara2k33" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubLogo} className="footer-icon h-8" alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <div className="copyright">
              <p>&copy; {year} PraveenKumar A. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
