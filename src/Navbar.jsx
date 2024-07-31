import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed inset-0 pointer-events-none text-xl">
        <div className="pointer-events-auto absolute top-4 left-4">
          <a id="homeIcon" href="/">Sam<span className="inline-block hover:rotate-6 hover:-translate-y-1 transition duration-300 ease-in-out"> Cab</span></a>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 md:hidden">
          <button onClick={toggleMenu} className="pointer-events-auto">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4 hidden md:flex space-x-4">
          <button onClick={() => handleNavigation('projects')} className="pointer-events-auto">Work</button>
          <button onClick={() => handleNavigation('blog')} className="pointer-events-auto">Blog</button>
          <a href="/about">About</a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center md:hidden">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-center">
            <button onClick={() => handleNavigation('projects')} className="block w-full text-xl">Work</button>
            <button onClick={() => handleNavigation('blog')} className="block w-full text-xl">Blog</button>
            <a href="/about" className="block w-full text-xl">About</a>
          </div>
        </div>
      )}

      <footer className={`fixed max-w-fit bottom-4 rounded-full backdrop-blur-md inset-x-1/2 transform -translate-x-1/2 transition duration-500 ease-in-out ${showFooter ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="flex justify-center items-center space-x-8 py-2 px-4">
          <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://leetcode.com/u/samcab/" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faCode} size="2x" /> 
          </a>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
