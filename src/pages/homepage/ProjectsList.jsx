import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import projects from '../../data/projectsData';
import FadeInSection from "../../utils/FadeIn";

const Projects = () => {
    return (
        <FadeInSection>
        <div id="projects" className="min-h-screen flex flex-col justify-center container space-y-10 text-left">
            <h2 className="text-4xl tracking-wide lowercase mb-4">check this out ...</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
