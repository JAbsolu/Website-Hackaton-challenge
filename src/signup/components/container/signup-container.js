import { Container } from "react-bootstrap";
import SignUpForm from "../signup/form";
import './signup-container.css';

const SignupContainer = () => {
    return (
        <Container className="form-container">
            <SignUpForm/>
        </Container>
    )
};

export default SignupContainer;