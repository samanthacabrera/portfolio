import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useHistory } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const isSpecialPage = location.pathname !== '/';

  const handleNavigation = (hash) => {
    if (isSpecialPage) {
      history.push('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with id ${hash} not found.`);
        }
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Element with id ${hash} not found.`);
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <nav className="fixed inset-0 pointer-events-none text-xl">
        <div className="pointer-events-auto absolute top-4 left-4">
          <a id="homeIcon" href="/" onClick={() => setIsMenuOpen(false)} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
            Sam<span className="inline-block transition-transform transform hover:rotate-6 hover:-translate-y-1 duration-300 ease-in-out"> Cab</span>
          </a>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 md:hidden">
          <button onClick={toggleMenu} className="pointer-events-auto">
            <FontAwesomeIcon 
              icon={faBars} 
              size="1x" 
              className={isMenuOpen ? 'hidden' : ''} 
            />
          </button>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 hidden md:flex space-x-4">
          <button onClick={() => handleNavigation('intro')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">About</button>
          <button onClick={() => handleNavigation('projects')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Projects</button>
          <button onClick={() => handleNavigation('blog')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Blog</button>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="block w-full text-xl transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center">
            GitHub <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-20 flex flex-col justify-center items-center z-50">
          <div className="relative bg-gray-200 bg-opacity-50 shadow-lg rounded-lg p-4 w-full max-w-sm space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-2 right-4 text-gray-600 text-xl">
              <FontAwesomeIcon icon={faTimes}  />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('intro')} 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#f8c8c4' }} 
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#b0c4de' }} 
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#f5e0d1' }} 
              >
                Blog
              </button>
              <a 
                href="https://linkedin.com/in/samcabreraa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#c3d6c4' }} 
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#d5c8e2' }} 
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub 
              </a>
              <a 
                href="https://leetcode.com/u/samcab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-gray-800 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                style={{ backgroundColor: '#f0d4c3' }} 
                onClick={() => setIsMenuOpen(false)}
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
 