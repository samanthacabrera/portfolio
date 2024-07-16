import React from "react";

const ProjectCard = ({ title, description, imageUrl, tags }) => {
    return (
        <div className="bg-slate-900 opacity-70 rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full min-h-max object-cover opacity-100" />
            <div className="p-4 opacity-100">
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-left mb-4">{description}</p>
                <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
