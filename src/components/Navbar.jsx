import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSpecialPage = location.pathname !== '/';

  const handleNavigation = (hash) => {
    if (isSpecialPage) {
      navigate('/');
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

  return (
    <>
      <nav>
        {isSpecialPage && (
          <div className="absolute top-2 left-2">
            <button 
              onClick={() => handleNavigation('/')} 
              className="text-xs"
            >
            take me home!
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
