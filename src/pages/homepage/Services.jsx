import React from "react";

const Services = () => {
  const services = [
    {
      title: "New Website Design",
      description:
        "A clean, responsive website with up to 3 pages, ideal for personal portfolios or small businesses.",
      price: "$500",
    },
    {
      title: "Website Performance & SEO Optimization",
      description:
        "Improve website speed, implement basic SEO, and ensure mobile responsiveness.",
      price: "$2,500",
    },
    {
      title: "Custom Full-Stack Web Application",
      description:
        "Includes both frontend and backend development, along with user authentication and API integration.",
      price: "$5,000+",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-black rounded hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm leading-relaxed mb-6">{service.description}</p>
            <p className="text-lg font-extrabold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
