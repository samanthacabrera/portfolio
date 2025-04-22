import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-gray-800 w-full max-w-md md:max-w-lg h-[50vh] overflow-y-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 modal-content">{content}</div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 ease-in-out"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;