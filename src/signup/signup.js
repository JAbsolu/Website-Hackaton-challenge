import SignupContainer from "./components/container/signup-container";
import AuthorizationNav from "./components/nav/signup-nav";
import MainFooter from "../footer/footer";

const SignUp = () => {
    return (
        <div>
            <AuthorizationNav/>
            <SignupContainer/>
            <MainFooter/>
        </div>
    )
}

export default SignUp;