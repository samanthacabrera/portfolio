import React from 'react';

const Resume = () => {
    const resumeDownloadLink = process.env.PUBLIC_URL + '/images/samanthaCabreraResume.pdf';

    return (
        <>
            <section id="resume" className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-8 text-gray-500">
                <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold my-4">Samantha Cabrera</h3>
                    <p className="text-sm mb-1">Denver, CO | 626-233-9887 | samantha.n.cabrera@gmail.com</p>
                    <p className="text-sm mb-1">
                        <a href="https://www.linkedin.com/in/samcabreraa/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">LinkedIn</a> | 
                        <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="text-black hover:underline"> GitHub</a> | 
                        <a href="https://samoontha.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline"> Portfolio</a>
                    </p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Summary</h4>
                    <p className="text-sm text-black">
                        I am a software engineer with a strong passion for full-stack web development, particularly in crafting engaging visual design components. Educated at Arizona State University and trained at FlatIron School, I gained technical skills in both front-end and back-end development. My passion project, RecipeRoots, showcases my ability to integrate creative design with robust functionality, demonstrating my commitment to delivering high-quality solutions.
                    </p>
                    <p className="mt-2 text-sm text-black">
                        In addition to my technical skills, my experience as a barista has honed my attention to detail and my capacity to excel in fast-paced, high-pressure environments—skills that translate directly into my work as a developer. I am committed to leveraging my skills to deliver impactful solutions and eager to contribute to a collaborative team environment.
                    </p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Skills</h4>
                    <ul className="list-disc list-inside text-sm text-black">
                        <li>HTML, CSS, JavaScript, React.js, Tailwind CSS, Python, Flask Framework, SQL, Postman, Vite, Supabase, Responsive Design, UX/UI Design, RESTful APIs, and Git.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Projects</h4>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Recipe Roots - <a href="https://github.com/your-recipe-roots" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a> | <a href="https://recipe-roots.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Walkthrough</a></h5>
                        <p className="text-sm text-black">
                            Recipe Roots is an online platform designed for sharing family recipes, with the goal of preserving and sharing authentic, culturally accurate dishes with a global audience.
                            <ul className="list-disc list-inside mt-2">
                                <li>Utilized Flask for backend development, enabling efficient data management and retrieval.</li>
                                <li>Implemented secure user authentication and authorization using Clerk for seamless sign-up and login processes.</li>
                                <li>Ensured cross-browser compatibility and responsive design for optimal user experience on desktops, tablets, and mobile devices.</li>
                                <li>Leveraged Cloudinary to securely manage image uploads and storage for recipe creator photos.</li>
                                <li>Implemented user-friendly interfaces for recipe submissions and browsing using React.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Yogi API - <a href="https://github.com/your-yogi-api" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a> | <a href="https://yogi-api.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Visit Site</a></h5>
                        <p className="text-sm text-black">
                            This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.
                            <ul className="list-disc list-inside mt-2">
                                <li>Designed RESTful endpoints to facilitate easy integration of yoga pose data into applications.</li>
                                <li>Published detailed API documentation to support developers in integrating and using the API.</li>
                                <li>Utilized Flask for backend services and SQLAlchemy for database management.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Eat By Season - <a href="https://github.com/your-eat-by-season" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a> | <a href="https://eat-by-season.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Walkthrough</a></h5>
                        <p className="text-sm text-black">
                            A web application designed to inform users about seasonal produce available in their region.
                            <ul className="list-disc list-inside mt-2">
                                <li>Implemented location-based data retrieval using IP address and coordinates.</li>
                                <li>Utilized Supabase for database management and data storage.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Gratitude Globe - <a href="https://github.com/your-gratitude-globe" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a> | <a href="https://gratitude-globe.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Walkthrough</a></h5>
                        <p className="text-sm text-black">
                            Developed an interactive platform to foster daily gratitude practice and positive thinking using React and Flask.
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Experience</h4>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Starbucks, Denver, CO</h5>
                        <p className="text-sm text-gray-600">Barista | Jun 2021 - Jan 2024</p>
                        <ul className="list-disc list-inside text-sm text-black">
                            <li>Optimized daily operations by improving workflow processes, demonstrating strong organizational skills and the ability to identify and implement efficiencies—skills relevant to software development and system design.</li>
                            <li>Maintained high accuracy and attention to detail in a fast-paced environment, reflecting precision and pattern recognition abilities crucial for coding and troubleshooting.</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Education</h4>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Flatiron School, Denver, CO</h5>
                        <p className="text-sm text-gray-600">Full-Stack Software Engineering Bootcamp | Feb 2024 - May 2024</p>
                    </div>
                    <div className="mb-4">
                        <h5 className="font-semibold text-sm text-black">Arizona State University, Online</h5>
                        <p className="text-sm text-gray-600">MAT 267 Calculus for Engineers III | A+</p>
                        <p className="text-sm text-gray-600">CSE 110 Principles of Programming | A-</p>
                    </div>
                </div>
            </section>
            <div className="text-center py-20">
                <a
                    href={resumeDownloadLink}
                    download="samanthaCabreraResume.pdf"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Download Resume
                </a>
            </div>
        </>
    );
};

export default Resume;
