import TextBox from "../components/TextBox";
import TwoTruths from "../components/TwoTruths";
import selfie from "../static/selfie.jpg";
import { aboutMe, aboutMeDetails } from "../static/text/aboutMe";

const About = () => {
  const isDesktop = window.screen.width >= 1000;
  const imgStyle = {
    width: isDesktop ? "230px" : "160px",
    height: isDesktop ? "300px" : "213px",
  };

  return (
    <div id="about-me">
      <TextBox>
        {isDesktop && (
          <div style={aboutTableStyle}>
            <div>
              <img src={selfie} alt={"React Icon"} style={imgStyle} />
            </div>
            <div>
              <h3>{aboutMe()}</h3>
            </div>
          </div>
        )}
        {!isDesktop && (
          <>
            <img src={selfie} alt={"React Icon"} style={imgStyle} />
            <h3>{aboutMe()}</h3>
          </>
        )}
      </TextBox>
      <TextBox>
        <h3>{aboutMeDetails()}</h3>
      </TextBox>
      <TwoTruths />
    </div>
  );
};

const aboutTableStyle = {
  padding: "2px",
};

export default About;
