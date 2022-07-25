import { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const DropDownMenu = ({labels, scrollTos}) => {
    const buttonStyle = {
        backgroundColor: '#607D86',
        color: 'black',
        cursor: 'pointer',
        padding: '4px',
        textDecoration: 'none',
        borderRadius: '4px',
        border: '2px solid black',
        height: '40px',
        width: '100px',
        display: 'subgrid'
    };

    const [isDropped, setIsDropped] = useState(false);
    let history = useHistory();

    const onClickScroll = (scrollTo) => {
        history.push('/');
        document.getElementById(scrollTo).scrollIntoView();
    };

    return(
        <div className="dd-wrapper">
            <button onClick={() => setIsDropped(!isDropped)} style={buttonStyle}>MENU</button>
            {isDropped &&
            labels.map((label, i) => {
                return (<div key={label}>
                    <button style={buttonStyle} onClick={() => {onClickScroll(scrollTos[i])}}>{label}</button>
                </div>)
            })
            }
        </div>
    );
};

DropDownMenu.prototype = {
    labels: propTypes.arrayOf(propTypes.string),
    scrollTos: propTypes.arrayOf(propTypes.string)
}

DropDownMenu.defaultProps = {
    labels: ['test1', 'test2'],
    scrollTos: ['projects', 'blog']
}

export default DropDownMenu;