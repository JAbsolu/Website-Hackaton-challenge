import { Container } from "react-bootstrap";
import HomeNav from '../home/components/nav/home-nav';
import HomeMain from '../home/components/main/main';
import HomeFooter from "./components/footer/home-footer";
import './home.css';

const Home = () => {
    return (
        <div>
            <HomeNav/>
            <HomeMain/>
            <HomeFooter/>
        </div>
    );
};

export default Home;