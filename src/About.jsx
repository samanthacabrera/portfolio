import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="max-w-2xl mx-auto w-full space-y-2 md:space-y-6 relative">

        <div className="relative text-center py-16">
          <p className="text-xl md:text-4xl mb-2 md:mb-6">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-6xl tracking-wide">
            SAMOONTHA.COM
          </h1>
        </div>

        <div className="px-4">
          <div className="animate-fade-in-up">
            <div className="w-full mx-auto bg-[#fffdf8]/90 p-8 rounded-xl relative shadow-[6px_6px_0_rgba(0,0,0,0.15)] transform -rotate-[1.2deg] transition-all duration-300 hover:shadow-[10px_10px_0_rgba(0,0,0,0.2)] font-patrick">
              <div className="absolute w-[80px] h-[30px] bg-yellow-200/80 border border-yellow-300/70 shadow-[2px_2px_0_rgba(0,0,0,0.1)] -rotate-[6deg] -top-3.5 -left-4"></div>
              <div className="absolute w-[80px] h-[30px] bg-yellow-200/80 border border-yellow-300/70 shadow-[2px_2px_0_rgba(0,0,0,0.1)] rotate-[5deg] -top-3.5 -right-4"></div>

              <div className="space-y-2 md:space-y-8 text-[#444] text-sm md:text-base leading-7">
                <p>Hello world, my name is Sam.</p>
                <p>
                  I’m a self-taught, hobbyist software developer who codes simply for the joy of it.
                  Programming has always been a space where I get to create without limits.
                  I'm passionate about creating digital solutions that combine creativity and functionality.
                  Through this fusion, I find fulfillment and purpose in my work.
                </p>
                <p>
                  I was born and raised in Southern California. I currently live in Utrecht with my husband Justin and our cat Ares.
                  In my free time, you can find me practicing yoga, solving puzzles, or watching movies.
                  When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.
                </p>
                <p>Feel free to check out my projects below.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
