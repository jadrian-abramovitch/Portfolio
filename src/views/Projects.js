import Carousel, { CarouselItem } from "../components/Carousel";

const Projects = () => {
    return(
        <div className="Projects"> 
            <Carousel>
                <CarouselItem>Project 1</CarouselItem>
                <CarouselItem>Project 2</CarouselItem>
                <CarouselItem>Project 3</CarouselItem>
            </Carousel>
        </div>
    );
};

export default Projects;