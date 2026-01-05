const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="w-full bg-white/70 rounded-3xl p-6 space-y-4 transition-all duration-300">
      <div>
        <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
          Tech Stack
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 text-sm">
          {project.techStack.map((tech, i) => (
            <li key={i} className="font-semibold tracking-wide">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
          Features
        </h3>
        <ul className="space-y-1 text-sm font-medium">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase font-extrabold tracking-widest mb-2 underline decoration-wavy decoration-indigo-400">
          What I Learned
        </h3>
        <p className="text-sm leading-relaxed font-medium">{project.insights}</p>
      </div>

      <div className="flex justify-center space-x-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center  py-1 px-4 md:px-8 text-xs font-bold uppercase rounded-full border border-[#0b055b] bg-pink-200/80 hover:scale-105 transition-all duration-200"
        >
          GitHub
        </a>

        {project.deployed && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-1 px-4 md:px-8 text-xs font-bold uppercase rounded-full border border-[#0b055b] bg-orange-200/80 hover:scale-105 transition-all duration-200"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
