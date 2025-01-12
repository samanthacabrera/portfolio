import React from "react";

function About() {  
    return (
      
        <div className="group flex flex-col justify-center text-left h-screen">
        
          <h2 className="text-4xl lg:text-6xl">A little about me...</h2>
      
        <div className="pt-8 space-y-4 tracking-tight">
            <p>I was born and rasied in Southern California. I now live in <span className="group-hover:text-cyan-600 transition duration-500">Denver</span> with my husband, Justin, and our cute cat <span className="group-hover:text-yellow-500 transition duration-500 delay-100">Ares</span>. In my free time, you can find me practicing <span className="group-hover:text-orange-600 transition duration-500 delay-200">yoga</span>, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the <span className="group-hover:text-pink-600 transition duration-500 delay-300">rihcness </span> that life has to offer.</p>
        </div>
        
      </div>

  )
}

export default About;
