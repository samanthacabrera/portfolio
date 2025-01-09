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
          },
        ],
      },
      price: "$3,000+",
    },
  ];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="flex flex-col justify-center py-24">

      <div className="my-40 space-y-4">
        <h2 className="text-4xl lg:text-5xl">Why Choose Me?</h2>
        <p className="text-lg font-light">
          As a solo freelancer, I offer personalized service and attention to
          detail that you won't find at a larger agency. I'm dedicated to
          delivering high-quality work that exceeds your expectations and helps
          you achieve your goals.
        </p>
        <p className="text-lg font-light">
          I work with you on your favorite CMS platform to help ease you into
          updating content, media, and more effortlessly.
        </p>
      </div>


      <div className="pt-12 pb-4 space-y-4">
        <h1 className="text-4xl lg:text-6xl">Let's work together...</h1>
        <p className="text-xl pb-4 font-light">
          Click to learn more about the range of services I offer.
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-1 text-gray-900">
        {services.map((service, index) => (
          <div
            key={index}
            className="md:bg-white md:border md:shadow-lg md:rounded-lg py-2 md:p-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <h3 className="text-base lg:text-xl">{service.title}</h3>
            <p className="hidden md:block font-light py-1">
              {service.description}
            </p>
            {/* <p className="hidden md:block">{service.price}</p> */}
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-gray-900 justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full mx-2 max-h-screen overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-2xl">{selectedService.title}</h2>

            <div className="text-sm py-2 space-y-4 leading-tight">
              <p>{selectedService.description}</p>

              <h3>Timeline</h3>
              <p className="pl-2">{selectedService.details.timeline}</p>

              <h3>Deliverables</h3>
              <ul className="pl-2">
                {selectedService.details.deliverables.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Features</h3>
              <ul className="pl-2">
                {selectedService.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3>FAQs</h3>
              <ul className="pl-2">
                {selectedService.details.faqs.map((faq, index) => (
                  <li key={index} className="mb-2">
                    {faq.question}
                    <br />
                    {faq.answer}
                  </li>
                ))}
              </ul>
            </div>

            <div>
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
