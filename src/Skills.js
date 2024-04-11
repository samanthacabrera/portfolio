import React from "react";

function Skills(isDarkMode) {
    return (
        <div id="skills">
            <h2 className="text-lg mb-16">Skillset</h2>
            <ul>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>React.js</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Tailwind</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>JavaScript</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Framer-Motion</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>HTML</li>
            </ul>
            <ul>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>CSS</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Sass</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Responsive UI</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Node</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Express</li>
            </ul>
            <ul>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>JSON</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Postman</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Git</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>SQL</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Python</li>
                <li className={`hover-effect ${isDarkMode ? 'hover:text-slate-50' : 'hover:text-black'}  hover:border-gray-200 transition duration-500 text-black`}>Flask</li>
            </ul>
        </div>
    )
}

export default Skills