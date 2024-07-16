import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    let { projectId } = useParams();

    const project = {
        id: projectId,
        title: `Project ${projectId}`,
        description: `Description of Project ${projectId}.`,
        videoUrl: "https://www.youtube.com/embed/your-video-id",
        tags: ["Tag1", "Tag2", "Tag3"],
        links: [
            { title: "GitHub Repository", url: "https://github.com/your-username/project-1" },
            { title: "Live Demo", url: "https://your-project-demo-url.com" }
        ]
    };

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-4xl font-bold mb-8">{project.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            title={project.title}
                            src={project.videoUrl}
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Links:</h3>
                    <ul className="list-disc pl-5">
                        {project.links.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
