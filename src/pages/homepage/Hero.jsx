import React from "react";

function Hero() {

  const resumeDownloadLink = '/samanthaCabreraResume.pdf';
  
  return (
    <div className="flex flex-col justify-center items-center  w-full h-screen space-y-4 text-center sm:text-left">
      <p className="text-2xl sm:text-4xl pl-2">
        From <span className="hover:text-slate-100 hover:text-opacity-50 duration-500">barista</span> to
      </p>
      <p className="text-7xl text-center sm:text-9xl">
        Full-Stack  
        <span className="block hover:text-slate-100 hover:text-opacity-50 duration-500">
          Software Engineer
        </span>
      </p>
      <p className="text-base pt-4 sm:text-xl animate-pulseUpDown">
        scroll to read about my journey &#8595;&#8595;&#8595;&#8595;&#8595;
      </p>
      {/* <img src="/me.png" alt="Me at Newport Beach, CA" className="" />  */}
    </div>
  );
}

export default Hero;
