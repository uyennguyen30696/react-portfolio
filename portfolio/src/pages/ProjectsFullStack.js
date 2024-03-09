import React from "react";
import "./styling/projects.css"
import Card from "../components/Card";
import projectsFullStack from "../data/projectsFullStack";

const ProjectsFullStack = () => {
    return (
        <div id="projects-full-stack">
            <h3>Full Stack Projects</h3>
            <div className="projects-wrapper">
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
        </div>
    )
}

export default ProjectsFullStack;
