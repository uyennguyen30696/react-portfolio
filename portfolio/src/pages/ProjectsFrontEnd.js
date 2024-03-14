import React, { useState } from 'react';
import "./styling/projects.css"
import Card from "../components/Card";
import projectsFrontEnd from "../data/projectsFrontEnd"; // Import the correct data for front-end projects

import ScrollTrigger from 'react-scroll-trigger'; /* Animation effect of components in the viewport */

const ProjectsFrontEnd = () => {

    const [isVisible, setIsVisible] = useState(false);

    const onEnterViewport = () => {
        setIsVisible(true);
    };

    const onExitViewport = () => {
        setIsVisible(false);
    };

    // Adjust the throttleScroll property to change sensitivity of scroll (trigger animation when scroll slowly)
    // The lower the value the more sensitive the animation is with the scroll
    const throttleScrollValue = 20;

    return (
        <div id="projects-front-end">
            <h3>Front End Projects</h3>
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport} throttleScroll={throttleScrollValue}>
                <div className={`projects-wrapper ${isVisible ? "visible" : ""}`}>
                    {projectsFrontEnd.map(project => (
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
            </ScrollTrigger>
        </div>
    )
}

export default ProjectsFrontEnd;
