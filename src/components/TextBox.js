import propTypes from 'prop-types';

const TextBox = ({ text, color }) => {
    const divStyle = {
        backgroundColor: color,
        margin: '10px',
        borderRadius: '8px',
        padding: '10px'
    };

    return(
        <h5 style={divStyle}>
            {text}
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