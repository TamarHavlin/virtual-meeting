import { FaMicrophone } from "react-icons/fa";
import './Parties.css';
import data from '../../data'
import resources from './resources'

const participant = (participantType) => {
    //  מספר שופטים מקסימלי להצגה :4, ומספר משתתפים מקסימלי 5
    const maxUsers = participantType === 'participant' ? 5 : 4;
    const participants = data[participantType].slice(0, data[participantType].length > maxUsers ? maxUsers - 1 : maxUsers);
    const showMore = data[participantType].slice(data[participantType].length > maxUsers ? maxUsers - 1 : maxUsers);

    const temp = <div className={`${participantType}Wrapper`}>
        {showMore.length > 0 &&
            <div className={participantType === 'participant' ? 'participant' : 'judge'} style={{ backgroundImage: `url('https://png.pngtree.com/png-clipart/20191122/original/pngtree-vector-plus-icon-png-image_5169416.jpg')` }}>
                <div className="participantDetails">
                    {resources.participantCount(showMore.length).lable}
                </div>
            </div>
        }
        {participants.map(p =>
            <div className={participantType === 'participant' ? 'participant' : 'judge'}
                style={{ backgroundImage: `url(${p.profile})` }}>
                <div className="participantRule">
                    {p.rule}
                </div>
                <div className="participantDetails">
                    <FaMicrophone />
                    <div>
                        <div className="rule">{p.rule}</div>
                        <div>{p.name}</div>
                    </div>
                </div>
            </div>
        )}
    </div>
    return temp;
};

function Parties() {
    return (
        <div className="app">
            {participant('judges')}
            {participant('participant')}
        </div>
    );
}

export default Parties;
