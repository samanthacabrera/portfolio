import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from './projectsData';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id));
    const [activeSection, setActiveSection] = useState('video');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!project) {
        return (
            <div className="container mx-auto text-center py-20 text-gray-500">
                Project not found
            </div>
        );
    }

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="min-h-screen flex flex-col items-center md:my-10 px-8 lg:px-16">
            {/* Header Section */}
            <div className="w-full max-w-4xl mt-16 space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold">{project.title}</h1>
                <p className="lg:text-xl">{project.description}</p>
                <p className="text-sm md:text-base lg:text-lg">Tags: {project.tags.length ? project.tags.join(", ") : "No tags available"}</p>
            </div>

            {/* Section Toggle Buttons */}
            <div className="w-full max-w-4xl flex flex-col py-10 md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
                <button
                    onClick={() => setActiveSection('gallery')}
                    className={`w-full max-w-xs text-white ${activeSection === 'gallery' ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-800 rounded-lg px-6 py-3 transition duration-300`}
                >
                    Photo Gallery
                </button>
                <button
                    onClick={() => setActiveSection('timeline')}
                    className={`w-full max-w-xs text-white ${activeSection === 'timeline' ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-800 rounded-lg px-6 py-3 transition duration-300`}
                >
                    Timeline
                </button>
                <button
                    onClick={() => setActiveSection('video')}
                    className={`w-full max-w-xs text-white ${activeSection === 'video' ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-800 rounded-lg px-6 py-3 transition duration-300`}
                >
                    Video Walkthrough
                </button>
            </div>

            {/* Photo Gallery Section */}
            {activeSection === 'gallery' && (
                <div className="w-full max-w-4xl">
                    {/* Carousel for md and larger devices */}
                    <div className="hidden md:block">
                        <Slider {...carouselSettings}>
                            {[project.imageUrl, project.imageUrl, project.imageUrl].map((src, index) => (
                                <div key={index} className="w-full h-80">
                                    <img
                                        src={src}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Column layout for smaller devices */}
                    <div className="block md:hidden">
                        <div className="flex flex-col space-y-4">
                            {[project.imageUrl, project.imageUrl, project.imageUrl].map((src, index) => (
                                <div key={index} className="w-full h-80">
                                    <img
                                        src={src}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Timeline Section */}
            {activeSection === 'timeline' && (
                <div className="w-full max-w-4xl">
                    <div className="overflow-x-auto">
                        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                            {project.timeline.length ? (
                                project.timeline.map((phase, index) => (
                                    <div
                                        key={index}
                                        className="min-w-96 bg-white p-6 border border-gray-200 rounded-lg shadow-md"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.title}</h3>
                                        <p className="text-gray-600 mb-4">{phase.date}</p>
                                        <div className="space-y-4">
                                            {phase.subsections.length ? (
                                                phase.subsections.map((subsection, subIndex) => (
                                                    <div key={subIndex}>
                                                        <h4 className="text-md font-semibold text-gray-700 mb-1">{subsection.title}</h4>
                                                        <p className="text-gray-600">{subsection.description}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-400">No details available</p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-400">No timeline available</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Video Walkthrough Section */}
            {activeSection === 'video' && project.deployed && (
                <div className="w-full max-w-4xl">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">Video Walkthrough</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="100%"
                            height="315"
                            src={project.videoUrl}
                            title="Video Walkthrough"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectPage;
