import React from "react";

function Hero({ is3DView }) {

  return (
    <>
      <p className={`${is3DView ? "absolute top-20" : "relative"} text-justify tracking-wide text-sm md:text-lg md:max-w-2xl mx-8 md:mx-auto`}>
        <span className={`${is3DView ? "inline" : "block my-6"}`}>Hello world, my name is Sam. </span>
        I am equal parts web developer and yogi. I spend my days maintaining and improving <a href="https://learnyoga.online/" target="_blank" rel="noopener noreferrer" className="italic font-semibold opacity-90 hover:opacity-100 transition duration-200">Learn Yoga Online</a>, and my nights building <a href="https://yarnsara-samanthacabreras-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="italic font-semibold opacity-90 hover:opacity-100 transition duration-200">Yarnsara</a>.
        <span className={`${is3DView ? "visible" : "invisible"}`}> To learn more about what me & what I do interact with the scenes below.</span>
      </p>

      {is3DView && (
      <p className="absolute bottom-20 opacity-70 text-justify tracking-wide text-sm md:text-lg md:max-w-2xl mx-8 md:mx-auto">
        To interact with the 3D scene, you can click on the objects or hold and rotate to explore.
      </p>
      )}
    </>
  );
}

export default Hero;
