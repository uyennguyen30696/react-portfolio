import React from "react";
import Card from "../components/Card";
import projectsFrontEnd from "../data/projectsFrontEnd";

const ProjectsFrontEnd = () => {
    return (
        <div id="projects-front-end">
            <h3>Front End Projects</h3>
            <div className="projects-wrapper">
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
        </div>
    )
}

export default ProjectsFrontEnd;