import { Container } from "react-bootstrap";
import SigninForm from "../signin-form/form";

const SigninMain = () => {
    return (
        <Container className="mt-5 signin-container">
            <SigninForm/>
        </Container>
    )
}

export default SigninMain;