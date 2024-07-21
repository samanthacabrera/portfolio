import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsData"; // Assuming you have this data file

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div className="container mx-auto text-center py-20">Project not found</div>;
    }

    // Example data for the timeline (replace with actual data)
    const timeline = [
        {
            title: "Initial Concept",
            description: "The initial idea for the project was conceived...",
            date: "January 2023",
        },
        {
            title: "Design Phase",
            description: "Wireframes and design prototypes were created...",
            date: "February 2023",
        },
        {
            title: "Development",
            description: "The project was developed using React and Flask...",
            date: "March 2023 - June 2023",
        },
        {
            title: "Testing and Deployment",
            description: "Extensive testing was conducted before deployment...",
            date: "July 2023",
        },
        {
            title: "Launch",
            description: "The project was successfully launched...",
            date: "August 2023",
        },
    ];

    return (
        <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
            <div className="mb-12">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">{project.title}</h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm md:text-base font-medium hover:bg-gray-300 transition duration-300 ease-in-out"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="timeline relative">
                    <div className="border-l-4 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    {timeline.map((item, index) => (
                        <div key={index} className={`timeline-item mb-12 relative ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                            <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-between`}>
                                <div className={`bg-white p-6 shadow-lg rounded-lg w-full md:w-5/12 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{item.title}</h2>
                                    <p className="text-lg text-gray-600 mb-2">{item.date}</p>
                                    <p className="text-lg text-gray-700 mb-6">{item.description}</p>
                                </div>
                                <div className="hidden md:block w-6 h-6 bg-gray-300 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-lg text-blue-600 hover:underline"
                    >
                        Visit Deployed Site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
