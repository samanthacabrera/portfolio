import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./App.css";

function Portfolio() {
  // ROUTING
  const location = useLocation();
  const history = useHistory();

  const handleNavClick = (route) => {
    setTimeout(() => {
      history.push(route);
    }, 500);
  };

  return (
    <>
      {location.pathname === "/" && (
        <div
          onClick={() => handleNavClick("/portfolio")}
          className="text-xl text-center"
          style={{ cursor: "pointer"}}
        >
          Portfolio &rarr;
        </div>
      )}

      {location.pathname === "/portfolio" && (
        <div className="py-64 text-2xl text-center relative z-10">currently working on something really special.........</div>
      )}
    </>
  );
}

export default Portfolio;
