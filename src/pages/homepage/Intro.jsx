import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Intro() {  
  return (
    <FadeInSection>
        <div className="group flex flex-col justify-center text-left min-h-screen">
        
          <h2 className="text-4xl lg:text-6xl">Long story short...</h2>
      
        <div className="pt-8 space-y-4 tracking-tight">
          <p>In February 2024, I started Flatiron School’s Software Engineering Bootcamp, an experience that shaped my professional journey. It honed my ability to learn <span className="group-hover:text-cyan-600 transition duration-500"> quickly</span> and solve problems <span className="group-hover:text-yellow-500 transition duration-500 delay-100">independently</span>.</p>
          <p>I graduated from FlatIron in May 2024. Since then, I’ve taken time to travel, spend time with family, and <span className="group-hover:text-orange-600 transition duration-500 delay-200"> immerse </span> myself in numerous passion projects.</p>
          <p>Now, I get to do what I <span className="group-hover:text-pink-600 transition duration-500 delay-300"> love </span> every day as a freelance web developer, with each day bringing something new to learn.</p>

        </div>
        
      </div>
    </FadeInSection>
  )
}

export default Intro;
