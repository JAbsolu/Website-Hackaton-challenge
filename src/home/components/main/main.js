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
            <h3 className="home-h3">
              <b>The Platform for Leaders, Managers, and Founders.</b>
              <br/>
              We are on a mission to make more Humanitarians 
              through Edutainmainment and Action
            </h3>
          </div>
          
        </Col>
        <Col md={6} className="signin-form-container d-flex justify-content-end align-items-end">
          <HomeSignin />
        </Col>
      </Row>

      <Row className="mt-5 p-3 home-row-2">
        <Col className="p-2" sm={4}>
            <h2 className="home-h2 text-left mb-5">About us</h2>
            <p>
              Socially Immersed is on a mission to create more humanitarians through
              Education and Entertainment and action. Regardless of background, job title, 
              skin color, etc., we have something to get you immersed. Ready for action? 
              Join today and become THE Humanitarian.
            </p>
        </Col>
        <Col className="p-2" sm={4}>
          <h2 className="home-h2 text-left mb-5">Our Specialities</h2>
          <p>
            Our Socialties are sustainability, homelessness, nonprofit, consulting, 
            social good, social causes, social impact, strategy , water access, 
            corporate social responsibility, humanitarian, and media
          </p>
        </Col>
        <Col className="p-2" sm={4}>
          <h2 className="home-h2 text-left mb-5">Our Previous Works</h2>
          <p>
          Our previous work includes running an online school, consulting, 
          hosting a podcast, leading experiential learning for 42 students, 
          and launching Humanitarian Task forces.
          </p>
        </Col>
      </Row>
      
    </Container>
  )
}

export default HomeMain;
