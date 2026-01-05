import { useState, useRef, useEffect } from "react";

const cursors = [
  "default",
  "flying cat",
  "seedling",
  "happy",
  "shroom",
  "sparkles",
];

export default function Controls() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCursor, setSelectedCursor] = useState("default");
  const modalRef = useRef();

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
      case "happy":
        document.body.style.cursor = `url("/cursor-happy.png") 16 16, auto`;
        break;
      case "shroom":
        document.body.style.cursor = `url("/cursor-shroom.png") 16 16, auto`;
        break;
      case "sparkles":
        document.body.style.cursor = `url("/cursor-sparkles.png") 16 16, auto`;
        break;
      case "default":
      default:
        document.body.style.cursor = `url("/cursor-default.png") 16 16, auto`;
        break;
    }
  }, [selectedCursor]);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-2 px-2 py-1 rounded bg-white/70 hover:bg-white/90 transition"
      >
        Choose Cursor
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded shadow-lg w-80"
          >
            <h2 className="text-lg text-center font-semibold mb-4">Choose Cursor</h2>
            <div className="flex flex-wrap gap-2">
              {cursors.map((cursor) => (
                <button
                  key={cursor}
                  onClick={() => setSelectedCursor(cursor)}
                  className={`px-3 py-1 border rounded hover:bg-gray-200 transition ${
                    selectedCursor === cursor ? "bg-gray-300 font-bold" : ""
                  }`}
                >
                  {cursor}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
