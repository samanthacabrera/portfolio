import React from 'react';

const Resume = () => {
    const resumeDownloadLink = process.env.PUBLIC_URL + '/images/samanthaCabreraResume.pdf';

    return (
        <>   
        <div className="text-center text-gray-200 transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:shadow-outline">
        <a
            href={resumeDownloadLink}
            download="samanthaCabreraResume.pdf"
            className="px-4 py-2 border rounded-lg shadow hover:bg-gray-800 hover:bg-opacity-50 duration-300 "
        >
            Download Resume
        </a>
        </div>
        </>
    );
};

export default Resume;
