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
      <nav className={`fixed top-2 r-2 w-full text-2xl z-50 transition-all duration-300 ease-in-out`}>
        <div className={`absolute top-2 left-2 ${isMenuOpen ? 'hidden' : 'block'} md:hidden`}>
          <button onClick={toggleMenu} className="text-xl">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </button>
        </div>
        <div className={`absolute top-0 left-2 flex items-start space-x-6 ${isMenuOpen ? 'hidden' : 'block'} hidden md:flex`}>
          <button 
            onClick={() => handleNavigation('hero')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ Home"
          >
           + Home
          </button>
          <button 
            onClick={() => handleNavigation('intro')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ About"
          >
           + About
          </button>
          <button 
            onClick={() => handleNavigation('projects')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ Work"
          >
          + Work
          </button>
          <button 
            onClick={() => handleNavigation('blog')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ Articles"
          >
          + Articles
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 text-lg text-gray-600 flex flex-col justify-center items-center z-50 md:hidden">
          <div className="relative text-gray-50 bg-[#0d113d] shadow-lg rounded-lg p-4 w-full max-w-sm space-y-6 text-center">
            <button onClick={toggleMenu} className="absolute top-2 left-2">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="space-y-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="home"
              >
                home
              </button>
              <button 
                onClick={() => handleNavigation('intro')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="about"
              >
                about
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="work"
              >
               work
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className="block w-full py-3 border-b border-gray-300 text-left transition-transform transform hover:-translate-y-1 duration-300 ease-in-out scramble-hover"
                data-value="articles"
              >
                articles
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
