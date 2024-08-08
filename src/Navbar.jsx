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
          <a id="homeIcon" href="/" onClick={() => setIsMenuOpen(false)} className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">
            Home
          </a>
          <button onClick={() => handleNavigation('intro')} className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">About</button>
          <button onClick={() => handleNavigation('projects')} className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">Projects</button>
          <button onClick={() => handleNavigation('blog')} className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">Blog</button>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="block transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out flex items-center">
            GitHub
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-10 text-lg text-gray-600 flex flex-col justify-center items-center z-50 md:hidden">
          <div className="relative bg-gray-50 bg-opacity-95 border border-gray-300 shadow-lg rounded-lg p-4 w-full max-w-sm space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-2 left-4 text-gray-600">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('intro')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                Blog
              </button>
              <a 
                href="https://linkedin.com/in/samcabreraa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
