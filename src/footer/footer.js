import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function MainFooter() {
  return (
    <footer className="main-footer bg-dark py-4 mt-2">
      <Container className='main-footer-container'>
        <Row>
          <Col className='main-footer-col'>
            <ul className="list-inline text-center">
              <li className="list-inline-item mx-3">
                <a href="https://www.instagram.com/sociallyimmersed/" target="_blank">
                  <FaInstagram size={25} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="https://www.youtube.com/channel/UC84cpb9Baqx4IxyXPmjL3kA" target="_blank">
                  <FaYoutube size={25} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="https://www.tiktok.com/404?fromUrl=/sociallyimmersed" target="_blank">
                  <FaTiktok size={25} color="#fff" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="https://www.linkedin.com/company/socially-immersed/" target="_blank">
                  <FaLinkedin size={25} color="#fff" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center text-white mt-3">
            <p className='text-light'>Copyright &copy; 2023 Socially Immersed LLC <br/> All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MainFooter;
