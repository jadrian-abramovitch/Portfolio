import propTypes from 'prop-types';

const TextBox = ({ children, text, color }) => {
    const divStyle = {
        backgroundColor: color,
        margin: '20px',
        borderRadius: '8px',
        padding: '10px',
    };

    return(
        <h5 style={divStyle}>
            {children}
        </h5>
    );
};

TextBox.defaultProps = {
    text: 'Lorem Ipsum',
    color: '#CBCDCB',
};

TextBox.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
};



export default TextBox;