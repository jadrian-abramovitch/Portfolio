import Carousel, { CarouselItem } from "../components/Carousel";
import project1Text from "../static/text/project1";

const Projects = () => {
    return(
        <div className="Projects"> 
            <Carousel>
                <CarouselItem description={project1Text()}>Project 1</CarouselItem>
                <CarouselItem>Project 2</CarouselItem>
                <CarouselItem>Project 3</CarouselItem>
            </Carousel>
        </div>
    );
};

export default Projects;