import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './App.css'; 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

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

  // Check if the current route is '/demos', '/portfolio', or '/cat'
  const isSpecialRoute = location.pathname === '/demos' || location.pathname === '/portfolio' || location.pathname === '/cat';

  // Check if the current route is not a special route or if the navbar is shown
  const shouldShowNavbar = isSpecialRoute || showNavbar;

  // Add the 'fixed' class if the navbar should be fixed to the top of the screen
  const navbarClass = `navbar bg-red-400 ${shouldShowNavbar ? 'show' : 'hide'} ${isSpecialRoute ? 'fixed' : ''}`;

  return (
    <nav className={navbarClass}>
      <ul className="flex flex-row justify-between align-between">
        <li className="p-4"><a href="/">Home</a></li>
        <li className="p-4"><a href="/">About</a></li>
        <li className="p-4"><a href="/">Work</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
