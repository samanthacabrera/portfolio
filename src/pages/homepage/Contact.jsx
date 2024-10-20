import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="h-[50vh] flex flex-col justify-center items-center p-8">
            <h1 className="text-xl font-bold mb-6">Let’s Connect!</h1>
            <p className="mb-12 text-center">
                Discover more about my work and passions at the links below.
            </p>
            <div className="flex space-x-16 text-5xl">
                <a
                    href="https://github.com/samanthacabrera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/samcabreraa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://medium.com/@samantha.cabrera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                >
                    <FaMedium />
                </a>
            </div>
        </div>
    );
}

export default Contact;
