import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useHistory } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
      <nav className={`fixed top-0 w-full z-50 ${isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300 ease-in-out`}>
        <div className={`absolute top-4 left-4 ${isMenuOpen ? 'hidden' : 'block'} md:hidden`}>
          <button onClick={toggleMenu} className="p-2 text-xl">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </button>
        </div>
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'} hidden md:flex`}>
          <a id="homeIcon" href="/" onClick={() => setIsMenuOpen(false)} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
            {/* Sam<span className="inline-block transition-transform transform hover:rotate-6 hover:-translate-y-1 duration-300 ease-in-out"> Cab</span> */}
            Home
          </a>
          <button onClick={() => handleNavigation('intro')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">About</button>
          <button onClick={() => handleNavigation('projects')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Projects</button>
          <button onClick={() => handleNavigation('blog')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Blog</button>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="block transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center">
            GitHub 
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-10 text-lg text-gray-600 flex flex-col justify-center items-center z-50 md:hidden">
          <div className="relative bg-gray-300 bg-opacity-70 border border-gray-300 shadow-lg rounded-lg p-4 w-full max-w-sm space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-2 left-4 text-gray-600">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('intro')} 
                className="block w-full bg-blue-200 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full bg-red-100 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full bg-orange-100 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
              >
                Blog
              </button>
              <a 
                href="https://linkedin.com/in/samcabreraa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-indigo-200 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-red-100 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub 
              </a>
              <a 
                href="https://leetcode.com/u/samcab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-indigo-200 bg-opacity-50 rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-300 hover:border-gray-200"
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
