import React from "react";
import "./styling/portfolioFrontEnd.css";
import { Component } from "react";
import Card from "../components/Card";
import projectsFrontEnd1 from "../data/projectsFrontEnd1";
import projectsFrontEnd2 from "../data/projectsFrontEnd2";
import { Carousel } from "react-bootstrap";

class PortfolioFrontEnd extends Component {
    state = {
        projectsFrontEnd1, 
        projectsFrontEnd2
    };

    render() {
        return (
            <div id="portfolioFrontEnd-page">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <div>
                            <h3 className="label">Front End Projects</h3>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFrontEnd1.map(project => (
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
                    <Carousel.Item interval={3000}>
                        <div>
                            <h3 className="label">Front End Projects</h3>
                            <div className="project d-flex flex-wrap justify-content-center">
                                {this.state.projectsFrontEnd2.map(project => (
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
            </div>
        )
    };
};

export default PortfolioFrontEnd;
