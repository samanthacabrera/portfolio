import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden">
        <div className="max-w-4xl w-full space-y-16 relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl uppercase text-left tracking-wider font-semibold p-6">
              Welcome to <span className="underline decoration-wavy decoration-indigo-400">samoontha.com</span>
            </h1>
          </div>

          <div className="space-y-12 px-4">
            <div className="animate-fade-in-up group">
              <div className="bg-white/15 backdrop-blur-md border-4 border-indigo-300 rounded-3xl shadow-[6px_6px_0_0_rgba(11,5,91,0.8)] p-8 hover:shadow-[10px_10px_0_0_rgba(11,5,91,0.8)] hover:scale-102 active:translate-y-0.5 transition-all duration-300 cursor-pointer border-dashed">
                <div className="space-y-8 text-lg leading-relaxed font-semibold tracking-tight">
                  <p className="text-balance">
                    Hello world, my name is Sam.
                  </p>

                  <p className="text-balance">
                    I'm a full-stack software engineer, specializing in 3D web development. 
                    I’m self-taught and I code simply because I enjoy it. Programming has always been a space where I get to create without limits.
                    I'm passionate about creating digital solutions that combine creativity and functionality. 
                    Through this fusion, I find fulfillment and purpose in my work.
                  </p>

                  <p className="text-balance">
                    I was born and raised in Southern California. I currently live in Utrecht with my husband Justin and our cat Ares. 
                    In my free time, you can find me practicing yoga, solving puzzles, or watching movies. 
                    When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.
                  </p>

                  <p className="text-balance">Feel free to check out my recent work below.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;