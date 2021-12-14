import propTypes from 'prop-types';

const NavButton = ({ name, color, link, backgroundColor }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
        cursor: 'pointer',
        padding: '4px',
        textDecoration: 'none',
        borderRadius: '4px',
        border: '1px solid black'
    };

    return(
        <h5>
            <a style={buttonStyle} href={link}>
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
