import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer className="flex flex-col justify-center items-center p-6">
          <div className="flex space-x-6 text-xl">
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
    </footer>
  );
};

export default Footer;
