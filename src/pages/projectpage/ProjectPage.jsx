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
            <header className="w-full max-w-4xl mt-8 space-y-8">
                <h1 className="text-5xl lg:text-7xl">{project.title || "Untitled Project"}</h1>
                <div className="flex space-x-4 text-lg">
                    {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-50 transition ease-in-out duration-500"
                    >
                        View on GitHub &#x2197;
                    </a>
                )}
                {project.deployed ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-50 transition ease-in-out duration-500"
                    >
                        Visit Site &#x2197;
                    </a>
                ) : (
                    project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-50 transition ease-in-out duration-500"
                        >
                            Watch Demo &#x2197;
                        </a>
                    )
                )}
                </div>
            </header>

            {/* Toggle Buttons */}
            <nav className="w-full max-w-4xl my-6 flex justify-start items-start space-x-4">
                {['overview', 'insights', 'gallery'].map((section) => (
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
                    <section className="space-y-4">
                        <div className="">
                            <h3 className="text-xl mb-2">Description</h3>
                            <p className="font-normal">{project.description || "No description available"}</p>
                        </div>
                        <div className="">
                            <h3 className="text-xl mb-2">Tech Stack</h3>
                            <p className="font-normal">{project.overview.techStack.join(", ") || "Not specified"}</p>
                        </div>
                        <div className="">
                            <h3 className="text-xl mb-2">Features</h3>
                            <ul className="font-normal">
                                {project.overview.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
        
                    </section>
                )}

                {/* Insights Section */}
                {activeSection === 'insights' && (
                    <section className="mb-8">
                        <p className="font-normal">{project.insights || "No insights available"}</p>
                    </section>
                )}

                {/* Gallery Section */}
                {activeSection === 'gallery' && project.gallery && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.gallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-auto rounded-lg"
                                />
                            ))}
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
};

export default ProjectPage;
