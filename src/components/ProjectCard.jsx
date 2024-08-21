import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, thumbnail, currentlyWorkingOn }) => {
    return (
        <div className="relative group w-full sm:w-80 md:w-96 h-64 overflow-hidden rounded-lg shadow-lg">
            <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {currentlyWorkingOn && (
                <div className="absolute top-2 right-2 z-10 opacity-80 bg-gray-400 text-white rounded-full px-3 py-1 text-sm font-bold">
                    WIP
                </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-70 text-gray-50 flex flex-col justify-center items-center p-2 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                <h3 className="text-4xl">{title}</h3>
                <p className="text-sm w-4/5">{description}</p>
                <Link
                    to={`/projects/${id}`}
                    className="btn-light"
                >
                    View Project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
