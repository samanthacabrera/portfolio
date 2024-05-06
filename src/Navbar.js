import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add the 'fixed' class if the navbar should be fixed to the top of the screen
  const shouldShowNavbar = showNavbar;
  const navbarClass = `navbar ${shouldShowNavbar ? 'show' : 'hide'} `;

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center justify-between px-4">
        <a id="homeIcon" href="/">Sam<span> Cab</span></a>
        <div className="flex flex-row items-center space-x-20 py-2">
          <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <a href="https://codepen.io/samanthacabrera" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faCodepen} size="2x"/>
          </a>
          <a href="https://open.spotify.com/user/samantha.n.cabrera?si=mAb874ggRgu9g60cUOlMPw" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faSpotify} size="2x"/>
          </a>
        </div>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
