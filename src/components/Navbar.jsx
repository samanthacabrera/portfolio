import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Navbar = () => {
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
        {/* Desktop Navigation */}
        <div className={`absolute top-0 left-2 flex items-start space-x-6 hidden md:flex`}>
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
            onClick={() => handleNavigation('services')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ Services"
          >
            + Services
          </button>
          <button 
            onClick={() => handleNavigation('blog')} 
            className="hover-effect ease-in-out scramble-hover"
            data-value="+ Articles"
          >
            + Articles
          </button>
        </div>

        {/* Mobile Navigation */}
        {isSpecialPage && (
          <div className="absolute top-0 left-4 md:hidden">
            <button 
              onClick={() => handleNavigation('/')} 
              className="text-xs pl-8"
            >
              &larr; go back home
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
