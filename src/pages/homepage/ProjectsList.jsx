import React from "react";
import { Link } from "react-router-dom";
import projects from '../../data/projectsData';

const ProjectsList = () => {
    return (
        <div className="flex flex-col max-w-2xl w-full">
            <h2 className="text-lg md:text-2xl tracking-wider my-8 text-center">My work...</h2>
            <div className="flex flex-col items-start space-y-2"> 
                {projects.map((project) => {
                    const { id, title, projectType, wip } = project; 
                    return (
                        <Link key={id} to={`/projects/${id}`}>
                            <div className="relative group flex items-center lg:mx-0"> 
                                <h3 className="text-lg hover:text-cyan-600 transition duration-300">
                                    {title}
                                    {wip && (
                                        <span className="px-2">
                                            (wip)
                                        </span>
                                    )}
                                </h3>
                                <div className="absolute top-4 translate-x-full p-2 bg-gray-100 text-black opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 w-[200px]">
                                    {projectType}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsList;
