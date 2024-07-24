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
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="space-y-12">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">{project.title}</h1>
                    {project.deployedLink && (
                        <a
                            href={project.deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-lg text-gray-900 bg-slate-200 hover:bg-slate-100 rounded-lg px-6 py-3 transition duration-300 ease-in-out shadow-lg"
                        >
                            Visit Deployed Site
                        </a>
                    )}
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-8 mb-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Front-End</h2>
                        <ul className="list-none space-y-2 text-gray-700">
                            {project.techStack.frontEnd.map((tech, index) => (
                                <li key={index} className="text-lg">{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Back-End</h2>
                        <ul className="list-none space-y-2 text-gray-700">
                            {project.techStack.backEnd.map((tech, index) => (
                                <li key={index} className="text-lg">{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deployment</h2>
                        <ul className="list-none space-y-2 text-gray-700">
                            {project.techStack.deployment.map((tech, index) => (
                                <li key={index} className="text-lg">{tech}</li>
                            ))}
                        </ul>
                    </div>
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

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
                    {project.timeline.map((phase, index) => (
                        <div key={index} className={`flex flex-col mb-12 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                            <div className={`bg-white bg-opacity-50 p-6 rounded-lg shadow-md max-w-md w-full ${index % 2 === 0 ? 'ml-8' : 'mr-8'} ${index > 0 ? '-mt-8' : ''}`}>
                                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{phase.title}</h2>
                                <p className="text-gray-600 mb-2">{phase.date}</p>
                                {phase.subsections.map((subsection, subIndex) => (
                                    <div key={subIndex} className="mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800">{subsection.title}</h3>
                                        <p className="text-gray-700">{subsection.description}</p>
                                        {subsection.hoursSpent && (
                                            <p className="text-gray-700">Hours Spent: {subsection.hoursSpent}</p>
                                        )}
                                        {subsection.commits && (
                                            <div className="mt-4">
                                                <h4 className="text-lg font-semibold text-gray-800">Commits:</h4>
                                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                                    {subsection.commits.map((commit, commitIndex) => (
                                                        <li key={commitIndex} className="text-sm">
                                                            <span className="font-semibold">{commit.date}:</span> {commit.message} ({commit.hours} hours)
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
