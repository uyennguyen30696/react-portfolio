import React from "react";
import { Component } from "react";
// import Carousels from "../components/Carousel";
import Card from "../components/Cards";
import projectsFullStack from "../projectsFullStack";
import projectsFrontEnd from "../projectsFrontEnd";
import { Carousel } from "react-bootstrap";

// function Portfolio() {
//     return (
//         <div>
//             <Carousels />
//         </div>
//     );
// };

class Portfolio extends Component {
    state = {
        projectsFullStack,
        projectsFrontEnd
    };

    render() {
        return (
            <div id="portfolio-page">
                <Carousel>
                    <Carousel.Item >
                        <div>
                            <h4>Full stack</h4>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFullStack.map(project => (
                                    <Card
                                        key={project.id}
                                        id={project.id}
                                        name={project.name}
                                        image={project.image}
                                        deployedLink={project.deployedLink}
                                        githubLink={project.githubLink}
                                        summary={project.summary}
                                        technologies={project.technologies}
                                    />
                                ))};
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div>
                            <h4>Front end</h4>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFrontEnd.map(project => (
                                    <Card
                                        key={project.id}
                                        id={project.id}
                                        name={project.name}
                                        image={project.image}
                                        deployedLink={project.deployedLink}
                                        githubLink={project.githubLink}
                                        summary={project.summary}
                                        technologies={project.technologies}
                                    />
                                ))};
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    };
};

export default Portfolio;
