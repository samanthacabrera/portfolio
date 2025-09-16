import React from "react";

function About() {
  return (
    <div className="group flex flex-col items-center">
      <div className="space-y-4 pb-4">
        <p className="text-4xl py-8">Welcome to <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 italic uppercase">Samoontha.com</span></p>
        <p>
          Hello <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500">world</span>,
          my name is 
          <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500"> Sam</span>. 
        </p>

        <p>
          I'm a full-stack <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">software engineer</span>, specializing in <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">3D</span> web development. 
          I’m <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-200">self-taught</span> and I code simply because I <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-200">enjoy</span> it. Programming has always been a space where I get to <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-200">create</span> without limits.
            I'm <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">passionate</span> about creating digital solutions that combine <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">creativity</span> and <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">functionality</span>. 
            Through this fusion, I find <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">fulfillment</span> and <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-400">purpose</span> in my work.
        </p>

        <p>
          I was born and raised in <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500">Southern California</span>. I currently live in <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500">Utrecht</span> with my husband <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500">Justin</span> and our cat <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-100">Ares</span>. 
          In my free time, you can find me practicing <span className="text-orange-600 md:text-inherit group-hover:text-orange-600 transition duration-500 delay-200">yoga</span>, solving puzzles, or watching movies. 
          When the weather permits, I love to go on picnics and <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300">hike</span>. I am in <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">constant</span> pursuit of new experiences, embracing the <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-300">richness</span> that life has to offer.
        </p>
      </div>
    </div>
  );
}

export default About;
