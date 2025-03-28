import React from "react";

function Hero({ is3DView }) {
  return (
    <>
      <p className={`${is3DView ? "absolute top-32" : "group relative"} text-sm md:text-lg md:max-w-2xl mx-8 md:mx-auto`}>
        <span className={`${is3DView ? "inline" : "block my-6"}`}>
          Hello world, my name is 
          <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-100"> Sam</span>. &nbsp;
        </span>

          <span>I am equal parts web developer and yogi
          </span>. 

        {!is3DView && (
          <span>
            I am equal parts 
            <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300"> web developer </span> 
            and 
            <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500"> yogi</span>.  &nbsp;
             I spend my days maintaining and improving 
            <a href="https://learnyoga.online/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-orange-500 md:text-inherit group-hover:text-orange-500 transition duration-500 delay-700"> Learn Yoga Online</a>, 
            and my nights building 
            <a href="https://yarnsara-samanthacabreras-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-700"> Yarnsara</a>.
          </span>
        )}

        {is3DView && (
          <>
          <span>
             To learn more about me & what I do, interact with the scenes below. &nbsp;
          </span>
          <span className="opacity-60">
            To interact with the 3D scene, you can click on the objects or hold and rotate to explore.
          </span>
          </>
        )}
      </p>
    </>
  );
}

export default Hero;
