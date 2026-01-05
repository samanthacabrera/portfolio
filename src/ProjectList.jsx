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
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-2xl"> 
          <button
            onClick={goPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 p-1 md:p-2 hover:scale-110 transition"
            aria-label="Previous project"
          >
            <img src="/left-arrow.png" className="h-6 w-6 bg-indigo-200 rounded-full"/>
          </button>

          <ProjectCard project={currentProject} />

          <button
            onClick={goNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 p-1 md:p-2 hover:scale-110 transition"
            aria-label="Next project"
          >
            <img src="/right-arrow.png" className="h-6 w-6 bg-indigo-200 rounded-full"/>
          </button>
        </div>

        <div className="flex gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                ${index === currentIndex ? "bg-white scale-125" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
  );
};

export default ProjectList;
