import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsData";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div className="container mx-auto text-center py-20">Project not found</div>;
    }

    return (
        <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
            <div className="mb-12">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">{project.title}</h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">{project.description}</p>
                <div className="mt-8">
                    <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-lg text-blue-600 hover:underline"
                    >
                        Visit Deployed Site
                    </a>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-sm md:text-base font-medium hover:bg-gray-300 transition duration-300 ease-in-out"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="timeline relative">
               
                    <div className="hidden md:block md:absolute md:left-1/2 md:h-full md:border-l-2 md:border-slate-200 md:transform md:-translate-x-1/2"></div>
                    {project.timeline.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item mb-12 relative ${index % 2 === 0 ? 'md:left-0' : 'md:left-0'} ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}
                        >
                            <div
                                className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between ${
                                    index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
                                }`}
                            >
                                <div className={`bg-slate-100 bg-opacity-20 p-6 shadow-lg rounded-lg w-full md:w-5/12`}>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{item.title}</h2>
                                    <p className="text-lg text-gray-600 mb-2">{item.date}</p>
                                    <p className="text-lg text-gray-700 mb-6">{item.description}</p>
                                </div>
                
                                <div className="hidden md:block md:w-3 md:h-3 md:bg-slate-200 md:rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
