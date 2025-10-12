import { Link } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectList = () => {
  
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <div className="grid grid-cols-1 gap-4 px-4">
      {sortedYears.map((year) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{year}</h2>
          {projectsByYear[year].map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="flex flex-col text-lg mb-2"
            >
              <h3 className="text-4xl font-medium hover:scale-[103%] transition-all duration-300">
                {project.title} {project.wip && <span>(wip)</span>}
              </h3>
              <p className="text-xs">{project.projectType}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
