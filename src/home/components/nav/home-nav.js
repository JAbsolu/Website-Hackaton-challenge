import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#" className="nav-link">About us</Link>
          <Link href="#" className="nav-link">Cook and consider</Link>
          <NavDropdown title="Sign In" id="basic-nav-dropdown">
            <Link to="../../../signin/signin" className="dropdown-item">Sign in</Link>
            <Link to="../../../signup/signup" className="dropdown-item">Sign up</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomeNav;