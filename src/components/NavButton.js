import propTypes from 'prop-types';

const NavButton = ({ name, color }) => {
    return(
        <button style={{backgroundColor: color}}>
            {name}
        </button>
    );
};

NavButton.defaultProps = {
    name: 'Btn'
};

NavButton.propTypes = {
    name: propTypes.string,
    color: propTypes.string,
};

export default NavButton;