import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, imageUrl, tags }) => {
    return (
        <div className="bg-slate-900 opacity-70 rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full min-h-max object-cover opacity-100" />
            <div className="p-4 opacity-100">
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-left mb-4">{description}</p>
                <div className="flex flex-wrap mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-gray-400 hover:text-gray-900 transition duration-300 ease-in-out"
                            style={{ cursor: "pointer" }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    to={`/projects/${id}`}
                    className="border border-2-white text-white py-2 px-4 rounded-full inline-block hover:bg-gray-700 transition duration-300 ease-in-out"
                    style={{ textDecoration: "none" }}
                >
                    View Project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;