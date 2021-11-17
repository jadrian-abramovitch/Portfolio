import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

const NavButton = ({ name, color, link }) => {
    const buttonStyle = {
        backgroundColor: color,
        border: 'none',
        cursor: 'pointer'
    };

    return(
        <Link to={link}>
            <button style={buttonStyle}>
                {name}
            </button>
        </Link>
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
};

export default NavButton;