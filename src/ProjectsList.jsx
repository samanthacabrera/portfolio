import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

const Projects = () => {
    return (
        <div id="projects" className="container p-4 md:p-12 lg:p-24 space-y-12 md:space-y-24 text-center">
            <h2 className="subHeading lowercase text-5xl md:text-7xl lg:text-9xl">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} >
                        <ProjectCard
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
