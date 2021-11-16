import propTypes from 'prop-types';

const TextBox = ({ text, color }) => {
    const divStyle = {
        backgroundColor: color,
        margin: '20px'
    };

    return(
        <div style={divStyle}>
            {text}
        </div>
    );
};

TextBox.defaultProps = {
    text: 'Lorem Ipsum',
    color: 'gray'
};

TextBox.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
};



export default TextBox;