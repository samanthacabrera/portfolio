import React from "react";

function About() {  
    return (
      
        <div className="group flex flex-col justify-center items-center h-[90vh]">
        
          <h2 className="text-4xl pb-4 md:pb-12">A little about me...</h2>
        
          <div className="space-y-4 md:space-y-12 max-w-sm md:max-w-4xl">
            <p>
              I'm a full-stack software engineer based in Denver, specializing in 3D web development.
              I'm <span className="group-hover:text-lime-600 transition duration-500 delay-200">passionate</span> about creating digital solutions that combine creativity and functionality.
              Through this fusion, I find <span className="group-hover:text-yellow-500 transition duration-500 delay-300">fulfillment</span> and <span className="group-hover:text-cyan-600 transition duration-500 delay-400">purpose</span> in my work.
            </p>

            <p>
              I was born and rasied in Southern California. I now live in <span className="group-hover:text-cyan-600 transition duration-500">Denver</span> with my husband, Justin, and our cute cat <span className="group-hover:text-yellow-500 transition duration-500 delay-100">Ares</span>. In my free time, you can find me practicing <span className="group-hover:text-orange-600 transition duration-500 delay-200">yoga</span>, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the <span className="group-hover:text-pink-600 transition duration-500 delay-300">richess </span> that life has to offer.
            </p>
          </div>
      </div>
  )
}

export default About;
