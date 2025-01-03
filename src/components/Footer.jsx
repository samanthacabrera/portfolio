import React from 'react';
import Contact from '../pages/homepage/Contact';

const Footer = () => {
  return (
    <footer className="text-xs py-4">
      <div className="flex justify-around items-center space-y-1 sm:space-y-0"> 
        <div className="fixed bottom-1 left-4">
          <Contact/>
        </div>

        <div className="fixed bottom-1 right-4">
          <p>
            made with love by{' '}
            <a
              href="https://github.com/samanthacabrera"
              className="italic hover:text-cyan-600 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Cabrera <span className="hidden sm:inline">&#x2197;</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
