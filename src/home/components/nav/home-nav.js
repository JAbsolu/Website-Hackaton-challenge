import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.webp';


const HomeNav = () => {
  return (
    <Row>
      <Col md={8} className="justicy-content-center">
      <Navbar.Brand href="#home" className='brand'><img src={logo} className="brand-img"/></Navbar.Brand>
    </Col>
      <Col md={4}>
        <Navbar className='nav' expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-toggle'/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='administrator-login' to="/signin">For Administrators</Nav.Link>
            <Nav.Link className='nav-link signin' to="/signin">Sign in</Nav.Link>
            <Nav.Link className='nav-link signup' to="/about">Sign up</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default HomeNav;
