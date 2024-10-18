import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="mb-24 border-current border-2 p-2 rounded flex flex-col justify-center items-center space-y-4">
            <p>You can reach me at:</p>
            <div className="flex space-x-4">
                <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer">
                    <button className="hover:underline">GitHub</button>
                </a>
                <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer">
                    <button className="hover:underline">LinkedIn</button>
                </a>
            </div>
        </div>
    );
}

export default Contact;
