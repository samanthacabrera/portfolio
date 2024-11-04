import React from 'react';
import Contact from '../pages/homepage/Contact';

const Footer = () => {
  return (
    <footer className="text-xs bg-black bg-opacity-5 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center space-y-1 sm:space-y-0"> 
        <div className="flex md:absolute left-4">
          <Contact/>
        </div>

        <div className="text-center">
          <p>
            This website was made with love by{' '}
            <a
              href="https://github.com/samanthacabrera"
              className="italic hover:text-gray-300 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Cabrera <span className="hidden sm:inline">&#x2197;</span>
            </a>
          </p>
        </div>


        {/* <div className="text-center md:text-right">
          <p>
            Want to support my work?{' '}
            <a
              href="https://buymeacoffee.com/samcab"
              className="italic hover:text-gray-300 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee <span className="hidden sm:inline">&#x2197;</span>
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
