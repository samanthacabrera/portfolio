import React from "react";

function About() {
  return (
    <div className="group flex flex-col items-center">
      <div className="space-y-4 pb-4">
        <p>
          Hello <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500">world</span>,
          my name is 
          <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500"> Sam</span>. 
        </p>
        <p>
          I'm a full-stack <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">software engineer</span>, specializing in <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">3D</span> web development. 
          I am equal parts 
            <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300"> web developer </span> 
            and 
            <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500"> yogi</span>.  
            I'm <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">passionate</span> about creating digital solutions that combine <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">creativity</span> and <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">functionality</span>. 
            Through this fusion, I find <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">fulfillment</span> and <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">purpose</span> in my work.
        </p>

        <p>
          I was born and raised in <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500">Southern California</span>. I now live in <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500">Utrecht</span> with my husband, <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500">Justin</span>, and our cute cat <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-100">Ares</span>. 
          In my free time, you can find me practicing <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-200">yoga</span>, solving puzzles, or watching movies. 
          When the weather permits, I love to go on picnics and <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">hike</span>. I am in <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">constant</span> pursuit of new experiences, embracing the <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">richness</span> that life has to offer.
        </p>
      </div>
    </div>
  );
}

export default About;
