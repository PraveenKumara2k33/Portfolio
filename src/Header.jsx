import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling

const Header = () => {
  const expand = 'lg';

  return (
    <Navbar expand={expand} className="mb-3 bg-cyan-50 font-semibold">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../img/logo1.png" alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className='bg-cyan-50 font-serif'>
            <Offcanvas.Title className='HeaderHeading' id={`offcanvasNavbarLabel-expand-${expand}`}>
              Portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='bg-cyan-50'>
            <Nav className="ms-auto">
              {/* Added Home link */}
              <Nav.Link as={Link} smooth to="/" className="me-3 navbtn">Home</Nav.Link> {/* Home link */}
              <Nav.Link as={Link} smooth to="/#about" className="me-3 navbtn">About</Nav.Link>
              <Nav.Link as={Link} smooth to="/#qualification" className="me-3 navbtn">Qualification</Nav.Link>
              <Nav.Link as={Link} smooth to="/#skills" className="me-3 navbtn">Skills</Nav.Link>
              <Nav.Link as={Link} smooth to="/#projects" className="me-3 navbtn">Projects</Nav.Link>
              <Nav.Link as={Link} smooth to="/#publication" className="me-3 navbtn">Publication</Nav.Link>
              <Nav.Link as={Link} smooth to="/#footer" className="me-3 navbtn">Footer</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
