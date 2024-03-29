import newLinkedin from "../static/newLinkedin.png";
import github from "../static/github.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#C44B4F",
    borderRadius: "8px",
  };

  const isDesktop = window.screen.width >= 1000;

  return (
    <div className="absolute-flex-footer" style={{ padding: "10px" }}>
      <footer style={footerStyle}>
        <div className="grid-container">
          <div className="grid-item">
            <a href="/" style={{ color: "black", textDecoration: "none" }}>
              <h4>Jadrian Abramovitch</h4>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.linkedin.com/in/jadrian-abramovitch-62bba5180">
              <img src={newLinkedin} style={linkedInStyle} alt={"LinkedIn"} />
            </a>
          </div>
          {isDesktop && (
            <>
              <div className="grid-item">
                <a href="https://github.com/jadrian-abramovitch/">
                  <img src={github} style={githubStyle} alt={"github"} />
                </a>
              </div>
              <div className="grid-item">
                <h4>
                  <a href="mailto:jmabramo@uwaterloo.ca" style={linkStyle}>
                    jmabramo@uwaterloo.ca
                  </a>
                </h4>
              </div>
            </>
          )}
        </div>
      </footer>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
};
const linkedInStyle = {
  width: "25px",
  height: "25px",
};
const githubStyle = {
  width: "75px",
  height: "50px",
};

export default Footer;
