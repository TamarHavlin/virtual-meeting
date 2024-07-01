import { MdFiberManualRecord } from "react-icons/md";
import { ImEnlarge2 } from "react-icons/im";
import './Header.css';
import resources from './resources';

function Header() {
    return (
        <>
            <div className="record displayCenter">
                <div className="icon">
                    {resources.recorded}
                    <MdFiberManualRecord className="recorded" />
                </div>
                <div className="icon">
                    <ImEnlarge2 />
                </div>
            </div>
            <div className="title">
                <div>
                    {resources.title}
                </div>
                <div>
                    {resources.details}
                </div>
            </div>
        </>
    );
}

export default Header;
