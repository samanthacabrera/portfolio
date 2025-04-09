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
      <div className="space-y-4">
        <p>
          As a <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">solo</span> freelancer, I offer <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">personalized</span> service and attention to detail that you won't find at a larger agency. I'm <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">dedicated</span> to delivering high-quality work that helps you <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-500">achieve</span> your goals.
        </p>
        <p>
          I also work with you on your <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-500">favorite</span> CMS platform to make updating content and media <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-500">effortlessly</span>.
        </p>
      </div>
      
      {/* <h1 className="text-lg md:text-2xl my-8">My Services</h1>
   
        <div className="grid gap-2 sm:grid-cols-1 text-gray-900">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border shadow-sm rounded py-2 hover:scale-[102%] p-4 transition-transform duration-500 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <h3 className="">{service.title}</h3>
              <p className="hidden md:block text-sm  py-1">
                {service.description}
              </p>
              
            </div>
          ))}
        </div>

      
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 md:p-8 rounded-lg max-w-md md:max-w-lg w-11/12 h-auto max-h-[80vh] overflow-y-auto relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="text-xl md:text-2xl font-medium mb-4 pr-6">{selectedService.title}</h2>
              
              <div className="text-sm space-y-5 leading-relaxed text-gray-700">
                <p className="mb-4">{selectedService.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="w-0.5 h-4 bg-gray-800 mr-2"></div>
                  <h3 className="text-sm font-medium text-gray-900">Timeline</h3>
                </div>
                <p className="pl-3 mb-4">{selectedService.details.timeline}</p>

                <div className="flex items-center mb-3">
                  <div className="w-0.5 h-4 bg-gray-800 mr-2"></div>
                  <h3 className="text-sm font-medium text-gray-900">Deliverables</h3>
                </div>
                <ul className="pl-3 mb-4 space-y-2">
                  {selectedService.details.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center mb-3">
                  <div className="w-0.5 h-4 bg-gray-800 mr-2"></div>
                  <h3 className="text-sm font-medium text-gray-900">Features</h3>
                </div>
                <ul className="pl-3 mb-4 space-y-2">
                  {selectedService.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center mb-3">
                  <div className="w-0.5 h-4 bg-gray-800 mr-2"></div>
                  <h3 className="text-sm font-medium text-gray-900">FAQs</h3>
                </div>
                <div className="pl-3 space-y-4">
                  {selectedService.details.faqs.map((faq, index) => (
                    <div key={index} className="mb-2">
                      <p className="text-gray-800">{faq.question}</p>
                      <p className="text-gray-600 mt-1">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="">
                <p className="text-lg font-medium mb-4">{selectedService.price}</p>
                <a
                  href="https://calendly.com/samantha-n-cabrera/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black text-xs p-2"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        )} */}
    </div>
  );
};

export default Services;
