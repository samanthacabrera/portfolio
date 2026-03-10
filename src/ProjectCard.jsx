const ProjectCard = ({ project, isOpen, onToggle }) => {
  if (!project) return null;

  return (
    <article>
      <button onClick={onToggle} className="text-left w-full">
        <h3 className="text-lg md:text-xl font-medium tracking-tight">
          {project.title}
          <span className="ml-2">{project.year}</span>
          {project.wip && <span className="ml-2 text-xs opacity-80">(wip)</span>}
        </h3>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden opacity-80">
          <p>{project.insights}</p>

          <div className="space-y-2 text-sm">
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i}>— {feature}</li>
              ))}
            </ul>

            <div className="flex gap-4 text-xs uppercase tracking-[0.2em] pt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition p-1"
              >
                Github
              </a>

              {project.deployed && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition p-1"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;