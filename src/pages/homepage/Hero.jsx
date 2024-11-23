import React, { useState } from "react";

function Hero() {
  const resumeDownloadLink = '/samanthaCabreraResume.pdf';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen flex p-8">
  
      <div className="group flex flex-col justify-center space-y-4 text-left w-full lg:w-1/2 p-8 relative">
        <h1 className="text-4xl lg:text-6xl tracking-wider mb-2 relative z-10">
          Hello world!<br />
          I'm <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500">Sam</span> :)
        </h1>
        <p className="text-lg tracking-tight max-w-lg relative z-10">
          I'm a full-stack software engineer based in Denver, specializing in web development and UX/UI design.
          I'm <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-200">passionate</span> about creating digital solutions that seamlessly combine <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-500">creativity</span> and <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-700">functionality</span>.
          Through this fusion, I find fulfillment and purpose in my work.
        </p>

        <a
          href={resumeDownloadLink}
          download="samanthaCabreraResume.pdf"
          className="hover:scale-105 transition duration-500 self-start border-2 border-current rounded-full mt-1 px-4 py-2 text-xs relative z-10"
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
        <div className="relative ">
          {/* Image */}
          <img
            src="/me.png"
            alt="Sam"
            style={{ objectPosition: '25% 50%' }}
            className="rounded-lg shadow-lg object-cover h-[450px] w-[330px] transition-transform duration-1000 ease-in-out transform -rotate-2"
          />

      
          <div className="absolute -top-6 -left-16 transform -rotate-12">
            <img
              src="/tape.png" 
              alt="Tape"
              className="h-24 opacity-90"
            />
          </div>
               
          <div className="absolute -top-6 -right-12 transform rotate-12">
            <img
              src="/tape.png" 
              alt="Tape"
              className="h-24 opacity-90 "
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
