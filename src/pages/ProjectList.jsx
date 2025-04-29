import React from "react";
import { Link } from "react-router-dom";
import projects from '../data/projectsData';

const ProjectList = () => {
    return (
        <div className="flex flex-col max-w-2xl w-full">
            <div className="flex flex-col items-start space-y-2"> 
                {projects.map((project, index)=> {
                    const { id, title, projectType, wip } = project; 
                    const hoverClasses = [
                        "hover:text-lime-600", 
                        "hover:text-pink-600", 
                        "hover:text-yellow-500", 
                        "hover:text-cyan-600", 
                        "hover:text-orange-600"
                    ];

                    return (
                        <Link key={id} to={`/projects/${id}`}>
                            <div className="relative group flex items-center lg:mx-0"> 
                                <h3 className={`text-lg ${hoverClasses[index % hoverClasses.length]} transition duration-300`}>
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

export default ProjectList;
