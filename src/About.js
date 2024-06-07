import React from "react";
import me from "./IMG_0897.JPG";

function About() {
  return (
    <>
      <div className="text-center space-y-20 md:m-40 m-12">
        <h2 className="subHeading lowercase md:text-9xl text-7xl">All <br /> About Me </h2>
        <img src={me} alt="Me" />
        <p>
          I was born and raised in Southern California. I currently live in Denver with my husband, Justin, and our cute
          cat, Ares. In my free time you can find me practing yoga, solving puzzles, or watching movies. When the weather permits, I
          love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.
        </p>
      </div>


      <div className="text-center space-y-10 md:m-40 m-12">
        <h2 className="subHeading lowercase md:text-9xl text-7xl">Q & A</h2>

        <p>What is your favorite aspect of software engineering?</p>
        <p>I love being able to create any idea that pops into my head. I have always felt like I had so many ideas, but no way to feasibly turn them into a reality.</p>
        <p>What are some goals or aspirtations you have for your career in software development?</p>
        <p>Some of my short-term goals are to deploy my passion project Recipe Roots. My dream is to pursue freelance web development full time and travel the world. </p>
        <p>What motivates you to continue to learn and grow as a software engineer?</p>
        <p>Seeing beautiful, functional web applications inspires me to keep imporving my craft. It excites me that there is a constant instream of new technologies to learn and leverage in my projects.  </p>

      </div>


      <div className="text-center space-y-10 md:m-40 m-12">
        <h2 className="subHeading lowercase md:text-9xl text-7xl">Inspo</h2>
        <p>I find inspiration through music, art, and cinema. I am drawn to abstract and thought-provoking themes. Below are some of my regular sources of inspiration:</p>

        <ul className="text-center space-y-2">
          <li>Jean-Michel Basquiat</li>
          <li>Frida Kahlo</li>
          <li>Damien Hirst</li>
          <li>Steven J. Yazzie</li>
          <li>Tadao Ando</li>
          <li>Hayao Miyazaki</li>
          <li>@hozzography</li>
          <li>Tarsila do Amaral</li>
          <li>Francisco Goya</li>
          <li>Emily Bronte</li>
          <li>Gustav Klimt</li>
          <li>Patricia Riggen</li>
        </ul>
      </div>
    </>
  )
}

export default About
