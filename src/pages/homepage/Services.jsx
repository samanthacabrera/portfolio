import React, { useState } from "react";

const Services = ({is3DView}) => {
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
          As a <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">solo</span> freelancer, I offer <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">personalized</span> service and attention to detail that you won't find at a larger agency. I'm <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">dedicated</span> to delivering high-quality work that helps you <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-500">achieve</span> your goals.
        </p>
        <p>
          I also work with you on your <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-500">favorite</span> CMS platform to make updating content and media <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-500">effortlessly</span>.
        </p>
      </div>
    </div>
  );
};

export default Services;
