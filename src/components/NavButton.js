import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const NavButton = ({ name, color, link, backgroundColor, scrollTo }) => {
    const location = useLocation();
    const [isHover, setIsHover] = useState(false);
    let history = useHistory();

    const getButtonColor = () => {
        if (isHover) {
            return '#CBCDCB';
        }
        return location.pathname.includes(name.toLowerCase()) ? '#CBCDCB': backgroundColor;
    }

    var buttonStyle = {
        backgroundColor: getButtonColor(),
        color: color,
        cursor: 'pointer',
        padding: '4px',
        textDecoration: 'none',
        borderRadius: '4px',
        border: '2px solid black',
        height: '30px'
    };
    const onClickScroll = () => {
        history.push('/');
        document.getElementById(scrollTo).scrollIntoView();
    };

    const isLink = !!link;

    return(
        <div>
            {isLink && 
            <button className='nav-button' style={buttonStyle} href={link} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <h3 style={{margin: '0px'}}>
                    {name} 
                </h3>
            </button> }
            {!isLink && 
            <button className='nav-button' style={buttonStyle} onClick={onClickScroll} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <h3 className='test123' style={{margin: '0px'}}>
                    {name} 
                </h3> 
            </button> }
        </div>
    );
};

NavButton.defaultProps = {
    name: 'Btn',
};

NavButton.propTypes = {
    name: propTypes.string,
    color: propTypes.string,
    link: propTypes.string,
    backgroundColor: propTypes.string,
};

export default NavButton;
