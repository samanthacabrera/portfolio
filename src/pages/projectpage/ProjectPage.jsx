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
        <div className="flex flex-col items-center space-y-12 py-24 max-w-4xl mx-auto min-h-[90vh]">
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
            <div className="flex space-x-12 text-center text-sm bg-white/10 w-full p-4">
                <ul>
                    <span>features:</span>
                    {project.features.map((feature, index) => (
                        <li key={index} className="px-2 py-1 my-1 border rounded-full">{feature}</li>
                    ))}
                </ul>
                <ul>
                    <span>tech stack:</span>
                    {project.techStack.map((tech, index) => (
                        <li key={index} className="px-2 my-1 border rounded-full">{tech}</li>
                    ))}
                </ul>
                <ul>
                    <span>tags:</span>
                    {project.tags.map((tag, index) => (
                        <li key={index} className="px-2 my-1 border rounded-full">{tag}</li>
                    ))}
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
