import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import projects from "./projectsData";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div className="container mx-auto text-center py-20 text-gray-500">Project not found</div>;
    }

    // Carousel settings
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto py-12 px-4">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-lg text-white bg-gray-900 hover:bg-gray-800 rounded-lg px-6 py-3 transition duration-300 ease-in-out"
                >
                    {project.deployed ? "Visit Site" : "Video Walkthrough"}
                </a>
            </div>

            {/* Carousel Section */}
            <div className="mb-12">
                <Slider {...carouselSettings}>
                    {[project.imageUrl, project.imageUrl, project.imageUrl].map((src, index) => (
                        <div key={index} className="w-full h-64 md:h-96">
                            <img src={src} alt={`Project Image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Tech Stack Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Front-End</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {project.techStack.frontEnd.map((tech, index) => (
                            <li key={index} className="text-base">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Back-End</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {project.techStack.backEnd.map((tech, index) => (
                            <li key={index} className="text-base">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {project.techStack.deployment.map((tech, index) => (
                            <li key={index} className="text-base">{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-3 mb-12">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-sm font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Timeline Section */}
            <div>
                {project.timeline.map((phase, index) => (
                    <div key={index} className="border-t border-gray-300 py-6 last:border-none">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{phase.title}</h2>
                        <p className="text-gray-600 mb-2">{phase.date}</p>
                        <div className="space-y-4">
                            {phase.subsections.map((subsection, subIndex) => (
                                <div key={subIndex}>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{subsection.title}</h3>
                                    <p className="text-gray-700">{subsection.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
