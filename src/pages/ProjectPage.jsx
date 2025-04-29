import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from '../data/projectsData';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id)) || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); 

    if (!project.id) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">Project not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-12 py-24 max-w-4xl mx-4 lg:mx-auto min-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="uppercase font-semibold opacity-70 mb-2">{project.projectType}</h2>
                    <h1 className="text-4xl">{project.title}</h1>
                </div>
                <div className="flex flex-col text-center space-y-2">
                    <a 
                        href={project.github} 
                        className="px-3 py-1.5 text-sm border border-white/20 rounded-sm hover:bg-white/5 transition-all duration-300"
                    >
                        GitHub
                    </a>
                    {project.deployed && 
                        <a 
                            href={project.link} 
                            className="px-3 py-1.5 text-sm border border-white/20 rounded-sm hover:bg-white/5 transition-all duration-300"
                        >
                            Site
                        </a>
                    }
                </div>
            </div>
            
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full border-t border-b border-white/10 py-8">
                <div className="flex flex-col md:col-span-2 ">
                    <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Features</span>
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="text-sm text-white/80">{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Tech Stack</span>
                    <ul className="space-y-2">
                        {project.techStack.map((tech, index) => (
                            <li key={index} className="text-sm text-white/80">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Tags</span>
                    <ul className="space-y-2">
                        {project.tags.map((tag, index) => (
                            <li key={index} className="text-sm text-white/80">{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Project Takeaways */}
            <div className="flex flex-col w-full border-b border-white/10 pb-8">
                <div className="grid grid-cols-1 gap-8 w-full">
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Summary</span>
                        <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Motivation</span>
                        <p className="text-sm text-white/80">{project.reason}</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Learnings</span>
                        <p className="text-sm text-white/80">{project.insights}</p>
                    </div>

                     <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-white/60 mb-4">Role</span>
                        <p className="text-sm text-white/80">{project.contribution}</p>
                    </div>
                </div>
            </div>

            {/* Other Work */}
            <div className="w-full">
                <h3 className="text-xs uppercase tracking-wider text-white/60 mb-4">See my other projects</h3>
                <ul className="grid grid-cols-4 gap-4">
                    {projects
                        .filter((proj) => proj.id !== project.id) 
                        .map((proj) => (
                            <li key={proj.id} >
                                <Link to={`/projects/${proj.id}`} className="opacity-80 hover:opacity-100 transition duration-300">
                                    {proj.title}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <Link
                to="/"
                className="px-3 py-1.5 text-sm self-start border border-white/20 rounded-sm text-white/90 hover:bg-white/5 transition-all duration-300"
            >
                Take me home!
            </Link>
        </div>
    );
};

export default ProjectPage;
