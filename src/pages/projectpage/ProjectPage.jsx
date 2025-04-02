import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from '../../data/projectsData';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id)) || {};

    if (!project.id) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">Project not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-12 py-24 max-w-4xl mx-4 lg:mx-auto min-h-[90vh]">
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="uppercase font-semibold opacity-70 mb-2">{project.projectType}</h2>
                    <h1 className="text-4xl">{project.title}</h1>
                </div>
                <div className="flex flex-col text-center space-y-1">
                    <a href={project.github} className="bg-white/10 p-1">GitHub</a>
                    {project.deployed && <a href={project.link} className="bg-white/10 p-1">Site</a>}
                    <Link
                        to="/"
                        className="bg-white/10 p-1 bg-white/50 hover:bg-white/60 text-black"
                    >
                        Home
                    </Link>
                </div>
            </div>
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
        </div>
    );
};

export default ProjectPage;
