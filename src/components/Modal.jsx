import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-gray-900 w-full max-w-md md:max-w-lg h-[50vh] overflow-y-auto p-0 md:p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">{content}</div>
        <button
          onClick={onClose}
          className="absolute top-4 left-6 text-lg hover:font-medium transition-all duration-200 ease-in-out"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
