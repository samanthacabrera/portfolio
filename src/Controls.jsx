import { useState, useRef, useEffect } from "react";

const cursors = [
  { name: "default", emoji: "" },
  { name: "sparkles", emoji: "✨" },
  { name: "berries", emoji: "🫐" },
  { name: "happy", emoji: "🥰" },
  { name: "chickie", emoji: "🐥" },
  { name: "love", emoji: "🫰" },
  { name: "peace", emoji: "✌️" },
  { name: "kitty", emoji: "😿" },
  { name: "bee", emoji: "🐝" },
  { name: "shroom", emoji: "🍄" },
  { name: "seedling", emoji: "🌱" },
];

export default function Controls() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCursor, setSelectedCursor] = useState("default");
  const [hoverCursor, setHoverCursor] = useState(null);

  const [bgColor, setBgColor] = useState("#b4eafa");
  const [textColor, setTextColor] = useState("#0b055b");

  const buttonRef = useRef();
  const trailRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    document.body.style.backgroundImage = `
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1) 1px,
        transparent 12px,
        transparent 12px
      )
    `;
  }, [bgColor, textColor]);

  useEffect(() => {
    const cursorEl = document.createElement("div");
    cursorEl.style.position = "fixed";
    cursorEl.style.pointerEvents = "none";
    cursorEl.style.transform = "translate(-50%, -50%)";
    cursorEl.style.fontSize = "24px";
    cursorEl.style.zIndex = "9999";
    cursorEl.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.3))";

    document.body.appendChild(cursorEl);
    cursorRef.current = cursorEl;

    return () => {
      document.body.removeChild(cursorEl);
    };
  }, []);

  useEffect(() => {
    const cursorName = hoverCursor || selectedCursor;

    if (cursorName === "default") {
      document.body.style.cursor = "auto";
    } else {
      document.body.style.cursor = "none";
    }
  }, [selectedCursor, hoverCursor]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentCursor = cursors.find(
        (c) => c.name === (hoverCursor || selectedCursor)
      );

      if (!currentCursor) return;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.innerText =
          currentCursor.name === "default" ? "" : currentCursor.emoji;
      }

      if (currentCursor.name === "default") return;

      const trail = document.createElement("div");
      trail.innerText = currentCursor.emoji;
      trail.style.position = "fixed";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      trail.style.pointerEvents = "none";
      trail.style.opacity = "0.8";
      trail.style.fontSize = "16px";
      trail.style.transform = "translate(-50%, -50%)";
      trail.style.transition = "all 0.3s ease-out";

      document.body.appendChild(trail);
      trailRef.current.push(trail);

      setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-50%, -50%) scale(0.5)";

        setTimeout(() => {
          document.body.removeChild(trail);
          trailRef.current.shift();
        }, 300);
      }, 0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [selectedCursor, hoverCursor]);

  return (
    <div className="hidden md:block absolute top-0 left-0">
      <div
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-inherit m-2 bg-white/70 hover:bg-white/90 transition-all duration-300 ease-out cursor-pointer
          ${isOpen ? "w-56 p-6 rounded-lg shadow-lg" : "px-2 py-1 rounded"}
        `}
      >
        {!isOpen && "Customize"}

        {isOpen && (
          <div className="space-y-4">
            <h2 className="text-lg text-center font-semibold">
              Customize
            </h2>

            <div>
              <h3 className="font-semibold mb-2 text-sm">Cursor</h3>
              <div className="flex flex-wrap gap-2">
                {cursors.map((cursor) => (
                  <button
                    key={cursor.name}
                    onMouseEnter={() => setHoverCursor(cursor.name)}
                    onMouseLeave={() => setHoverCursor(null)}
                    onClick={() => setSelectedCursor(cursor.name)}
                    className={`px-2 py-1 border rounded text-xs
                      ${
                        selectedCursor === cursor.name ||
                        hoverCursor === cursor.name
                          ? "bg-gray-300 font-bold"
                          : "hover:bg-gray-200"
                      }`}
                  >
                    {cursor.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm">Background</h3>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-8 cursor-pointer"
              />
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm">Text</h3>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full h-8 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}