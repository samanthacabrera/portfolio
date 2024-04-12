import React from "react";

function Skills(isDarkMode) {
    return (
        <div id="skills">
            <h2 className="text-lg mb-16">Skillset</h2>
            <ul className="flex flex-row justify-between">
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>React.js</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Tailwind</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>JavaScript</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Framer-Motion</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>HTML</li>
            </ul>
            <ul className="flex flex-row justify-between">
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>CSS</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Sass</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Responsive UI</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Node</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Express</li>
            </ul>
            <ul className="flex flex-row justify-between">
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>JSON</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Postman</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Git</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>SQL</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Python</li>
                <li className='hover:text-slate-50 transition duration-300 py-2 px-3 m-10'>Flask</li>
            </ul>
        </div>
    )
}

export default Skills