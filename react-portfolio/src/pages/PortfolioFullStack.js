import React from "react";
import "./styling/portfolioFullStack.css";
import { Component } from "react";
import Card from "../components/Card";
import projectsFullStack from "../data/projectsFullStack";
import projectsUpcoming from "../data/projectsUpcoming";
import { Carousel } from "react-bootstrap";

class PortfolioFullStack extends Component {
    state = {
        projectsFullStack,
        projectsUpcoming
    };

    render() {
        return (
            <article id="portfolioFullStack-page">
                <Carousel>
                    <Carousel.Item>
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
                            <h4>Upcoming Full Stack Projects</h4>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsUpcoming.map(project => (
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
            </article>
        )
    };
};

export default PortfolioFullStack;
