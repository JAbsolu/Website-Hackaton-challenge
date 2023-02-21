import SigninMain from "./components/main/main";
import AuthorizationNav from "../signup/components/nav/signup-nav";
import MainFooter from "../footer/footer";

const SigninPage = () => {
    return (
        <div>
          <AuthorizationNav/>
          <SigninMain/>
          <MainFooter/>
        </div>
    );
};

export default SigninPage;