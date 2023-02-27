import { Container, Row, Col} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../community.css';
import cookingImg from '../images/cooking.jpg';

const Body = () => {
    return (
        <Container className="body-container">
            <Row className="mt-2">
                <Col sm={3} className="mt-4 text-dark">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3} className="mt-4">
                    <Link to="#" className="text-decoration-none">
                        <Card className="card-custom text-dark">
                            <Card.Img  src={cookingImg} alt="food img"/>
                            <Card.Body>
                              <Card.Title>Food Communities</Card.Title>
                              <Card.Text>
                                Explore food and cooking communities
                              </Card.Text>
                              <Link to="#">Explore</Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Body;