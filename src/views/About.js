import TextBox from '../components/TextBox';
import TwoTruths from '../components/TwoTruths';
import selfie from '../static/selfie.jpg';
import {aboutMe, aboutMeDetails} from '../static/text/aboutMe';

const imgStyle = {
    width: '160px',
    height: '213px'
};

const About = () => {
    const isDesktop = window.screen.width >= 1280;

    return(
        <>
            <TextBox>
                {isDesktop &&
                    <div style={aboutTableStyle}>
                        <div className="grid-item">
                            <img src={selfie} alt={'React Icon'} style={imgStyle} />
                        </div>
                        <div className="grid-item">
                            <h3>
                                {aboutMe()}
                            </h3>
                        </div>
                    </div>}
                {!isDesktop &&
                    <>
                        <img src={selfie} alt={'React Icon'} style={imgStyle} /><h3>
                            {aboutMe()}
                        </h3>
                    </>}
            </TextBox>
            <TextBox>
                <h3>
                    {aboutMeDetails()}
                </h3>
            </TextBox>
            <TwoTruths />
        </>
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