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
    <>
      <div id="home" className="hero" ref={contentRef}>
        <div className="content overflow-hidden w-fit h-fit">
          <h1>Hello World,</h1>
          <h2>I'm Sam!</h2>
  
        </div>
      </div>
      <div className="text-center m-20">
        <p className="pb-2">Discover more below</p>
        <p>&darr;</p>
      </div>
      
    </>
  );
}

export default Home;

