import React from "react";
import { Link } from "react-router-dom";
import projects from '../../data/projectsData';

const ProjectsList = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-8 md:mx-auto w-full">
            <h2 className="text-2xl md:text-4xl py-4 text-center">Check out my work...</h2>
            <div className="flex flex-col items-start space-y-2 p-4"> 
                {projects.map((project) => {
                    const { id, title, description, wip } = project; 
                    return (
                        <Link key={id} to={`/projects/${id}`}>
                            <div className="relative group flex items-center mx-8 md:mx-auto"> 
                                <h3 className="text-lg hover:text-cyan-600 transition duration-300">
                                    {title}
                                    {wip && (
                                        <span className="px-2">
                                            (wip)
                                        </span>
                                    )}
                                </h3>
                                <div className="absolute top-6 translate-x-1/2 p-2 bg-gray-100 text-black rounded opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 w-[200px]">
                                    {description}
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
