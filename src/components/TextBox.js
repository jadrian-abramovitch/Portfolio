import propTypes from 'prop-types';
import { useState } from 'react';

const TextBox = ({ children, text, color }) => {
    const [isHover, setIsHover] = useState(false);

    const divStyle = {
        backgroundColor: color,
        margin: '20px',
        borderRadius: '8px',
        padding: '5px',
        border: isHover ? '2px solid black' : '0px' 
    };

    return(
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={divStyle}>
            {children}
        </div>

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