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
              <Nav.Link as={Link} smooth to="/#" className="footer-text hover:text-indigo-500">Home</Nav.Link>
              <Nav.Link as={Link} smooth to="/#qualification" className="footer-text hover:text-indigo-500">Qualification</Nav.Link>
              <Nav.Link as={Link} smooth to="/#skills" className="footer-text hover:text-indigo-500">Skills</Nav.Link>
              <Nav.Link as={Link} smooth to="/#projects" className="footer-text hover:text-indigo-500">Projects</Nav.Link>
              <Nav.Link as={Link} smooth to="/#publication" className="footer-text hover:text-indigo-500">Publications</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} xs={5}>
            <h4 className="footer-heading">About</h4>
            <p className="footer-text">
            A dedicated Software Developer skilled in building efficient, scalable, and user-friendly applications. Proficient in modern web technologies and passionate about solving complex problems with innovative solutions. Driven to create impactful software that enhances user experiences.
            </p>
          </Col>

          <Col md={4} className="colfex">
            <div className="contact-follow-wrapper">
              <div className="contact">
                <h4 className="footer-heading">Contact Us</h4>
                <p className="footer-text flex">
                  <a href="mailto:apraveenkumar720@gmail.com" className="footer-link mx-8"><img src={MailLogo} className="footer-icon h-8" alt="Mail Logo" /></a>
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
