import React, { useState } from "react";

function Hero() {
  const resumeDownloadLink = '/samanthaCabreraResume.pdf';

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen flex">
      <div className="group flex flex-col justify-center space-y-4 text-left w-full lg:w-1/2 p-8">
        <h1 className="text-4xl lg:text-6xl tracking-wider mb-2">
          Hello world!<br /> 
          I'm <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500">Sam</span> :)
        </h1>
        <p className="text-lg tracking-tight max-w-lg">
          I'm a full-stack software engineer based in Denver, specializing in web development and UX/UI design. 
          I'm <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-200">passionate</span> about creating digital solutions that seamlessly combine <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-500">creativity</span> and <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-700">functionality</span>. 
          Through this fusion, I find fulfillment and purpose in my work.
        </p>

        <a 
          href={resumeDownloadLink}  
          download="samanthaCabreraResume.pdf" 
          className="hover:scale-105 transition duration-500 self-start border-2 border-current rounded-full mt-1 px-4 py-2 text-xs "
        >
          <span className="group-hover:text-slate-100 group-hover:text-opacity-60 transition duration-500 delay-1000">
          Download Resume
          </span>
        </a>
      </div>

      <div 
        className="w-1/2 self-center hidden lg:flex flex-col items-center pl-24 relative"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >

        <img 
          src="/me.png" 
          alt="Sam"
          style={{ objectPosition: '25% 50%' }}
          className="rounded-lg shadow-md object-cover h-[450px] w-[330px] transition-transform duration-1000 ease-in-out transform"
        />

        <div 
          className={`self-end mt-2 mr-8 transform transition-opacity duration-500 ease-in-out text-xs ${isHovered ? 'opacity-60' : 'opacity-0'}`}
        >
          <p> &#x1F4CD; Newport Beach, CA</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
