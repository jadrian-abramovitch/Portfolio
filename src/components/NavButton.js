import propTypes from 'prop-types';

const NavButton = ({ name, color, link, backgroundColor }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
        border: 'none',
        cursor: 'pointer',
        padding: '2px',
        textDecoration: 'none'
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
