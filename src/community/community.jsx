import './community.scss';
import CommunityNav from './components/Community-nav/nav';
import MainFooter from '../footer/footer';
import Body from './components/body';

const Community = () => {
    return (
        <div>
            <CommunityNav/>
            <Body/>
            <MainFooter/>
        </div>
    )
}

export default Community;