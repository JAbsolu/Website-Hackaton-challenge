import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../../home/Images/logo.webp';
import './signup-nav.css';

const SignupNav = () => {
  return (
        <Navbar className='nav signup-nav' expand="lg">
          <Navbar.Brand href="#home" className='brand'>
            <img src={logo} className="brand-img"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-toggle'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-links-container">
              <Link className='nav-link home-link' to="/">Home</Link>
              <Link className='nav-link signin-link' to="/signin">Sign in</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
}

export default SignupNav;
