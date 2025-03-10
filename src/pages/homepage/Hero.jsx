import React from "react";

function Hero() {

  return (
    <>
      <p className="absolute top-20 text-justify tracking-wide text-sm md:text-xl max-w-sm md:max-w-4xl">
        Hello world, my name is Sam. I am equal parts web developer and yogi. I spend my days maintaining and improving <span className="italic">Learn Yoga Online</span>, and my nights building <span className="italic">Yarnsara</span>. To learn more about what me & what I do interact with the scenes below. 
      </p>
      <p className="absolute bottom-20 opacity-70 text-sm md:text-lg tracking-wide max-w-sm md:max-w-4xl">
        To interact with the 3D scene, you can click on the objects or hold and rotate to explore.
      </p>
    </>
  );
}

export default Hero;
