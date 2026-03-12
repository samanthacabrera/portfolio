import React from "react";

function About() {
  const HoverEmoji = ({ word, emoji, small = false }) => {
    return (
      <span className="relative inline-block group cursor-pointer mx-1">
        <span className="transition-opacity duration-300 group-hover:opacity-0">{word}</span>
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      scale-90 group-hover:scale-110 
                      ${small ? "text-3xl" : "text-6xl"} 
                      group-hover:opacity-100 opacity-0 
                      transition-all duration-300 pointer-events-none`}
        >
          {emoji}
        </span>
      </span>
    );
  };

  return (
    <div className="flex flex-col text-left w-full max-w-2xl mx-auto py-8">
      <h2 className="text-4xl md:text-6xl mb-6">
        Hello <HoverEmoji word="world" emoji="🌎" />, I'm <HoverEmoji word="Sam" emoji="🧚🏼" />
      </h2>

      <p className="mb-4">
        I’m a self-taught, hobbyist software <HoverEmoji word="developer" emoji="👩🏽‍💻" small /> who codes simply for the <HoverEmoji word="joy" emoji="😄" small /> of it.
        <HoverEmoji word="Programming" emoji="💻" small /> has always been a space where I get to <HoverEmoji word="create" emoji="🖌️" small /> without <HoverEmoji word="limits" emoji="♾️" small />. 
        I'm <HoverEmoji word="passionate" emoji="❤️‍🔥" small /> about creating digital solutions that combine{" "}
        <HoverEmoji word="creativity" emoji="🎨" small /> and <HoverEmoji word="functionality" emoji="🛠️" small />.
        Through this <HoverEmoji word="fusion" emoji="🤝" small />, I find <HoverEmoji word="fulfillment" emoji="💛" small /> in my work.
      </p>

      <p className="mb-4">
        I was born and raised in Southern <HoverEmoji word="California" emoji="🌴" small />. I currently live in{" "}
        <HoverEmoji word="Utrecht" emoji="🚲" small /> with my <HoverEmoji word="husband" emoji="👩‍❤️‍💋‍👨" small /> and our sweet cat,{" "}
        <HoverEmoji word="Ares" emoji="🐯" small />. In my free time, you can find me practicing{" "}
        <HoverEmoji word="yoga" emoji="🧘🏽‍♀️" small />, solving <HoverEmoji word="puzzles" emoji="🧩" small />, or watching{" "}
        <HoverEmoji word="movies" emoji="🍿" small />. When the weather permits, I love to go on{" "}
        <HoverEmoji word="picnics" emoji="🥪" small /> and <HoverEmoji word="hike" emoji="🥾" small />. 
        I am in constant pursuit of <HoverEmoji word="new" emoji="🌱" small /> experiences, embracing the <HoverEmoji word="richness" emoji="✨" small /> that life has to offer.
      </p>

      <p>
        Feel free to <HoverEmoji word="check" emoji="👀" small /> out my projects below.
      </p>
    </div>
  );
}

export default About;