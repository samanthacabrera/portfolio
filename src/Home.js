import React, {useRef, useEffect} from "react";

function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const content = contentRef.current;
      const {clientX, clientY} = event;
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
<<<<<<< HEAD
      <div id="home" className="w-screen h-screen flex items-center justify-center" ref={contentRef}>
        <div className="content overflow-hidden w-fit h-fit">
=======
      <div id="home" className="hero" ref={contentRef}>
        <div className="fixed content md:text-9xl text-5xl overflow-hidden w-[120%] h-fit my-24 py-24 pr-16 md:pr-30">
>>>>>>> fcfdafb9507fc833128dd730cbcb1184a57607c5
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

