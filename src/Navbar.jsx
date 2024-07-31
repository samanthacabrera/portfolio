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
      <nav className="fixed inset-0 pointer-events-none text-xl">
        <div className="pointer-events-auto absolute top-4 left-4">
          <a id="homeIcon" href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-100 transition duration-300 ease-in-out">
            Sam<span className="inline-block hover:rotate-6 hover:-translate-y-1 transition duration-300 ease-in-out"> Cab</span>
          </a>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 md:hidden">
          <button onClick={toggleMenu} className="pointer-events-auto">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="1x" />
          </button>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 hidden md:flex space-x-4">
          <button onClick={() => handleNavigation('projects')} className="pointer-events-auto hover:text-pink-100 transition duration-300 ease-in-out">Work</button>
          <button onClick={() => handleNavigation('blog')} className="pointer-events-auto hover:text-pink-100 transition duration-300 ease-in-out">Blog</button>
          <a href="/about" className="hover:text-pink-100 transition duration-300 ease-in-out">About</a>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="block w-full text-xl hover:text-pink-100 transition duration-300 ease-in-out">GitHub</a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center md:hidden z-50">
          <div className="relative bg-pink-200 bg-opacity-50 rounded-lg shadow-lg p-12 space-y-4 text-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-white ">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="mt-10 space-y-2">
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Work
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
              >
                Blog
              </button>
              <a 
                href="/about" 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="https://linkedin.com/in/samcabreraa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
              <a 
                href="https://leetcode.com/u/samcab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white hover:text-pink-100 rounded-lg p-2 transition duration-300 ease-in-out"
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
