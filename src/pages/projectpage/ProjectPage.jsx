import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from '/Users/samanthacabrera/webDev/portfolio/src/data/projectsData.js';

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
        <div className="flex flex-col items-center p-8 md:ml-16">
            {/* Header */}
            <header className="w-full max-w-4xl mt-8 space-y-4">
                <h1 className="text-5xl lg:text-7xl">{project.title || "Untitled Project"}</h1>
                <p className="text-lg">{project.description || "No description available"}</p>
            </header>

            {/* Toggle Buttons */}
            <nav className="w-full max-w-4xl my-8 flex flex-wrap justify-start space-x-4">
                {['overview', 'insights', 'timeline', 'gallery'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`btn-dark ${
                            activeSection === section ? 'btn-light' : ''
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
                            <ul className="list-disc pl-5">
                                {project.overview.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Tags</h3>
                            <p>{project.overview.tags?.length ? project.overview.tags.join(", ") : "No tags available"}</p>
                        </div>
                    </section>
                )}

                {/* Insights Section */}
                {activeSection === 'insights' && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Insights</h3>
                        <p className="text-gray-700">{project.insights || "No insights available"}</p>
                    </section>
                )}

                {/* Timeline Section */}
                {activeSection === 'timeline' && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                        {project.timeline?.length ? (
                            project.timeline.map((phase, index) => (
                                <div key={index} className="mb-6">
                                    <h4 className="text-lg">{phase.title}</h4>
                                    <p className="mb-2">{phase.date}</p>
                                    <div className="pl-4">
                                        {phase.subsections?.length ? (
                                            phase.subsections.map((subsection, subIndex) => (
                                                <div key={subIndex} className="mb-2">
                                                    <p className="">{subsection.description}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No details available</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No timeline available</p>
                        )}
                    </section>
                )}

                {/* Gallery Section */}
                {activeSection === 'gallery' && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Gallery</h3>
                        {project.gallery?.length ? (
                            <div className="flex flex-wrap gap-4">
                                {project.gallery.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No gallery images available</p>
                        )}
                    </section>
                )}
            </main>
        </div>
    );
};

export default ProjectPage;
