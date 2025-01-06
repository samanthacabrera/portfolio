import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "New Website Design",
      description:
        "A clean, responsive website, ideal for personal portfolios or small businesses.",
      details: {
        timeline: "2-3 weeks",
        deliverables: [
          "Responsive layout for mobile and desktop",
          "Basic on-page SEO setup",
        ],
        features: [
          "Cross-browser compatibility",
          "Basic training on how to update content",
        ],
        faqs: [
          {
            question: "Can I request more pages?",
            answer: "Yes, additional pages can be added for $150 per page.",
          },
        ],
      },
      price: "$1,000",
    },
    {
      title: "Website Performance & SEO Optimization",
      description:
        "Improve website speed, implement basic SEO, and ensure mobile responsiveness.",
      details: {
        timeline: "1-2 weeks",
        deliverables: [
          "Optimized page loading times",
          "Basic SEO implementation",
          "Mobile and desktop compatibility testing",
        ],
        features: [
          "Boosted search engine visibility",
          "Improved website speed and performance",
          "Detailed performance and SEO report",
        ],
        faqs: [
          {
            question: "Do you provide advanced SEO services?",
            answer:
              "Yes, advanced SEO services can be added for an additional fee. Please inquire for a custom quote.",
          },
        ],
      },
      price: "$1,500",
    },
    {
      title: "Custom Full-Stack Web Application",
      description:
        "Includes both frontend and backend development, along with user authentication and API integration.",
      details: {
        timeline: "4-6 weeks",
        deliverables: [
          "Fully functional web application",
          "User authentication system",
          "Integrated APIs for external services",
        ],
        features: [
          "Scalable and secure architecture",
          "Modern UI/UX design",
          "Custom features tailored to your needs",
        ],
        faqs: [
          {
            question: "Can this application be expanded later?",
            answer:
              "Yes, it will be built with scalability in mind, making future expansion seamless.",
          }
        ],
      },
      price: "$3,000+",
    },
  ];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-4">
        <h1 className="text-4xl">My Services</h1>
        <p className="font-light">
          Click to learn more about the different services I provide
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-lg font-extrabold text-gray-800">{service.price}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-gray-900 justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-2xl">
              {selectedService.title} 
            </h2>

            <div className="text-sm py-2 space-y-4 leading-tight">
              <p className="">{selectedService.description}</p>
         
              <h3 className="">Timeline</h3>
              <p className="pl-2">{selectedService.details.timeline}</p>
        
              <h3 className="">Deliverables</h3>
              <ul className="pl-2">
                {selectedService.details.deliverables.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="">Features</h3>
              <ul className="pl-2">
                {selectedService.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
     
              <h3 className="">FAQs</h3>
              <ul className="pl-2">
                {selectedService.details.faqs.map((faq, index) => (
                  <li key={index} className="mb-2">
                    <strong>{faq.question}</strong>
                    <br />
                    {faq.answer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <a
                href="https://calendly.com/samantha-n-cabrera/30min"
                target="_blank"
                className="text-xs border rounded p-2 hover:bg-gray-100 transition duration-200"
              >
                Book Consult
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
