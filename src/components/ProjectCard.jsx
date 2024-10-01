import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, currentlyWorkingOn }) => {
    return (
        <div className="relative group w-full sm:w-80 md:w-96 h-72 bg-black bg-opacity-5 rounded-lg shadow-lg flex flex-col justify-center items-center text-center p-6 space-y-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
            {currentlyWorkingOn && (
                <div className="absolute top-4 left-4 bg-gray-300 text-black font-bold rounded-full px-3 py-1 text-xs uppercase tracking-widest shadow-md">
                    WIP
                </div>
            )}
            <h3 className="text-black text-2xl tracking-wide">
                {title}
            </h3>
            <p className="text-black text-sm leading-loose tracking-wide max-w-xs font-light">
                {description}
            </p>
            <Link
                to={`/projects/${id}`}
                className="uppercase text-black text-sm tracking-wide font-semibold hover:underline"
            >
                Explore
            </Link>
        </div>
    );
};

export default ProjectCard;
