import { useState, useEffect } from "react";

const Loading = () => {
  const text = "welcome to samoontha.com";
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const totalDropTime = text.length * 80 + 600; 
    const timer = setTimeout(() => setFade(true), totalDropTime);
    return () => clearTimeout(timer);
  }, [text.length]);

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center overflow-hidden ${
        fade ? "animate-[fadeOut_1s_ease-in_forwards]" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-12 px-6">

        <h1 className="text-2xl font-medium tracking-wide flex flex-wrap justify-center text-center">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block opacity-0 animate-[drop_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

      </div>

      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-120px);
            opacity: 0;
          }
          70% {
            transform: translateY(10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;