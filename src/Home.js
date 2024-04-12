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
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="home" className="hero" ref={contentRef}>
        <div className="content overflow-hidden w-fit h-fit">
          <h1>Hello, World</h1>
          <h2>I'm Sam!</h2>
        </div>
      </div>
      <div className="text-center pt-2 m-20">
        <p className="text-2xl pb-2">Explore further down for more</p>
        <p className="text-xs">(Please Scroll Responsibly)</p>
      </div>
      
    </>
  );
}

export default Home;
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// function Home() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       const offsetX = (clientX - centerX) / 5;
//       const offsetY = (clientY - centerY) / 5;

//       textRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div id="home" style={{ position: "relative", height: "100vh", width: "100vw", background: "black" }}>
//       <div className="content" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
//         <motion.div ref={textRef} style={{ color: "white", textAlign: "center" }} whileHover={{ scale: 1.1 }}>
//           <h1>Hello, World</h1>
//           <h2>I'm Sam!</h2>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Home;

