import React from "react";
import { Link } from "react-router-dom";
import projects from '../../data/projectsData';

const Projects = () => {
    return (
     
            <div className="flex flex-col justify-center md:items-center h-[90vh] px-4 md:px-0">
                <h2 className="text-4xl pb-4 md:pb-12">Check out my work...</h2>
                <div className="flex flex-col space-y-1 max-w-md md:max-w-4xl">
                    {projects.map((project) => {
                        const { id, title, wip } = project; 
                        return (
                            <Link key={id} to={`/projects/${id}`}>
                                <div className="relative">
                                    <h3 className="hover:text-cyan-600 transition duration-300 text-2xl tracking-wide mb-2">
                                        {title}
                                        {wip && (
                                            <span className="px-2">
                                                (wip)
                                            </span>
                                        )}
                                    </h3>
                               
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        
    );
};

export default Projects;
