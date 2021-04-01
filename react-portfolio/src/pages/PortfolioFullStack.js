import React from "react";
import "./styling/portfolioFullStack.css";
import { Component } from "react";
import Card from "../components/Card";
import projectsFullStack from "../data/projectsFullStack1";
import { Carousel } from "react-bootstrap";

class PortfolioFullStack extends Component {
    
    state = {
        projectsFullStack
    };

    render() {
        return (
            <article id="portfolioFullStack-page">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <div>
                            <h3 className="label">Full Stack Projects</h3>
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
                                ))}
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </article>
        )
    };
};

export default PortfolioFullStack;
