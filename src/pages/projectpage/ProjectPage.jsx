import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from '../../data/projectsData';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id)) || {};
    const [activeSection, setActiveSection] = useState('overview');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const openImage = (image) => setSelectedImage(image);
    const closeImage = () => setSelectedImage(null);

    if (!project.id) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">Project not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen p-12 sm:text-left">

            <header className="w-full max-w-4xl mt-8 space-y-8">
                <h1 className="text-5xl lg:text-7xl">{project.title || "Untitled Project"}</h1>
                <div className="flex space-x-4 text-lg">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            View on GitHub &#x2197;
                        </a>
                    )}
                    {project.deployed ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Visit Site &#x2197;
                        </a>
                    ) : (
                        project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Watch Demo &#x2197;
                            </a>
                        )
                    )}
                </div>
            </header>

            <nav className="w-full max-w-4xl my-6 flex justify-start items-start space-x-4">
                {['overview', 'insights', 'gallery'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`p-2 rounded ${
                            activeSection === section ? 'border-2 border-current' : ''
                        }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <main className="w-full max-w-4xl">
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

                {activeSection === 'insights' && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Insights</h3>
                        <p className="font-normal">{project.insights || "No insights available"}</p>
                    </section>
                )}

                {activeSection === 'gallery' && project.gallery && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.gallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openImage(image)}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
                    <img
                        src={selectedImage}
                        alt="Zoomed image"
                        className="max-w-2xl max-h-full rounded-lg shadow-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectPage;
