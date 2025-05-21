import React from "react";

function Hero({ is3DView }) {
  return (
    <div className="group w-full pt-8">

        {is3DView && (
          <>
          <h1 className="text-center text-2xl font-semibold tracking-wide mb-2">
            Hello world, my name is Sam. 
          </h1>
          <p className="text-center text-gray-400">
          Interact with the desk by dragging, and select objects to learn more about me & what I do.
          </p>
        </>
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