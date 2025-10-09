import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectList = ({ is3DView } ) => {
  return (
    <div
      className={`${
        is3DView ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" : "grid grid-cols-1 gap-4"
      }`}
    >
      {projects.map((project, index) => {
        const { id, title, projectType, wip } = project;
        return (
          <Link
            key={id}
            to={`/projects/${id}`}
            className="flex flex-col px-6 text-lg"
          >
            <h3
              className="text-4xl font-medium hover:scale-[103%] transition-all duration-300 transition mb-1"
            >
              {title} {wip && <span>(wip)</span>}
            </h3>
            <p className="text-xs"
            >{projectType}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
