import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id)) || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project.id) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-bold uppercase tracking-widest">
          Project not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto space-y-10">
      <Link
        to="/"
        className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-full hover:transition-all duration-200 mb-8"
      >
        ← Back
      </Link>

      <div className="space-y-6 pb-12">
        <div>
          <h2 className="uppercase text-sm font-bold tracking-widest mb-2">
            {project.projectType}
          </h2>
          <h1 className="text-5xl md:text-6xl tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            className="px-4 py-2 text-xs font-semibold uppercase border rounded-full hover:transition duration-200"
          >
            GitHub
          </a>
          {project.deployed && (
            <a
              href={project.link}
              className="px-4 py-2 text-xs font-semibold uppercase border rounded-full hover:transition duration-200"
            >
              Live Site
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Description */}
        <div className="md:col-span-2 space-y-6">
           <h3 className="text-sm uppercase font-bold tracking-widest mb-3">
              Features
            </h3>
            <ul className="list-disc list-inside marker:text-xs space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm font-medium"
                >
                  {feature}
                </li>
              ))}
            </ul>

          <h3 className="text-sm uppercase font-bold tracking-widest">
            What I Learned
          </h3>
          <p className="text-base leading-relaxed">
            {project.insights}
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          <div>
            <h3 className="text-sm uppercase font-bold tracking-widest mb-3">
              Tech Stack
            </h3>
            <ul className="space-y-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-sm font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase font-bold tracking-widest mb-3">
              Tags
            </h3>
            <ul className="space-y-2">
              {project.tags.map((tag, index) => (
                <li key={index} className="text-sm font-medium">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
            <div>
                <h3 className="text-sm uppercase font-bold tracking-widest">
                    My Role
                </h3>
                <p className="text-base leading-relaxed">
                    {project.contribution}
                </p>   
            </div>
        </div>
      </div>

      {/* Other Work */}
      <div>
        <h3 className="text-sm uppercase font-bold tracking-widest mb-6">
          Other Projects
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects
            .filter((proj) => proj.id !== project.id)
            .map((proj) => (
              <li key={proj.id}>
                <Link
                  to={`/projects/${proj.id}`}
                  className="block text-sm hover:transition duration-200"
                >
                  {proj.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
