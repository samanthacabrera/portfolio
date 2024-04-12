import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./App.css";

function Cat() {
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
          onClick={() => handleNavClick("/cat")}
          className="text-xl"
          style={{ cursor: "pointer" }}
        >
          Click me if you dare &rarr;
        </span>
      )}

      {location.pathname === "/cat" && (
        <div>
          <div className="text-2xl text-center py-80">Coming soon......</div>
        </div>
      )}
    </>
  );
}

export default Cat;