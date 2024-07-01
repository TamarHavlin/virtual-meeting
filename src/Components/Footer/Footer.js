import { useEffect, useState } from 'react'
import { AiFillVideoCamera } from "react-icons/ai";
import Button from '@mui/material/Button';
import { FaMicrophone } from "react-icons/fa";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";
import { PiVideoCameraSlashFill } from "react-icons/pi";
import resources from './resources';
import './Footer.css';

function Footer() {
    const [microphone, setMicrophone] = useState(false);
    const [camera, setCamera] = useState(false);
    const [sharedScreen, setSharedScreen] = useState(false);
    const [time, setTime] = useState(0);
    // מתודה שמעדכנת את זמן השיחה
    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => setTime(time + 1), 10);
        return () => clearInterval(intervalId);
    }, [time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    const setMicrophoneState = () => {
        setMicrophone(!microphone);
        // on off microphone
    };

    const setCameraState = () => {
        setCamera(!camera);
        //on off camera
    };

    const setSharedScreenState = () => {
        setSharedScreen(!sharedScreen);
        // start or stop shared screen
    };

    return (
        <>
            <div className="timer displayCenter">
                <Button className="buttonLive" variant="contained">
                    {resources.live}
                </Button>
                <div>
                    {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
                </div>
            </div>
            <div className="meetingButtonsWrapper">
                <Button className="meetingButton" variant="contained" rounded
                    onClick={setSharedScreenState}
                    endIcon={sharedScreen ? <MdOutlineScreenShare /> : <MdOutlineStopScreenShare />
                    }>
                    {resources.sharedScreen}
                </Button>
                <Button className="meetingButton" variant="contained" rounded
                    onClick={setMicrophoneState}
                    endIcon={microphone ? <FaMicrophone /> : <BiSolidMicrophoneOff />
                    }>
                    {resources.microphone}
                </Button>
                <Button className="meetingButton" variant="contained" rounded
                    onClick={setCameraState}
                    endIcon={camera ? <AiFillVideoCamera /> : <PiVideoCameraSlashFill />
                    }>
                    {resources.camera}
                </Button>
            </div>
        </>
    );
}

export default Footer;
