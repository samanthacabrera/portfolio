import React from 'react';
import Contact from '../pages/homepage/Contact';

const Footer = () => {
  return (
    <footer className="text-xs py-4">
      <div className="flex justify-around items-center space-y-1 sm:space-y-0"> 
        <div className="fixed bottom-1 left-4">
          <Contact/>
        </div>

        <div className="group fixed bottom-1 right-4">
          <p className="hidden sm:inline">
            made with love by{' '}
            <a
              href="https://github.com/samanthacabrera"
              className="italicg group-hover:text-cyan-600 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Cabrera
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
