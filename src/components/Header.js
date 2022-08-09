import NavButton from "./NavButton";
import DropDownMenu from "./DropDownMenu";
import logo from "../static/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const isDesktop = window.screen.width >= 1000;
  let history = useHistory();
  const onClickScroll = () => {
    history.push("/");
    document
      .getElementById("header-space-holder")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const buttonStyle = {
    padding: "0px",
    backgroundColor: "#C44B4F",
    border: "0px",
    cursor: "pointer",
  };

  return (
    <div style={divStyle}>
      <header style={{ borderRadius: "8px" }}>
        <div className="grid-container">
          <div className="grid-item">
            <button onClick={onClickScroll} style={buttonStyle}>
              <img src={logo} alt={"logo"} style={logoStyle} />
            </button>
          </div>
          {isDesktop && (
            <>
              <div className="grid-item">
                <NavButton
                  name={"Projects"}
                  color={"black"}
                  backgroundColor={"#607D86"}
                  scrollTo={"projects"}
                />
              </div>
              <div className="grid-item">
                <NavButton
                  name={"Blog"}
                  color={"black"}
                  backgroundColor={"#607D86"}
                  scrollTo={"blog"}
                />
              </div>
              <div className="grid-item">
                <NavButton
                  name={"Contact"}
                  color={"black"}
                  backgroundColor={"#607D86"}
                  scrollTo={"contact"}
                />
              </div>
            </>
          )}
          {!isDesktop && (
            <>
              <div className="grid-item">
                <DropDownMenu
                  labels={["Projects", "Blog", "Contract"]}
                  scrollTos={["projects", "blog", "contact"]}
                />
              </div>
            </>
          )}
        </div>
      </header>
      <div className="header-space-holder" id="header-space-holder"></div>
    </div>
  );
};

const divStyle = {
  padding: "10px",
};

const logoStyle = {
  width: "130px",
  height: "125px",
};

export default Header;
