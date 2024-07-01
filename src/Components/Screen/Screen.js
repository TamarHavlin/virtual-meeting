import { connect } from 'react-redux';
import './Screen.css';
import Parties from '../Parties/Parties';
import DiscussionDetails from '../DiscussionDetails/discussionDetails';
import DiscussionManager from '../DiscussionManager/discussionManager';
import Settings from '../Settings/settings';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function mapStateToProps(state) {
    return {
        selectionScreen: state.selectionScreen,
    };
}

export default connect(mapStateToProps)(function Screen(props) {
    const { selectionScreen } = props;

    const viewContainer = () => {
        switch (selectionScreen) {
            case 'Parties':
                return <Parties />;
            case 'DiscussionDetails':
                return <DiscussionDetails />;
            case 'DiscussionManager':
                return <DiscussionManager />;
            case 'Settings':
                return <Settings />;
            default: return <Parties />;
        }
    };

    return (
        <div className="App-screen">
            <div className="header displayCenter">
                <Header/>
            </div>
            <div className="container">
                {viewContainer()}
            </div>
            <div className="footer displayCenter">
                <Footer/>
            </div>
        </div>
    );
});
