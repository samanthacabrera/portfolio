import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import projects from '../../data/projectsData';
import FadeInSection from "../../utils/FadeIn";

const Projects = () => {
    return (
        <FadeInSection>
        <div id="projects" className="container space-y-10 sm:space-y-20 text-center sm:text-left">
            <h2 className="sub-heading">Projects</h2>
            <p className="">Below is a collection of my professional and personal web dev projects. If you have any questions about them don't hesitate to contact me and I can provide more information.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} >
                        <div className="relative">
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                thumbnail={project.thumbnail}
                                tags={project.tags}
                                currentlyWorkingOn={project.currentlyWorkingOn}
                                hideImage="sm:hidden" 
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </FadeInSection>
    );
};

export default Projects;
