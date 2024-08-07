import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

const Projects = () => {
    return (
        <div id="projects" className="container space-y-12 md:space-y-24">
            <h2 className="subHeading lowercase md:text-7xl lg:text-9xl">Projects</h2>
            <p className="">Below is a collection of my professional and personal web dev projects. If you have any questions about them don't hesitate to contact me and I can provide more information.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} >
                        <div className="relative">
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                tags={project.tags}
                                currentlyWorkingOn={project.currentlyWorkingOn}
                                hideImage="sm:hidden" 
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
