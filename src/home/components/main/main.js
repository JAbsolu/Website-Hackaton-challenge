import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import './main.css';
import HomeSignin from "../home-signin-form/home-signin";
import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
    <Container className="home-main">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div>
            <h1 className="home-h1">Welcome to <span className="text-green">Socially Immersed</span></h1>
            <h3 className="home- home-h3-light">
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
            <h3 className="home-h3 text-left mb-4">About us</h3>
            <p>
              Socially Immersed is on a mission to create more humanitarians through
              Education and Entertainment and action. Regardless of background, job title, 
              skin color, etc., we have something to get you immersed. Ready for action? 
              Join today and become THE Humanitarian.
            </p>
        </Col>
        <Col className="p-2" sm={4}>
          <h3 className="home-h3 text-left mb-4">Our Specialities</h3>
          <p>
            Our Socialties are sustainability, homelessness, nonprofit, consulting, 
            social good, social causes, social impact, strategy , water access, 
            corporate social responsibility, humanitarian, and media
          </p>
        </Col>
        <Col className="p-2" sm={4}>
          <h3 className="home-h3 text-left mb-4">Our Previous Works</h3>
          <p>
            Our previous work includes running an online school, consulting, 
            hosting a podcast, leading experiential learning for 42 students, 
            and launching Humanitarian Task forces.
          </p>
        </Col>
      </Row>
      {/* <Row className="home-row-3 mt-1">
        <Col md={6}>
          <h3 className="home-h3">Contact us</h3>
          <Link to="mailto:info@sociallyimmersed.com" target='_blank'> info@sociallyimmersed.com</Link> 
          <h3 className="home-h3-light">
            306 Inner Campus Dr P.O Box 7951 <br/>
            Austin, Texas, 78713
          </h3>
        </Col>
      </Row> */}
    </Container>
  )
}

export default HomeMain;
