import React from "react";

function Hero() {

  const resumeDownloadLink = '/SamanthaCabreraResume.pdf';

  return (
    <div className="h-screen flex">

      <div className="flex flex-col justify-center space-y-4 text-left w-full lg:w-1/2 p-8">
        <h1 className="text-4xl lg:text-6xl tracking-wide">
          Hello world!<br /> 
          I'm <span className="hover:text-slate-100 hover:text-opacity-50 duration-500">Sam</span> :)
        </h1>
        <p className="max-w-lg">
          I'm a full-stack software engineer based in Denver, specializing in web development and UX/UI design. 
          I'm passionate about creating digital solutions that seamlessly combine creativity and functionality. 
          Through this fusion, I find fulfillment and purpose in my work.
        </p>
        <a href={resumeDownloadLink}  download='SamanthaCabreraResume.pdf' className="self-start hover:scale-105 border-2 border-current rounded-full mt-1 p-2 text-sm transition-all duration-300">
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
