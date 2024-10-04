import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Intro() {

  const resumeDownloadLink = '/samanthaCabreraResume.pdf';
  
  return (
    <FadeInSection>
      <div id="intro" className="flex flex-col pt-0 space-y-10 text-center sm:text-left">

      <img src="/me.png" alt="Me at Newport Beach, CA" className="" /> 
      <p>Hi, my name is Sam.</p> 
      <p>I am a full-stack software engineer dedicated to driving positive change and making meaningful contributions to our digital world. I was born and raised in Southern California. I live in Denver with my husband, Justin, and our cute cat, Ares. In my free time, you can find me practicing yoga, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.</p>
      <p>Growing up, creating art was a defining part of my identity. I always imagined I would pursue a career in a traditionally creative field. However, it wasn’t until a chance encounter with programming that my path took a new direction. That random spark of interest opened my eyes to the creative potential within software engineering.</p>
      <p>As I explored software engineering further, I discovered that many aspects of the field allow for creative expression, similar to what I experienced as an artist. Whether designing visually appealing web layouts, developing interactive elements, or creating smooth user experiences, the overlap between technology and art has become increasingly evident. This realization made the prospect of a career in software engineering even more inticing.</p>
      <p>At the time, I was newly married to my sweetheart, Justin, and the pressures of balancing our budget while striving for personal and professional growth were considerable. In light of this, I sought a pragmatic solution to advance my education without accumulating debt. During my search, I came across Starbucks' College Achievement Plan (SCAP), a program designed to support employees in pursuing higher education. I decided to give it a try and to apply.</p>
      <p>In June 2021 I started my barista training. During my barista training, one of the biggest challenges I faced was learning the "sequence beverage routine." Initially, I was reluctant to follow this structured process—it felt tedious, and I thought I could manage without it. However, as I progressed, I realized how crucial this routine was for staying organized and ensuring every drink was made correctly, especially during busy rushes. It taught me the importance of doing things the right way, even when it’s not the easiest path. This lesson has carried over into my work in software engineering, where attention to detail and adherence to best practices are essential for building reliable and efficient systems.</p>
      <p>Balancing a part-time job and academic responsibilities required planning and organization. The efficiency and precision I developed as a barista—skills like managing time effectively, handling high-pressure situations, and maintaining attention to detail—translated well into my software engineering studies. These skills proved invaluable as I tackled complex coding challenges and developed a disciplined approach to problem-solving.</p>
      <p>When I wasn’t making drinks, I excelled in my coursework maintaining a GPA of 3.8 during my time at Arizona State. My involvement in academic communities such as the National Society of Collegiate Scholars (NSCS) and the Society of Hispanic Professional Engineers (SHPE) ASU Chapter provided me with valuable opportunities for networking, mentorship, and collaboration. These experiences not only enriched my learning but also allowed me to connect with peers and professionals who shared my passion for technology and innovation.</p>
      <p>In February 2024, I joined FlatIron School’s Software Engineering Bootcamp, a transformative experience in my professional journey. The boot camp is structured into several phases, each focusing on different aspects of software development: Core Web Technologies, JavaScript, React, Python, Flask, and a Capstone project. We began with HTML and CSS basics, progressed to JavaScript and DOM manipulation, and then tackled React for building dynamic UIs. The backend development phase with Python and Flask completed my full-stack capabilities, providing a comprehensive foundation in both frontend and backend development.</p>
      <p>My capstone project, Recipe Roots, was a significant milestone in the boot camp. I developed a web application for sharing authentic family recipes, encompassing all aspects of what I learned—frontend design and backend development. Recipe Roots allowed me to implement features like user authentication, recipe management, and search functionality. This project was not only a culmination of my boot camp experience but also a testament to the skills and knowledge I gained, showcasing my ability to create a comprehensive and user-friendly platform.</p>
      <p>This boot camp experience honed my ability to learn quickly and seek answers independently. Through intensive coursework and hands-on projects, I developed a strong ability to grasp new concepts rapidly and troubleshoot challenges on my own. This experience has reinforced my confidence in my learning abilities and demonstrated my commitment to continuous improvement and self-driven problem-solving.</p>
      <p>I graduated from FlatIron’s Full-Stack Software Engineering Bootcamp in May 2024— marking the successful completion of an intensive and enriching educational experience. Since then, I’ve taken time to travel, spend time with family, and immerse myself in numerous projects.</p>
      <p>I invite you to explore some of my recent projects below.</p>
      
      <div className="text-center">
      <a
          href={resumeDownloadLink}
          download='samanthaCabreraResume.pdf'
          className="btn-dark"
      >
          Download Resume
      </a>
      </div>
    </div>
    </FadeInSection>
  )
}

export default Intro;
