import React from "react";

function Hero({ is3DView }) {
  return (
    <div className="">
      <p className={`${is3DView ? "relative justify-center items-center translate-y-[20vh] max-w-4xl text-md md:text-lg" : "group relative"} `}>
        <span className={`${is3DView ? "inline" : "block my-6"}`}>
          Hello world, my name is 
          <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-100"> Sam</span>. 
        </span>

          <span className="px-1">I am equal parts web developer and yogi.
          </span>

        {!is3DView && (
          <span>
            I am equal parts 
            <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300"> web developer </span> 
            and 
            <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500"> yogi</span>.  
             I spend my days maintaining and improving 
            <a href="https://learnyoga.online/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-orange-500 md:text-inherit group-hover:text-orange-500 transition duration-500 delay-700"> Learn Yoga Online</a>, 
            and my nights building 
            <a href="https://yarnsara-samanthacabreras-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-700"> Yarnsara</a>.
          </span>
        )}

        {is3DView && (
          <>
          <span className="px-1">
             To learn more about me & what I do, interact with the scene below. 
          </span> 
          <span className="text-white/70">
            To interact with the 3D scene, you can click on the objects or hold and rotate to explore.
          </span>
          </>
        )}
      </p>
    </div>
  );
}

export default Hero;
