import React from 'react';
import { FaCoffee } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-xs text-gray-200 bg-gray-600 bg-opacity-10 border-t border-gray-200 py-12 mt-24 flex items-center">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Logo or Brand */}
        <div className="text-center md:text-left">
          <p>
            This website was made <br /> with love by{' '}
            <a
              href="https://github.com/samanthacabrera"
              className="font-bold  hover:text-gray-100 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Cabrera &#10084;
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-row space-x-12 text-sm">
          <a
            href="/"
            className="hover:text-gray-100 transition duration-200"
          >
            Home
          </a>
          <a
            href="#intro"
            className="hover:text-gray-100 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-gray-100 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#blog"
            className="hover:text-gray-100 transition duration-200"
          >
            Blog
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center md:text-right">
          <p className="">
            Want to support my work?{' '}
            <a
              href="https://buymeacoffee.com/samcab"
              className="block font-bold hover:text-gray-200 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee <FaCoffee className="inline" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
