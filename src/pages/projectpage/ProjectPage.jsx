import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from '../../data/projectsData';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id)) || {};
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!project.id) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">Project not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen p-12 sm:text-left">
            {/* Header */}
            <header className="w-full max-w-4xl mt-8 space-y-4">
                <h1 className="text-5xl lg:text-7xl">{project.title || "Untitled Project"}</h1>
                <p className="text-lg pb-2">{project.description || "No description available"}</p>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-50 transition ease-in-out duration-500"
                    >
                        View on GitHub &#x2197;
                    </a>
                )}
            </header>

            {/* Toggle Buttons */}
            <nav className="w-full max-w-4xl my-6 flex justify-start items-start space-x-4">
                {['overview', 'insights', 'walkthrough'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`p-2 rounded  ${
                            activeSection === section ? 'border-2 border-current' : ''
                        }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            {/* Main Content */}
            <main className="w-full max-w-4xl">
                {/* Overview Section */}
                {activeSection === 'overview' && (
                    <section className="mb-8">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                            <p>{project.overview.techStack.join(", ") || "Not specified"}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Features</h3>
                            <ul className="pl-2">
                                {project.overview.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
        
                    </section>
                )}

                {/* Walkthrough Section */}
                {activeSection === 'walkthrough' && project.walkthrough && (
                    <section className="mb-8">
                        <div className="relative" style={{ paddingTop: '48.4%' }}> 
                            <iframe
                                src={project.walkthrough}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Project Walkthrough"
                                className="absolute inset-0 w-[300px] h-[200px]"
                                style={{ borderRadius: '8px' }} 
                            ></iframe>
                        </div>
                    </section>
                )}

                {/* Insights Section */}
                {activeSection === 'insights' && (
                    <section className="mb-8">
                        <p>{project.insights || "No insights available"}</p>
                    </section>
                )}

            </main>
        </div>
    );
};

export default ProjectPage;
