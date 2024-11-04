import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Intro() {  
  return (
    <FadeInSection>
      <div id="intro" className="group flex flex-col justify-center text-left min-h-screen">
      
        <h2 className="text-4xl tracking-wide lowercase mb-8">Long Story Short ...</h2>
     
      <div className="space-y-4 tracking-tight">
        <p>In February 2024, I joined FlatIron School’s Software Engineering Bootcamp, a <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500"> transformative </span> experience in my professional journey.</p>
        <p>This boot camp experience honed my ability to learn <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-200"> quickly </span> and seek answers independently. Through intensive coursework and hands-on projects, I developed a strong ability to grasp new concepts rapidly and <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-300"> troubleshoot </span>challenges on my own.</p>
        <p>I graduated from FlatIron in May 2024— marking the successful completion of an intensive and enriching educational experience. Since then, I’ve taken time to travel, spend time with family, and <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-500"> immerse </span> myself in numerous projects.</p>
        <p>I invite you to <span className="group-hover:text-slate-100 group-hover:text-opacity-50 transition duration-500 delay-700"> explore </span> some of my recent projects below.</p>
      </div>
      
    </div>
    </FadeInSection>
  )
}

export default Intro;
