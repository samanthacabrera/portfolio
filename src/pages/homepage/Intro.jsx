import React from "react";
import FadeInSection from "../../utils/FadeIn";

function Intro() {

  const resumeDownloadLink = '/samanthaCabreraResume.pdf';
  
  return (
    <FadeInSection>
      <div id="intro" className="flex flex-col pt-0 space-y-10">

      <img src="/me.png" alt="Me at Newport Beach, CA" className="" /> 
      <p>Hi, my name is Sam.</p> 
      <p>I am a full-stack software engineer dedicated to driving positive change and making meaningful contributions to our digital world. I was born and raised in Southern California. I currently live in Denver with my husband, Justin, and our cute cat, Ares. In my free time, you can find me practicing yoga, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.</p>
      <p>Growing up, creating art was a defining part of my identity. I always imagined I would pursue a career in a traditionally creative field—perhaps as a florist or writer. However, it wasn’t until a chance encounter with programming that my path took a new direction. That random spark of interest opened my eyes to the creative potential within software engineering.</p>
      <p>As I explored the thought of software engineering further, I discovered that many aspects of the field allow for creative expression, similar to what I experienced as an artist. Whether it’s crafting visually appealing web designs, developing interactive elements, or creating smooth user experiences, the overlap between technology and art became increasingly evident. This realization made the prospect of a career in software engineering even more exciting.</p>
      <p>At the time, I was newly married to my sweetheart,Justin, and the pressures of balancing our budget while striving for personal and professional growth were considerable. In light of this, I sought out a pragmatic solution to advance my education without accumulating debt. During my search I came across Starbucks' College Achievement Plan (SCAP), a program designed to support employees in pursuing higher education. I decided to give it a try and to apply. </p>
      <p>In June 2021 I started my barista training. During my barista training, one of the biggest challenges I faced was learning the "sequence beverage routine." Initially, I was reluctant to follow this structured process—it felt tedious, and I thought I could manage without it. However, as I progressed, I realized how crucial this routine was for staying organized and ensuring every drink was made correctly, especially during busy rushes. It taught me the importance of doing things the right way, even when it’s not the easiest path. This lesson has carried over into my work in software engineering, where attention to detail and adherence to best practices are essential for building reliable and efficient systems. </p>
      <p>Balancing a part-time job and academic responsibilities required careful planning and organization. The efficiency and precision I developed as a barista—skills like managing time effectively, handling high-pressure situations, and maintaining attention to detail—translated well into my software engineering studies. These skills proved invaluable as I tackled complex coding challenges and developed a disciplined approach to problem-solving.</p>
      <p>When I wasn’t making drinks, I excelled in my coursework maintaining a GPA of 3.8 during my time at Arizona State. My involvement in academic communities such as the National Society of Collegiate Scholars (NSCS) and the Society of Hispanic Professional Engineers (SHPE) ASU Chapter provided me with valuable opportunities for networking, mentorship, and collaboration. These experiences not only enriched my learning but also allowed me to connect with peers and professionals who shared my passion for technology and innovation.</p>
      <p>In February 2024, I joined FlatIron School’s Software Engineering Bootcamp, a decision that marked a transformative shift in my professional journey. The program is structured into several distinct phases, each focusing on different aspects of software development: Core Web Technologies, JavaScript, React, Python, Flask, and Capstone project.</p>
      <p>Before diving into the core phases of the bootcamp, we engaged in essential preparatory work to get acquainted with the basics of HTML and CSS. This initial stage was crucial for setting the foundation, ensuring that we were well-equipped to tackle more complex topics later on. We learned to create simple web pages, focusing on structure and styling, which gave us the confidence to move forward.</p>
      <p>The bootcamp officially began with an in-depth focus on JavaScript, particularly on how to manipulate the Document Object Model (DOM). This phase was all about understanding the core concepts of JavaScript and using them to interact dynamically with web pages. We explored the basics of JavaScript syntax, control structures, and functions, followed by more advanced topics like event handling and DOM manipulation. This phase was instrumental in building dynamic, interactive web applications, where I learned how to modify web page content, structure, and style.</p>
      <p>The second phase of the bootcamp introduced us to React, a powerful JavaScript library for building dynamic user interfaces. This segment was pivotal in advancing my skills, focusing on the creation of reusable components, managing application state, and leveraging React hooks for efficient data handling and side effects. We delved into concepts like component lifecycle, virtual DOM, and state management, which are essential for developing interactive and high-performance web applications. Mastering React allowed me to enhance the user experience by creating smooth, responsive interfaces and implementing complex features with ease.</p>
      <p>The third phase marked a transition to backend development with Python. This phase was essential for building a robust understanding of server-side programming. We covered Python fundamentals, including data structures, algorithms, and object-oriented programming. The curriculum emphasized how to write clean, efficient code and develop server-side logic that powers web applications. We also explored integration techniques, connecting backend systems with frontend components, and managing data flows, which were crucial for creating full-featured applications.</p>
      <p>Following Python, the bootcamp shifted focus to Flask, a lightweight Python web framework. This phase involved hands-on experience with building and managing web applications using Flask. We learned to work with databases, develop RESTful APIs, and deploy applications to production environments. This phase was instrumental in understanding how to create scalable and maintainable backend systems. The practical experience with Flask provided me with the tools to handle server-side operations, data persistence, and API development, rounding out my full-stack development capabilities.</p>
      <p>The final phase of the bootcamp was dedicated to our capstone projects, which allowed us to apply everything we had learned in a real-world context. For my capstone project, I developed Recipe Roots, a web application aimed at sharing authentic family recipes with a global audience. This project was a culmination of my learning journey, encompassing frontend design and backend development. I implemented various features, including user authentication, recipe management, and search functionality, to create a comprehensive and user-friendly platform. Completing Recipe Roots was not only a significant achievement but also a testament to the skills and knowledge I gained throughout the bootcamp.</p>
      <p>This past May, I graduated from FlatIron’s Full-Stack Software Engineering Bootcamp— marking the successful completion of an intensive and enriching educational experience. Since then, I’ve taken time to travel, spend time with family, and immerse myself in numerous projects. This period has further solidified my commitment to software engineering and allowed me to explore new opportunities for growth and innovation.</p>
      <p>I approach the future with anticipation, eager to embrace new opportunities with an open heart and focused mind. As I continue to grow as a software engineer, I'm excited to connect with like-minded individuals and teams who share my passion for innovation and dedication to making a positive impact. I believe the journey is just as important as the destination, and I'm excited to bring this mindful approach to every collaboration.</p>
      <p>I invite you to explore some of my recent projects below.</p>
      
      <div className="text-center">
      <a
          href={resumeDownloadLink}
          download="samanthaCabreraResume.pdf"
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
