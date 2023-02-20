import { Container } from "react-bootstrap";
import SigninMain from "./components/main/main";
import AuthorizationNav from "../signup/components/nav/signup-nav";
const SigninPage = () => {
    return (
        <Container>
          <AuthorizationNav/>
          <SigninMain/>
        </Container>
    );
};

export default SigninPage;