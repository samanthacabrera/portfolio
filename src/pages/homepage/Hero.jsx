import React from "react";

function Hero() {

  return (
    <div className="h-screen flex p-8">
  
      <div className="group flex flex-col justify-center space-y-4 text-left w-full p-8 relative">
        <h1 className="text-7xl lg:text-9xl tracking-tighter mb-2 relative z-10">
          Hello world!<br />
          I'm <span className="group-hover:text-orange-500 transition duration-500">Sam</span> :)
        </h1>
        <p className="tracking-tight max-w-lg relative z-10">
          I'm a full-stack software engineer based in Denver, specializing in web development and UX/UI design.
          I'm <span className="group-hover:text-lime-600 transition duration-500 delay-200">passionate</span> about creating digital solutions that combine <span className="group-hover:text-yellow-500 transition duration-500 delay-300">creativity</span> and <span className="group-hover:text-cyan-600 transition duration-500 delay-400">functionality</span>.
          Through this fusion, I find fulfillment and purpose in my work.
        </p>
        <p className="">Scroll to learn more about me</p>
      </div>
    </div>
  );
}

export default Hero;
