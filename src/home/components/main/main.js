import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import './main.css';
import HomeSignin from "../home-signin-form/home-signin";

const HomeMain = () => {
  return (
    <Container className="home-main">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div>
            <h1 className="home-h1">Welcome to <span className="text-green">Socially Immersed</span></h1>
            <p>We are on a mission to make more Humanitarians 
              through edutainmainment and action
            </p>
          </div>
          
        </Col>
        <Col md={6} className="signin-form-container d-flex justify-content-end align-items-end">
          <HomeSignin />
        </Col>
      </Row>
    </Container>
  )
}

export default HomeMain;
