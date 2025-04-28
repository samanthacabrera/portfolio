import React from "react";

function Hero({ is3DView }) {
  return (
    <div className="w-full">

        {is3DView && (
          <p className="translate-y-[10vh]">
          Hello world, my name is Sam. Interact with the scene below to learn more about me & what I do.
          </p>
        )}

        {!is3DView && (
          <p className="group relative pt-[5vh]">
            Hello world, my name is 
          <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-100"> Sam</span>. 
            I am equal parts 
            <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300"> web developer </span> 
            and 
            <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500"> yogi</span>.  
             I spend my days improving 
            <a href="https://learnyoga.online/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-orange-500 md:text-inherit group-hover:text-orange-500 border-b border-orange-500 md:border-inherit group-hover:border-orange-500 transition-all duration-500 delay-700 mx-1">Learn Yoga Online</a>
            and my nights building
            <a href="https://yarnsara.etsy.com/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-pink-600 md:text-inherit group-hover:text-pink-600 border-b border-pink-600 md:border-inherit group-hover:border-pink-600 transition-all duration-500 delay-700 ml-1">Yarnsara</a>.
          </p>
        )}

    </div>
  );
}

export default Hero;