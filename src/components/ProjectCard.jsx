import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, currentlyWorkingOn }) => {
    return (
        <div className="relative group flex flex-col justify-center items-start border-b border-current transition-transform duration-300 ease-in-out transform hover:scale-105 p-2">
            <Link to={`/projects/${id}`} className="w-full">
                <h3 className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-300 text-2xl tracking-wide mb-2">
                    {title} &rarr;
                </h3>
                <p className="font-light">
                    {description}
                </p>
            </Link>
        </div>
    );
};

export default ProjectCard;
