import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavButton = ({ name, color, link, backgroundColor }) => {
    const location = useLocation();
    const [isHover, setIsHover] = useState(false);
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
        border: '1px solid black'
    };

    return(
        <h5>
            <a style={buttonStyle} href={link} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                {name} 
            </a>
        </h5>
    );
};

NavButton.defaultProps = {
    name: 'Btn',
    link: '/'
};

NavButton.propTypes = {
    name: propTypes.string,
    color: propTypes.string,
    link: propTypes.string,
    backgroundColor: propTypes.string,
};

export default NavButton;
