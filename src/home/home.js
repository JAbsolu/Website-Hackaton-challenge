import { Container } from "react-bootstrap";
import HomeNav from '../home/components/nav/home-nav';
import HomeMain from '../home/components/main/main';
import HomeFooter from "./components/footer/home-footer";

const Home = () => {
    return (
        <Container>
            <HomeNav/>
            <HomeMain/>
            <HomeFooter/>
        </Container>
    );
};

export default Home;