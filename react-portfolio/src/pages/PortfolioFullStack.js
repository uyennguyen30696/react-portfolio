import React from "react";
import "./styling/portfolioFullStack.css";
import { Component } from "react";
import Card from "../components/Card";
import projectsFullStack1 from "../data/projectsFullStack1";
import projectsFullStack2 from "../data/projectsFullStack2";
import { Carousel } from "react-bootstrap";

class PortfolioFullStack extends Component {
    
    state = {
        projectsFullStack1,
        projectsFullStack2
    };

    render() {
        return (
            <article id="portfolioFullStack-page">
                <Carousel>
                    <Carousel.Item>
                        <div>
                            <h4>Full Stack Projects</h4>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFullStack1.map(project => (
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
                            <h4>Full Stack Projects</h4>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFullStack2.map(project => (
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
