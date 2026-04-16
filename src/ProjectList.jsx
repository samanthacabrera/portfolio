import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

const ProjectList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="flex flex-col items-center h-screen w-full max-w-2xl mx-8 md:mx-auto">
      <section className="w-full mt-auto">
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
      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="text-sm mt-auto mb-2 cursor-none hover:-translate-y-0.5 transition">Made with ❤️</a>
    </div>
  );
};

export default ProjectList;