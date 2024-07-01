import logo from '../../logo.png';
import Button from '@mui/material/Button';
import { RiScales3Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { connect } from 'react-redux';
import './Menu.css';
import resources from './resources'

const logOut = () => {
    console.log('close window');
};

export default connect()(function Menu(props) {
    const { dispatch } = props;

    const setSelectionScreenStore = (selectionScreen) => {
        dispatch({ type: 'SET_SELECTION_SCREEN', payload: selectionScreen })
    };

    return (
        <div className="App-menu">
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="menu">
                <Button
                    className="option"
                    rounded="true"
                    onClick={() => setSelectionScreenStore('Parties')}
                    startIcon={<MdOutlinePeopleAlt />}>
                    {resources.people}
                </Button>
                <Button
                    className="option"
                    rounded="true"
                    onClick={() => setSelectionScreenStore('DiscussionDetails')}
                    startIcon={<RiScales3Fill />}>
                    {resources.discussionDetails}
                </Button>
                <Button
                    className="option"
                    rounded="true"
                    onClick={() => setSelectionScreenStore('DiscussionManager')}
                    startIcon={<MdOutlineAdminPanelSettings />}>
                    {resources.discussionManager}
                </Button>
                <Button
                    className="option"
                    rounded="true"
                    onClick={() => setSelectionScreenStore('Settings')}
                    startIcon={<IoSettingsOutline />}>
                    {resources.settings}
                </Button>
            </div>
            <div className="logOut">
                <Button className="exiteButton" variant="contained" onClick={logOut}>
                    {resources.logOut}
                </Button>
            </div>
        </div>
    );
})

