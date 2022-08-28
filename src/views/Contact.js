import linkedin from "../static/linkedin.png";
import github from "../static/github.png";
import TextBox from "../components/TextBox";

const imgStyle = {
  width: "150px",
  height: "128px",
};

const Contact = () => {
  const linkTextStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div id="contact">
      <TextBox>
        <h1>Contact</h1>
        <a href={"https://www.linkedin.com/in/jadrian-abramovitch-62bba5180"}>
          {" "}
          <img
            className="contact-link"
            src={linkedin}
            alt={"LinkedIn"}
            style={imgStyle}
          />{" "}
        </a>
        <a href={"https://github.com/jadrian-abramovitch/"}>
          {" "}
          <img
            className="contact-link"
            src={github}
            alt={"GitHub"}
            style={imgStyle}
          />
        </a>
        <h2>
          <a
            className="contact-link"
            href="mailto:jmabramo@uwaterloo.ca"
            style={linkTextStyle}
          >
            {" "}
            jmabramo@uwaterloo.ca{" "}
          </a>
        </h2>
      </TextBox>
    </div>
  );
};

export default Contact;
