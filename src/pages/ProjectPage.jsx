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
      <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-neutral-100">
        <p className="text-lg font-bold uppercase tracking-widest">
          Project not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20 max-w-6xl mx-auto space-y-20">
      <Link
        to="/"
        className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider border border-neutral-700 rounded-full text-neutral-200 hover:bg-neutral-800 transition-all duration-200 mb-8"
      >
        ← Back
      </Link>

      <div className="space-y-6 border-b border-neutral-800 pb-12">
        <div>
          <h2 className="uppercase text-sm font-bold tracking-widest text-neutral-500 mb-2">
            {project.projectType}
          </h2>
          <h1 className="text-5xl md:text-6xl tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            className="px-4 py-2 text-xs font-semibold uppercase border border-neutral-700 rounded-full hover:bg-neutral-800 transition duration-200"
          >
            GitHub
          </a>
          {project.deployed && (
            <a
              href={project.link}
              className="px-4 py-2 text-xs font-semibold uppercase border border-neutral-700 rounded-full hover:bg-neutral-800 transition duration-200"
            >
              Live Site
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-800 pb-12">
        {/* Description */}
        <div className="md:col-span-2 space-y-6">
           <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500 mb-3">
              Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-neutral-300 font-medium"
                >
                  {feature}
                </li>
              ))}
            </ul>

          <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500">
            What I Learned
          </h3>
          <p className="text-base text-neutral-200 leading-relaxed">
            {project.insights}
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          <div>
            <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500 mb-3">
              Tech Stack
            </h3>
            <ul className="space-y-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-sm text-neutral-300 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500 mb-3">
              Tags
            </h3>
            <ul className="space-y-2">
              {project.tags.map((tag, index) => (
                <li key={index} className="text-sm text-neutral-300 font-medium">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
            <div>
                <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500">
                    My Role
                </h3>
                <p className="text-base text-neutral-200 leading-relaxed">
                    {project.contribution}
                </p>   
            </div>
        </div>
      </div>

      {/* Other Work */}
      <div>
        <h3 className="text-sm uppercase font-bold tracking-widest text-neutral-500 mb-6">
          Other Projects
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects
            .filter((proj) => proj.id !== project.id)
            .map((proj) => (
              <li key={proj.id}>
                <Link
                  to={`/projects/${proj.id}`}
                  className="block text-sm font-semibold text-neutral-300 hover:text-neutral-50 transition duration-200"
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
