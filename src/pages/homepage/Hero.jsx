import React from "react";

function Hero() {
  const resumeDownloadLink = '/samanthaCabreraResume.pdf';

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-center space-y-4 text-left w-full lg:w-1/2 p-8">
        <h1 className="text-4xl lg:text-6xl tracking-wider mb-2">
          Hello world!<br /> 
          I'm <span className="text-slate-100 text-opacity-50">Sam</span> :)
        </h1>
        <p className="text-lg tracking-tight max-w-lg group">
          I'm a full-stack software engineer based in Denver, specializing in web development and UX/UI design. 
          I'm <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500">passionate</span> about creating digital solutions that seamlessly combine <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500">creativity</span> and <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500">functionality</span>. 
          Through this fusion, I find fulfillment and purpose in my work.
        </p>

        <a 
          href={resumeDownloadLink}  
          download="samanthaCabreraResume.pdf" 
          className="hover:scale-105 transition duration-500 self-start border-2 border-current rounded-full mt-1 p-2 text-sm"
        >
          Download Resume
        </a>
      </div>

      <div className="w-1/2 self-center hidden lg:flex pl-24">
        <img 
          src="/me.png" 
          alt="Me at Newport Beach" 
          style={{ objectPosition: '25% 50%' }}
          className="rounded-lg shadow-md object-cover h-[450px] w-[330px]"
        />
      </div>
    </div>
  );
}

export default Hero;
