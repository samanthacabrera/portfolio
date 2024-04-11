import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import './App.css';

function Cat() {
  const location = useLocation();
  const history = useHistory();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleNavClick = (route) => {
    setAnimationTriggered(true)
    setTimeout(() => {
      history.push(route)
      setAnimationTriggered(false)
    }, 500)
  }

  return (
    <>
      {location.pathname === "/" && (
        <motion.div
          id="cat"
          animate={animationTriggered ? { x: 1000 } : { x: 0 }}
          transition={{ type: "bounce", duration: 1, stiffness: 100 }}
        >
           <span onClick={() => handleNavClick("/cat")} className="text-xl" style={{  cursor: "pointer"}}> Cat &rarr;</span> 
        </motion.div>
      )}

      {location.pathname === "/cat" && (
        <>
        <div>
          <motion.div 
            initial={{ x: 0 }}
            animate={animationTriggered === false ? { x: 700 } : { x: 0 }}
            transition={{ type: "bounce", duration: 1, stiffness: 100}}
          >
            <div>
                Here are some cat pics... 
            </div>
          </motion.div>
        </div>
        </>
      )}
    </>
  );
}

export default Cat;

