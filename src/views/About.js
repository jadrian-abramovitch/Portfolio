import TextBox from '../components/TextBox';
import selfie from '../static/selfie.jpg';
import aboutMeText from '../static/text/aboutMe';

const imgStyle = {
    width: '160px',
    height: '213px'
};

const About = () => {
    return(
        <TextBox>
        <div class style={aboutTableStyle}>
            <div class='grid-item' >
                <img src={selfie} alt={'React Icon'} style={imgStyle} />
            </div>
            <div class='grid-item' >
                 {aboutMeText()} 
            </div>
        </div>
        </TextBox>
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