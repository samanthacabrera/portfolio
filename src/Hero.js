import React, { useEffect, useRef } from "react";

function Hero() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = event => {
      let iteration = 0;

      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = h1Ref.current;
    h1Element.dataset.value = h1Element.innerText;
    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(intervalRef.current);
      h1Element.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div id="hero" className="w-screen h-screen flex flex-col justify-center items-center text-center">
      <h6 className="text-lg mb-4">hi there,</h6>
      <h1 ref={h1Ref} id="flutter" className="text-9xl">I'm Sam!</h1>
    </div>
  );
}

export default Hero;
