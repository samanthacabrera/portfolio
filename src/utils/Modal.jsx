import React from "react";
import ProjectList from "../pages/ProjectList"; 

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-100 w-full max-w-4xl h-[75vh] rounded-lg shadow-2xl overflow-hidden border border-gray-300"
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
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Modal;
