import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

const ProjectList = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };
  
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <div className="grid grid-cols-1 gap-4 pl-8">
      {sortedYears.map((year) => (
        <div key={year} className="mb-2">
          <h2 className="text-2xl font-bold mb-4">{year}</h2>
          {projectsByYear[year].map((project) => {
            const isOpen = openProject === project.id;
            return (
              <div key={project.id}>
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="text-4xl font-medium hover:scale-[103%] transition-all duration-300">
                    {project.title} {project.wip && <span>(wip)</span>}
                  </h3>
                </button>
                <p className="text-xs pb-1">{project.projectType}</p>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <ProjectCard project={project} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
