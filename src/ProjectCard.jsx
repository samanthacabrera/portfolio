import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, imageUrl, currentlyWorkingOn }) => {
    return (
        <div className="relative bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {currentlyWorkingOn && (
                <div className="absolute top-2 right-2 inline-block bg-gray-400 text-white rounded-full px-3 py-1 font-bold mr-2 mb-2">
                    WIP
                </div>
            )}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-gray-700 flex-grow overflow-hidden" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}>
                    {description}
                </p> 
                <Link
                    to={`/projects/${id}`}
                    className="mt-auto inline-block bg-gray-800 text-white rounded-full px-4 py-2 font-bold transition-transform transform hover:scale-105 duration-300"
                    style={{ textDecoration: "none" }}
                >
                    View Project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
