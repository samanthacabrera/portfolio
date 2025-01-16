import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-900 w-full max-w-md md:max-w-lg h-[50vh] overflow-y-auto p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">{content}</div>
        <button
          onClick={onClose}
          className="p-4 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
