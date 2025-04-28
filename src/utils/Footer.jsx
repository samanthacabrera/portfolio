import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer className="flex flex-col justify-center items-center p-6">
          <div className="flex space-x-6 text-xl">
              <a
                  href="https://github.com/samanthacabrera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
              >
                  <FaGithub />
              </a>
          </div>
    </footer>
  );
};

export default Footer;
