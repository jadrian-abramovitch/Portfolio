import propTypes from 'prop-types';

const NavButton = ({ name, color, link }) => {
    const buttonStyle = {
        backgroundColor: color,
        border: 'none',
        cursor: 'pointer'
    };

    const actionEvent = () => {
        alert('hi');
    };

    return(
        <button style={buttonStyle} onClick={actionEvent}>
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