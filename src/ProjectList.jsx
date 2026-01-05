import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

const ProjectList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalProjects = projects.length;
  const currentProject = projects[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalProjects - 1 : prev - 1
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center relative">
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={goPrev}
          className="text-4xl pr-8 z-10 hover:scale-110 transition"
          aria-label="Previous project"
        >
          ˂
        </button>

        <div className="w-full max-w-xl text-center transition-all duration-500">
          <h3 className="text-3xl font-medium mb-1">
            {currentProject.title}{" "}
            {currentProject.wip && <span>(wip)</span>}
          </h3>
          <p className="mb-4">
            {currentProject.projectType}
          </p>
          <ProjectCard project={currentProject} />
        </div>

        <button
          onClick={goNext}
          className="text-4xl pl-8 z-10 hover:scale-110 transition"
          aria-label="Next project"
        >
           ˃
        </button>
      </div>
      <div className="flex gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? "bg-sky-400 scale-125"
                  : "bg-sky-400/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
