import React from "react";
import me from "./IMG_0897.JPG";

function AboutMe() {
    return (
        <div className="space-y-20">
            <h2 className="subHeading font-bold text-9xl lowercase">All <br /> About Me </h2>
            <img src={me} alt="Me"/>
            <p>I was born and raised in Southern California. I currently live in Denver with my husband, Justin, and our cute cat, Ares.</p>
            <p>In my free time you can find me practing yoga, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike.</p>
            <p>I am in constant pursuit of new experiences, embracing the richness that life has to offer.</p>
        </div>
    )
}

export default AboutMe
