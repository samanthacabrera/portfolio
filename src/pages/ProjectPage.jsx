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
      <div className="flex items-center justify-center min-h-screen px-4">
        <p className="text-lg font-bold uppercase tracking-widest">
          Project not found 😅
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-md bg-white/10 border-dashed border-4 border-indigo-300 rounded-3xl shadow-[6px_6px_0_0_rgba(11,5,91,0.8)] p-6 space-y-8 hover:shadow-[10px_10px_0_0_rgba(11,5,91,0.8)] hover:scale-102 active:translate-y-0.5 transition-all duration-300">

        <Link
          to="/"
          className="inline-block text-xs font-extrabold uppercase tracking-wider hover:underline transition-all duration-200"
        >
          ← Back
        </Link>

        <div className="space-y-2 text-center">
          <h2 className="uppercase text-xs font-extrabold tracking-widest opacity-80">
            {project.projectType}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="flex justify-center space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-extrabold uppercase rounded-full border-4 border-indigo-300 bg-pink-100 hover:bg-pink-200 active:translate-y-0.5 transition-all duration-200 shadow-[3px_3px_0_0_rgba(11,5,91,0.8)]"
          >
            GitHub
          </a>
          {project.deployed && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-extrabold uppercase rounded-full border-4 border-indigo-300 bg-orange-100 hover:bg-orange-200 active:translate-y-0.5 transition-all duration-200 shadow-[3px_3px_0_0_rgba(11,5,91,0.8)]"
            >
              Live Site
            </a>
          )}
        </div>

          <div>
            <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
              Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="font-semibold tracking-wide"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
              Tags
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {project.tags.map((tag, index) => (
                <li
                  key={index}
                  className="font-semibold tracking-wide"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
              Features
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm font-medium">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
              What I Learned
            </h3>
            <p className="text-sm leading-relaxed font-medium">
              {project.insights}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
              My Role
            </h3>
            <p className="text-sm leading-relaxed font-medium">
              {project.contribution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
