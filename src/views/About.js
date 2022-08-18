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
    <div className="page">
      <TextBox>
        {isDesktop && (
          <div id="about-me" style={aboutTableStyle}>
            <div className="grid-item">
              <img src={selfie} alt={"React Icon"} style={imgStyle} />
            </div>
            <div className="grid-item">
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
  display: "grid",
  gridAutoFlow: "column",
  gridRow: "1",
  alignItems: "center",
  gridTemplateColumns: "1fr 3fr",
  padding: "20px",
};

export default About;
