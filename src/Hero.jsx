import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen space-y-1">
      <p className="text-2xl sm:text-4xl pl-1">From <span className="hover:text-slate-100 hover:text-opacity-50 duration-500">barista</span> to</p>
      <p className="text-7xl sm:text-9xl">
        Full-Stack{" "}
        <span className="block hover:text-slate-100 hover:text-opacity-50 duration-500">
          Software Engineer
        </span>
      </p>
      <p className="text-base sm:text-xl animate-pulseUpDown">
        scroll to read about my journey &#8595;&#8595;&#8595;&#8595;&#8595;
      </p>
    </div>
  );
}

export default Hero;
