import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectList = ({ is3DView } ) => {
  return (
    <div
      className={`${
        is3DView ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" : "grid grid-cols-1 gap-2"
      }`}
    >
      {projects.map((project, index) => {
        const { id, title, projectType, wip } = project;
        return (
          <Link
            key={id}
            to={`/projects/${id}`}
            className={`flex flex-col ${ is3DView ? "text-center" : "text-lg"}`}
          >
            <div className={`${ is3DView ? "text-4xl" : "hidden"}`}>📄</div>
            <h3
              className={`mb-1 ${ is3DView ? "text-sm" : "text-4xl hover:scale-[103%] transition duration-300"} transition`}
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
