import { useState, useRef, useEffect } from "react";

const cursors = [
  { name: "default", emoji: "" },
  { name: "flying cat", emoji: "💛" },
  { name: "seedling", emoji: "🌱" },
  { name: "wink", emoji: "😉" },
  { name: "shroom", emoji: "🍄" },
  { name: "sparkles", emoji: "✨" },
];

export default function Controls() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCursor, setSelectedCursor] = useState("default");
  const modalRef = useRef();
  const trailRef = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    switch (selectedCursor) {
      case "flying cat":
        document.body.style.cursor = `url("/cursor-cat.png") 16 16, auto`;
        break;
      case "seedling":
        document.body.style.cursor = `url("/cursor-seedling.png") 16 16, auto`;
        break;
      case "wink":
        document.body.style.cursor = `url("/cursor-wink.png") 16 16, auto`;
        break;
      case "shroom":
        document.body.style.cursor = `url("/cursor-shroom.png") 16 16, auto`;
        break;
      case "sparkles":
        document.body.style.cursor = `url("/cursor-sparkles.png") 16 16, auto`;
        break;
      default:
        document.body.style.cursor = `url("/cursor-default.png") 16 16, auto`;
        break;
    }
  }, [selectedCursor]);

  useEffect(() => {
    const currentCursor = cursors.find((c) => c.name === selectedCursor);
    if (!currentCursor || currentCursor.name === "default") return;

    const handleMouseMove = (e) => {
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
  }, [selectedCursor]);

  return (
    <div className="hidden md:block absolute top-0 left-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-2 px-2 py-1 rounded bg-white/70 hover:bg-white/90 transition"
      >
        Choose Cursor
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div ref={modalRef} className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg text-center font-semibold mb-4">
              Choose Cursor
            </h2>
            <div className="flex flex-wrap gap-2">
              {cursors.map((cursor) => (
                <button
                  key={cursor.name}
                  onClick={() => setSelectedCursor(cursor.name)}
                  className={`px-3 py-1 border rounded hover:bg-gray-200 transition ${
                    selectedCursor === cursor.name ? "bg-gray-300 font-bold" : ""
                  }`}
                >
                  {cursor.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}