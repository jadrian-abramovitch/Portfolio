import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import github from '../static/github.png';


import "../styles/Carousel.css";

export const CarouselItem = ({ children, width, description }) => {
    const textStyle = {
        whiteSpace: 'normal',
    };

    const descriptionTextStyle = {
    }

    const tableStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        gridRow: '1',
        alignItems: 'center',
        gridTemplateColumns: '1fr 3fr',
        paddingRight: '20px'
    };

    const imgStyle = {
        width: '200px',
        height: '125px',
    };

    return (
        <div className="carousel-item" style={{ width: width }}>
            <div style={textStyle}>
                <h2>{children}</h2>
                <div style={tableStyle}>
                    <div class='grid-item'> 
                        <img src={github} alt='github' style={imgStyle}/>
                    </div>
                    <div class='grid-item'>
                        <h5 style={descriptionTextStyle}>{description}</h5>
                    </div>
                </div>
            </div>
        </div>      
    )
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
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1); 
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div 
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel-inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="indicators">
                <button onClick={() => {
                    updateIndex(activeIndex-1);
                }}
                >
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button 
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => {
                            updateIndex(index);
                        }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                >
                    Next
                </button>
            </div>
        </div>
    )
};

export default Carousel;