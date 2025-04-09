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
          Focused on <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">creative</span>, desktop-first web experiences, with a workflow that emphasizes clarity, purpose, and simplicity. A background in <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500">art</span> shapes every project—favoring a <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-400">minimal</span> aesthetic and careful attention to layout, spacing, and visual hierarchy.
        </p>
        <p>
          Instead of following trends, projects are approached with <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-500">curiosity</span> and <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-500">intention</span>—prioritizing design that feels personal, functional, and a little <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-400">off the beaten path</span>.
        </p>
      </div>
    </div>
  );
};

export default Services;
