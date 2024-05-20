import React, { useRef, useEffect } from "react";

function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / 5;
      const offsetY = (clientY - centerY) / 5;

      content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="hero" className="w-screen h-screen flex items-center justify-center">
      <div className="relative">
        <p className="p-2" style={{ position: 'absolute', top: '-50px', left: '-50px' }}>hi there,</p>
        <p ref={contentRef} className="text-9xl relative">I'm Sam!</p>
      </div>
    </div>
  );
}

export default Hero;
