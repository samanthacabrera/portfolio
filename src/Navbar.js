import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [showFooter, setShowFooter] = useState(false);

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

  return (
    <>
      <nav className="fixed inset-0 pointer-events-none">
        <div className="pointer-events-auto absolute top-4 left-4">
          <a id="homeIcon" href="/">Sam<span className="inline-block hover:rotate-6 hover:-translate-y-1 transition duration-300 ease-in-out"> Cab</span></a>
        </div>
        <div className="pointer-events-auto absolute top-4 right-4">
          <a href="/projects">Projects</a>
        </div>
        <div className="pointer-events-auto absolute bottom-4 left-4">
          <a href="/blog">Blog</a>
        </div>
        <div className="pointer-events-auto absolute bottom-4 right-4">
          <a href="/about">About</a>
        </div>
      </nav>
      <footer className={`fixed max-w-fit bottom-4 rounded-full backdrop-blur-sm inset-x-1/2 transition-opacity duration-500 ease-in-out ${showFooter ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="flex justify-center items-center space-x-8 py-2 px-4">
          <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://codepen.io/samanthacabrera" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a href="https://open.spotify.com/user/samantha.n.cabrera?si=mAb874ggRgu9g60cUOlMPw" target="_blank" rel="noopener noreferrer" className="icon-link hover:-translate-y-1 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
