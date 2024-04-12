import React, { useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function Portfolio() {
  // ROUTING
  const location = useLocation();
  const history = useHistory();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleNavClick = (route) => {
    setAnimationTriggered(true);
    setTimeout(() => {
      history.push(route);
      setAnimationTriggered(false);
    }, 500);
  };

  // PARALLAX
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const content = contentRef.current;
      if (content) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (clientX - centerX) / 5;
        const offsetY = (clientY - centerY) / 5;

        content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
  {location.pathname === "/" && (
        <motion.div
          id="portfolio"
          animate={animationTriggered ? { x: 1000 } : { x: 0 }}
          transition={{ type: "bounce", duration: 1, stiffness: 100 }}
        >
          <span onClick={() => handleNavClick("/portfolio")} className="text-xl" style={{ cursor: "pointer" }}>
            Portfolio &rarr; 
          </span>
        </motion.div>
      )}

       {location.pathname === "/portfolio" && (
        <>
          <div>
            <div className="typewriter">
              Coming soon......
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Portfolio;

