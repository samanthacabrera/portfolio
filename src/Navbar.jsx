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

  const gradientColors = [
    'rgba(102, 77, 0, 0.7)',   // Earthy Brown
    'rgba(110, 42, 12, 0.7)',  // Earthy Red-Brown
    'rgba(105, 19, 18, 0.7)',  // Earthy Deep Red
    'rgba(93, 9, 51, 0.7)',    // Earthy Purple
    'rgba(41, 25, 56, 0.7)',   // Earthy Dark Purple
    'rgba(4, 45, 58, 0.7)',    // Earthy Dark Blue
    'rgba(18, 64, 60, 0.7)',   // Earthy Teal
    'rgba(71, 82, 0, 0.7)'     // Earthy Olive Green
  ];

  const getRandomGradient = () => {
    return gradientColors[Math.floor(Math.random() * gradientColors.length)];
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
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="1x" />
          </button>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 hidden md:flex space-x-4">
          <button onClick={() => handleNavigation('projects')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Work</button>
          <button onClick={() => handleNavigation('blog')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">Blog</button>
          <button onClick={() => handleNavigation('about')} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">About</button>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="block w-full text-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">GitHub</a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
          <div className="relative bg-gray-400 bg-opacity-30 rounded-lg shadow-lg p-8 space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-gray-600">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
              >
                Work
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
              >
                About
              </button>
              <a 
                href="https://linkedin.com/in/samcabreraa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
              <a 
                href="https://leetcode.com/u/samcab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-xl text-white rounded-lg p-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                style={{ backgroundColor: getRandomGradient() }}
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
