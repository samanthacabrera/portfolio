import React from 'react';
import { FaCoffee } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 bg-opacity-10 border-t border-gray-200 py-12 mt-24 flex items-center">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Logo or Brand */}
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base">
            This website was made <br /> with love by{' '}
            <a
              href="https://github.com/samanthacabrera"
              className="font-bold text-xl hover:text-gray-200 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Cabrera
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-row space-x-8">
          <a
            href="/"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Home
          </a>
          <a
            href="#intro"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#blog"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Blog
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center md:text-right">
          <p className="text-lg">
            Want to support my work?{' '}
            <a
              href="https://buymeacoffee.com/samcab"
              className="flex items-center text-base font-medium hover:text-gray-200 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee <FaCoffee className="ml-2 text-lg" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
