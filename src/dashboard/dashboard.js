import { Container } from "react-bootstrap";
import DashboardFooter from "./components/footer/footer";
import DashboardMain from "./components/footer/footer";
import DashboardNav from "./components/nav/nav";

const Dashboard = () => {
    return (
        <Container>
            <DashboardNav />
            <DashboardMain />
            <DashboardFooter />
        </Container>
    )
};

export default Dashboard;