import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

const ProjectList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-8 md:mx-auto pb-12">
      <section className="w-full">
        <div className="flex flex-col divide-y divide-[#0b055b]/30">
          {projects.map((project, index) => (
            <div key={index} className="py-3 hover:scale-[101%] hover:bg-white/30 transition-all duration-300 ease-out">
              <ProjectCard
                project={project}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectList;