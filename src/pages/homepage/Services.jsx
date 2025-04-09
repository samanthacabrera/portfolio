import React, { useState } from "react";

const Services = ({ is3DView }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="group flex flex-col items-center">
      <h2 className="text-lg md:text-2xl my-8">Why Choose Me?</h2>
      <div className="space-y-4">
        <p>
          I’m a <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">full-stack</span> software engineer with a focus on <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">creative</span>, desktop-first web experiences. My background in <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500">art</span> influences everything I build with a <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-400">minimal</span> aesthetic that lets content speak for itself.
        </p>
        <p>
          I don’t follow <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-500">trends</span> or chase <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500">algorithms</span>. Instead, I focus on crafting sites that feel <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-300">original</span> and <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">thoughtful</span>. 
        </p>
      </div>
    </div>
  );
};

export default Services;
