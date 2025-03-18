import React, { useState } from "react";

const Services = ({is3DView}) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "New Website Design",
      description:
        "A clean, responsive website, ideal for personal portfolios or small businesses.",
      details: {
        timeline: "2-4 weeks",
        deliverables: [
          "Responsive layout for mobile and desktop",
          "Basic on-page SEO setup",
          "Integration with your preferred CMS (e.g., WordPress, Webflow)"
        ],
        features: [
          "Cross-browser compatibility",
          "Basic training on how to manage and update your website",
        ],
        faqs: [
           {
              question: "Do you offer hosting or domain setup?",
              answer:
                "I can guide you through setting up hosting and a domain, but these services are billed separately by hosting providers.",
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
    {
    title: "Custom 3D Object",
    description:
      "High-quality 3D models tailored to your specific needs, whether for product visualization, gaming, or design.",
    details: {
      timeline: "1-3 weeks",
      deliverables: [
        "Custom-designed 3D object",
        "Textures and materials (if applicable)",
      ],
      features: [
        "Optimized for your use case (e.g., rendering, games, AR/VR)",
        "Editable source files included",
      ],
      faqs: [
        {
          question: "Can I request multiple revisions?",
          answer:
            "Yes, two revisions are included for free, with additional revisions available for $50 each.",
        },
      ],
    },
    price: "$800+",
  },
  {
    title: "Series of 3D Icons",
    description:
      "A cohesive set of custom 3D icons for websites, apps, or branding purposes.",
    details: {
      timeline: "2-4 weeks",
      deliverables: [
        "Set of 3D icons (quantity based on request)",
        "Consistent style across all icons",
      ],
      features: [
        "Custom-designed icons tailored to your brand",
        "Optimized for web and app use",
        "Editable source files included",
      ],
      faqs: [
        {
          question: "How many icons can I request?",
          answer:
            "The base package includes 5 icons. Extra icons can be included for an additional fee, determined by their complexity.",
        },
      ],
    },
    price: "$1,200+",
  },
  ];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="group flex flex-col items-center">

 
      <h2 className="text-lg md:text-2xl my-8">Why Choose Me?</h2>
      <div className="space-y-4 mx-4 mb-40">
        <p>
          As a <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">solo</span> freelancer, I offer <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">personalized</span> service and attention to detail that you won't find at a larger agency. I'm <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">dedicated</span> to delivering high-quality work that helps you <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-500">achieve</span> your goals.
        </p>
        <p>
          I also work with you on your <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-500">favorite</span> CMS platform to make updating content and media <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-500">effortlessly</span>.
        </p>
      </div>
      
      <h1 className="text-lg md:text-2xl my-8">My Services</h1>
   
        <div className="grid gap-2 sm:grid-cols-1 text-gray-900 mx-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border shadow-sm rounded py-2 hover:scale-105 p-4 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <h3 className="">{service.title}</h3>
              <p className="hidden md:block text-sm font-light py-1">
                {service.description}
              </p>
              
            </div>
          ))}
        </div>


      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-gray-900 justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md md:max-w-lg h-[50vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-2xl">{selectedService.title}</h2>

            <div className="text-sm py-2 space-y-2 leading-tight">
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
