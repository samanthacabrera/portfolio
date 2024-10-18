import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, currentlyWorkingOn }) => {
    return (
        <div className="relative group w-fit h-[150px] px-6 rounded-lg flex flex-col justify-center items-center border-2 border-current transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Link
                to={`/projects/${id}`}
            >
            <h3 className="text-2xl tracking-wide">
                {title} &rarr;
            </h3>
            <p className="text-sm tracking-wide max-w-xs font-light">
                {description}
            </p>
            </Link>
        </div>
    );
};

export default ProjectCard;
