import React, { useState } from 'react';
import "./styling/projects.css"
import Card from "../components/Card";
import projectsFullStack from "../data/projectsFullStack";

import ScrollTrigger from 'react-scroll-trigger'; /* Animation effect of components in the viewport */

const ProjectsFullStack = () => {

    // Refer to this documentation from react-scroll-trigger: https://www.npmjs.com/package/react-scroll-trigger
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
        <div id="projects-full-stack">
            <h3>Full Stack Projects</h3>
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport} throttleScroll={throttleScrollValue}>
                <div className={`projects-wrapper ${isVisible ? "visible" : ""}`}>
                    {projectsFullStack.map(project => (
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

export default ProjectsFullStack;
