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
        <span
          onClick={() => handleNavClick("/portfolio")}
          className="text-xl"
          style={{ cursor: "pointer" }}
        >
          Portfolio &rarr;
        </span>
      )}

      {location.pathname === "/portfolio" && (
        <div>
          <div className="text-2xl text-center py-80">Coming soon......</div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
