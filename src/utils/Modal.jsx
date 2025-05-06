import React from "react";
import About from "../pages/About";
import ProjectList from "../pages/ProjectList"; 
import Contact from "../pages/Contact";
import Trash from "../pages/Trash";

const Modal = ({is3DView, isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-60 left-40 z-50 "
      onClick={onClose}
    >
      <div
        className="relative bg-gray-100 w-full max-w-lg h-[40vh] rounded-lg shadow-2xl overflow-hidden border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal top bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          
          <div className="w-12" />
        </div>

        {/* Content */}
        <div className="p-6 h-full overflow-y-auto text-black">
          {content === "Work" && <ProjectList is3DView={is3DView} />}
          {content === "About" && <About />}
          {content === "Contact" && <Contact />}
          {content === "Trash" && <Trash />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
