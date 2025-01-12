import React from "react";
import { Link } from "react-router-dom";
import projects from '../../data/projectsData';

const Projects = () => {
    return (
     
            <div className="h-screen flex flex-col justify-center space-y-4 text-left">
                <h2 className="text-4xl lg:text-6xl">Check out my work...</h2>
                <div className="flex flex-col pt-4 space-y-1">
                    {projects.map((project) => {
                        const { id, title, wip } = project; 
                        return (
                            <Link key={id} to={`/projects/${id}`}>
                                <div className="relative">
                                    <h3 className="hover:text-cyan-600 transition duration-300 text-2xl tracking-wide mb-2">
                                        {title}
                                    </h3>
                                    {wip && (
                                        <span className="absolute top-0 right-2 text-sm">
                                            (wip)
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        
    );
};

export default Projects;
