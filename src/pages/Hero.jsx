import React from "react";

function Hero({ is3DView }) {
  return (
    <div className="group w-full pt-8">

        {is3DView && (
          <>
          <h1 className="text-center text-2xl font-semibold tracking-wide mb-2">
            Hello world, my name is Sam. 
          </h1>
          <p className="text-center opacity-50">
          Interact with the desk by dragging, and select objects to learn more about me & what I do.
          </p>
        </>
        )}

        {!is3DView && (
          <>
          <p className="text-4xl py-8">Welcome to <span className="italic uppercase">Samoontha.com</span></p>
          </>
        )}

    </div>
  );
}

export default Hero;