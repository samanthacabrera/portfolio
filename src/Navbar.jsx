import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const links = document.querySelectorAll('.scramble-hover');

    links.forEach(link => {
      const originalText = link.dataset.value;

      link.onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };

      link.onmouseout = () => {
        clearInterval(interval);
        link.innerText = originalText; 
      };
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-2 r-2 w-full text-xl z-50 transition-all duration-300 ease-in-out`}>
        <div className={`absolute top-2 left-2 ${isMenuOpen ? 'hidden' : 'block'} md:hidden`}>
          <button onClick={toggleMenu} className="text-xl">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </button>
        </div>
        <div className={`absolute top-2 left-4 flex flex-col items-start space-y-1 ${isMenuOpen ? 'hidden' : 'block'} hidden md:flex`}>
          <a 
            id="homeIcon" 
            href="/" 
            onClick={() => setIsMenuOpen(false)} 
            className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ Home"
          >
          + Home
          </a>
          <button 
            onClick={() => handleNavigation('intro')} 
            className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ About"
          >
           + About
          </button>
          <button 
            onClick={() => handleNavigation('projects')} 
            className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ Projects"
          >
          + Projects
          </button>
          <button 
            onClick={() => handleNavigation('blog')} 
            className="transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ Articles"
          >
          + Articles
          </button>
          <a 
            href="https://github.com/samanthacabrera" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ GitHub"
          >
          + GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/samcabreraa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
            data-value="+ LinkedIn"
          >
          + LinkedIn
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-10 text-lg text-gray-600 flex flex-col justify-center items-center z-50 md:hidden">
          <div className="relative text-gray-50 bg-black shadow-lg rounded-lg p-4 w-full max-w-sm space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-2 left-4">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="Home"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('intro')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="About"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="Projects"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="Blog"
              >
                Blog
              </button>
              <a 
                href="https://github.com/samanthacabrera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="GitHub"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/samcabreraa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="LinkedIn"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
