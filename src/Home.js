import React, { useRef, useEffect } from "react";

function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const content = contentRef.current;
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / 5;
      const offsetY = (clientY - centerY) / 5;

      content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="home" className="w-screen h-screen flex items-center justify-center" ref={contentRef}>
      <div className="content overflow-hidden">
        <h1>Hello World, <br />
          I'm Sam
        </h1>
      </div>
    </div >
  );
}

export default Home;

