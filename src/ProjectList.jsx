import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

const ProjectList = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto pb-12">
      <section className="w-full px-8">

        <div className="flex flex-col divide-y divide-[#0b055b]/30">

          {projects.map((project, index) => (
            <div
              key={index}
              className="py-3 transition-all duration-300 ease-out"
            >
              <ProjectCard project={project} />
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default ProjectList;