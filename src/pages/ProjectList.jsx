import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectList = ({ is3DView } ) => {
  const hoverClasses = [
    "hover:text-lime-600",
    "hover:text-pink-600",
    "hover:text-yellow-500",
    "hover:text-cyan-600",
    "hover:text-orange-600",
  ];

  return (
    <div
      className={`${
        is3DView ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      }`}
    >
      {projects.map((project, index) => {
        const { id, title, projectType, wip } = project;
        return (
          <Link
            key={id}
            to={`/projects/${id}`}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className={`${ is3DView ? "hidden" : "text-6xl"}`}>📄</div>
            <h3
              className={`mt-2 text-sm ${hoverClasses[index % hoverClasses.length]} transition`}
            >
              {title} {wip && <span className="text-xs">(wip)</span>}
            </h3>
            <p className="text-xs text-gray-600">{projectType}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
