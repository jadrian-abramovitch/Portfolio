import linkedin from '../static/linkedin.png';
import github from '../static/github.png';

const imgStyle = {
    width: '150px',
    height: '128px'
};

const Contact = () => {
    return(
        <div>
            <h1>
                Contact
            </h1>
            <h3> Email: jmabramo@uwaterloo.ca </h3>
            <a href={'https://www.linkedin.com/in/jadrian-abramovitch-62bba5180'}> <img src={linkedin} alt={'LinkedIn'} style={imgStyle} /> </a>
            <a href={'https://github.com/jadrian-abramovitch/'}> <img src={github} alt={'GitHub'} style={imgStyle} /></a>
        </div>
    );
};

export default Contact;