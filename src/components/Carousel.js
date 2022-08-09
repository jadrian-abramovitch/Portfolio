import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import TextBox from "../components/TextBox";

import "../styles/Carousel.css";

export const CarouselItem = ({ name, width, description, img }) => {
  const textStyle = {
    whiteSpace: "normal",
    fontSize: "18px",
  };

  const isDesktop = window.screen.width >= 1000;

  const projectUrl = {
    "Find Me A Team!": "https://github.com/jadrian-abramovitch/FindMeATeam",
    "NHL Stats": "https://github.com/jadrian-abramovitch/NHL-Scraper",
    "Connect 4": "https://github.com/jadrian-abramovitch/Connect4",
  };

  const tableStyle = {
    display: "grid",
    gridAutoFlow: "column",
    gridRow: "1",
    alignItems: "center",
    gridTemplateColumns: "1fr 3fr",
    paddingRight: "20px",
  };

  const imgStyle = {
    width: isDesktop ? "300px" : "125px",
    height: isDesktop ? "300px" : "125px",
  };

  const linkTextStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="carousel-item" style={{ width: width }}>
      <TextBox>
        <div style={textStyle}>
          <div style={tableStyle}>
            <div className="grid-item">
              <a href={projectUrl[name]}>
                <img src={img} alt="project logo" style={imgStyle} />
              </a>
            </div>
            <div className="grid-item">
              <a style={linkTextStyle} href={projectUrl[name]}>
                <h2>{name}</h2>
              </a>
              <h5>{description}</h5>
            </div>
          </div>
        </div>
      </TextBox>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          className="carousel-nav-button"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <h1>&#9664;</h1>
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {/* {index + 1} */}
            </button>
          );
        })}
        <button
          className="carousel-nav-button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <h1>&#9654;</h1>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
