import React, { useState } from "react";
import Modal from "../utils/Modal";
import ProjectList from "../pages/ProjectList";

const folders = [
  { name: "Projects", content: "Work" },
  { name: "About", content: "About" },
  { name: "Contact", content: "Contact" },
];

const LaptopScreen = ( {is3DView, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleFolderClick = (folder) => {
    setModalContent(folder.content); 
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#1a1a1a]/95 max-w-2xl mx-auto max-h-[500px] z-50 text-white flex flex-col items-center justify-center translate-y-[20vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded shadow-md"
        >
          X
        </button>

        {/* Folder Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {folders.map((folder) => (
            <div
              key={folder.name}
              onClick={() => handleFolderClick(folder)}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-6xl">📁</div>
              <span className="mt-2 text-sm">{folder.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        content={modalContent}
        is3DView={is3DView}
      />
    </>
  );
};

export default LaptopScreen;
