import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="h-[20vh] flex flex-col justify-center items-center p-8">
         
            <div className="flex space-x-16 text-5xl">
                <a
                    href="https://linkedin.com/in/samcabreraa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/samanthacabrera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://medium.com/@samantha.n.cabrera"
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
