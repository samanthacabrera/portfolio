import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Intro() {  
  return (
    <FadeInSection>
      <div id="intro" className="flex flex-col space-y-4 text-center sm:text-left">
      <h2 className="text-4xl tracking-wide lowercase mb-4">Long Story Short ...</h2>
     
      <p>In February 2024, I joined FlatIron School’s Software Engineering Bootcamp, a transformative experience in my professional journey.</p>
      <p>This boot camp experience honed my ability to learn quickly and seek answers independently. Through intensive coursework and hands-on projects, I developed a strong ability to grasp new concepts rapidly and troubleshoot challenges on my own.</p>
      <p>I graduated from FlatIron in May 2024— marking the successful completion of an intensive and enriching educational experience. Since then, I’ve taken time to travel, spend time with family, and immerse myself in numerous projects.</p>
      <p>I invite you to explore some of my recent projects below.</p>
      
    </div>
    </FadeInSection>
  )
}

export default Intro;
