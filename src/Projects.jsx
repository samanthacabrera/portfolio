import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "Recipe Roots",
        description: "Recipe Roots is an online platform designed for sharing family recipes, with the goal of preserving and sharing authentic, culturally accurate dishes with a global audience.",
        imageUrl: "/images/Screenshot 2024-07-16 at 12.02.38 PM.png",
        tags: ["React.js", "Community"]
    },
    {
        id: 2,
        title: "Yogi API",
        description: "This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.",
        imageUrl: "/images/Screenshot 2024-07-16 at 12.17.19 PM.png",
        tags: ["API", "Yoga", "Integration"]
    },
    {
        id: 3,
        title: "PyFlows",
        description: "A CLI that generates vinyasa yoga flow sequences powered by Python.",
        imageUrl: "/images/Screenshot 2024-07-16 at 12.29.28 PM.png",
        tags: ["Python", "CLI", "Yoga"]
    },
    {
        id: 4,
        title: "Gratitude Globe",
        description: "Platform for users to share what they are grateful for-- big or small.",
        imageUrl: "/images/Screenshot 2024-07-16 at 12.21.16 PM.png",
        tags: ["Gratitude", "JavaScript"]
    },
];

const Projects = () => {
    return (
        <div id="projects" className="container p-4 md:p-12 lg:p-24 space-y-12 md:space-y-24 text-center">
            <h2 className="subHeading lowercase text-5xl md:text-7xl lg:text-9xl">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} >
                        <ProjectCard
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
