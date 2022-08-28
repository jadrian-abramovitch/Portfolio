import Carousel, { CarouselItem } from "../components/Carousel";
import project1Text from "../static/text/project1";
import project2Text from "../static/text/project2";
import project3Text from "../static/text/project3";
import connect4 from "../static/connect4.png";
import FindMeATeam from "../static/FindMeATeam.png";
import NHLGraph from "../static/NHLGraph.png";

const Projects = () => {
  return (
    <div id="projects">
      <Carousel>
        <CarouselItem
          description={project1Text()}
          img={FindMeATeam}
          name="Find Me A Team!"
        ></CarouselItem>
        <CarouselItem
          description={project2Text()}
          img={NHLGraph}
          name="NHL Stats"
        ></CarouselItem>
        <CarouselItem
          description={project3Text()}
          img={connect4}
          name="Connect 4"
        ></CarouselItem>
      </Carousel>
    </div>
  );
};

export default Projects;
