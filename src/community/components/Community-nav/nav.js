import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.webp';
import { FaUserFriends } from 'react-icons/fa';
import './nav.css';

const CommunityNav = () => {
  return (
        <Navbar className='nav justify-content-between' expand="lg">
          <Navbar.Brand href="/" className='brand'>
            <img src={logo} className="brand-img"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-toggle'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link className='nav-link community-nav-link' to="/communities"><span><FaUserFriends className='nav-icon'/>Communities</span></Link>
              <Link className='nav-link signin' to="/signin">Sign in</Link>
              <Link className='nav-link signup' to="/signup">Join now</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
}

export default CommunityNav;
