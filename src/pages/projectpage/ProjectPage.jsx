import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from '../../data/projectsData';

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

            {/* Project Takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm w-full p-6 bg-white/5">
                <ul className="flex flex-col items-center">
                    <span className="block text-xs font-bold uppercase tracking-wide pb-1 w-full text-left">Features</span>
                    <div className="grid gap-2 w-full mt-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="px-3 py-1 border border-white/50 text-xs font-medium">{feature}</li>
                        ))}
                    </div>
                </ul>
                <ul className="flex flex-col items-center">
                    <span className="block text-xs font-bold uppercase tracking-wide pb-1 w-full text-left">Tech Stack</span>
                    <div className="grid gap-2 w-full mt-2">
                        {project.techStack.map((tech, index) => (
                            <li key={index} className="px-3 py-1 border border-white/50 text-xs font-medium">{tech}</li>
                        ))}
                    </div>
                </ul>
                <ul className="flex flex-col items-center">
                    <span className="block text-xs font-bold uppercase tracking-wide pb-1 w-full text-left">Tags</span>
                    <div className="grid gap-2 w-full mt-2">
                        {project.tags.map((tag, index) => (
                            <li key={index} className="px-3 py-1 border border-white/50 text-xs font-medium">{tag}</li>
                        ))}
                    </div>
                </ul>
            </div>

            <div className="flex flex-col space-y-4 w-full">
                <h3 className="font-medium">this project is a...</h3>
                <p>{project.description}</p>
                <h3 className="font-medium">this project taught me...</h3>
                <p>{project.insights}</p>
                <h3 className="font-medium">I made this project...</h3>
                <p>{project.reason}</p>
            </div>

            {/* Other Work */}
            <div className="w-full">
                <h3 className=" mb-4">See my other projects</h3>
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
