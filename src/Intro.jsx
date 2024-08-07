import React from "react";

function Intro() {
  return (
    <div id="intro" className="space-y-10">
      <h2 className="subHeading lowercase md:text-9xl text-7xl">Who am I?</h2>
      <img src={`${process.env.PUBLIC_URL}/images/me.JPG`} alt="Me" />
      <p>
        I am a full-stack software engineer dedicated to driving positive change and making
        meaningful contributions to our digital world. I was born and raised in Southern California. I currently live in Denver with my husband, Justin, and our cute
        cat, Ares. 
      </p>
      <p> My academic journey began at Arizona State University, where I laid the groundwork for my career in software
        engineering. During my time at ASU, I was introduced to various aspects of software engineering, particularly
        focusing on web development. This initial exposure ignited my passion for the field, prompting me to seek
        further education and training. </p>
      <p> Looking for a quick transition into the industry, I enrolled in the Software Engineering Bootcamp at FlatIron
        School. This decision proved to be pivotal in shaping my professional development, providing me with a
        comprehensive foundation in both front-end and back-end development.</p>
      <p> Throughout my immersive experience at FlatIron, I actively participated in collaborative learning and hands-on
        projects. These experiences allowed me to gain valuable insights and practical skills in designing user
        interfaces with React.js and building backend systems using Python and Flask.</p>
      <p> Web development allows me to express myself creatively while also delivering tangible, practical solutions for
        clients and users alike. I draw inspiration for my projects from a wide range of sources, including art, and
        architecture. It is through this fusion of artistry and technology that I find fulfillment and purpose in my
        work.</p>
      <p>In my free time, you can find me practicing yoga, solving puzzles, or watching movies. When the weather permits, I
          love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.</p>
    </div>
  )
}

export default Intro;
