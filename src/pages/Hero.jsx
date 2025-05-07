import React from "react";

function Hero({ is3DView }) {
  return (
    <div className="group w-full pt-8">

        {is3DView && (
          <p className="text-center">
          Hello world, my name is Sam. Interact with the scene below to learn more about me & what I do.
          </p>
        )}

        {!is3DView && (
          <p className="relative pt-4">
            Hello <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500">world</span>,
            my name is 
          <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500"> Sam</span>. 
          </p>
        )}

    </div>
  );
}

export default Hero;