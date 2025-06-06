import React from "react";

function About() {
  return (
    <div className="group flex flex-col items-center">
      <div className="space-y-4 pb-4">
        <p>
          I'm a full-stack <span className="text-lime-600 md:text-inherit group-hover:text-lime-600 transition duration-500 delay-200">software engineer</span>, specializing in <span className="text-pink-600 md:text-inherit group-hover:text-pink-600 transition duration-500 delay-300">3D</span> web development. 
          I am equal parts 
            <span className="text-yellow-500 md:text-inherit group-hover:text-yellow-500 transition duration-500 delay-300"> web developer </span> 
            and 
            <span className="text-cyan-600 md:text-inherit group-hover:text-cyan-600 transition duration-500 delay-500"> yogi</span>.  
             I spend my days improving 
            <a href="https://learnyoga.online/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-orange-500 md:text-inherit group-hover:text-orange-500 border-b border-orange-500 md:border-inherit group-hover:border-orange-500 transition-all duration-500 delay-700 mx-1">Learn Yoga Online</a>
            and my nights building
            <a href="https://yarnsara.etsy.com/" target="_blank" rel="noopener noreferrer" className="italic opacity-90 hover:opacity-100 text-pink-600 md:text-inherit group-hover:text-pink-600 border-b border-pink-600 md:border-inherit group-hover:border-pink-600 transition-all duration-500 delay-700 ml-1">Yarnsara</a>.
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
