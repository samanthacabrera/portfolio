import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import projects from '../../data/projectsData';
import FadeInSection from "../../utils/FadeIn";

const Projects = () => {
    return (
        <FadeInSection>
        <div className="min-h-screen flex flex-col justify-center container space-y-4 text-left">
            <h2 className="text-6xl lg:text-8xl font-mono">Check out my work...</h2>
            <div className="grid grid-cols-1 gap-4">
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
