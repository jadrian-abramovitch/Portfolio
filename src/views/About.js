import TextBox from '../components/TextBox';
import reactIcon from '../static/reactIcon.png';
import aboutMeText from '../static/text/aboutMe';

const imgStyle = {
    width: '160px',
    height: '160px'
};

const About = () => {
    return(
        <div class style={aboutTableStyle}>
            <div class='grid-item' >
                <img src={reactIcon} alt={'React Icon'} style={imgStyle} />
            </div>
            <div class='grid-item' >
                <TextBox text={aboutMeText()}/>
            </div>
        </div>
    );
};

const aboutTableStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridRow: '1',
    alignItems: 'center',
    gridTemplateColumns: '1fr 3fr',
    padding: '20px'
};

export default About;