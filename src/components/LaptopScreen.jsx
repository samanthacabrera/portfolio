import React, { useState } from "react";
import Modal from "../utils/Modal";

const folders = [
  { name: "Projects", content: "Work", icon: "📁" },
  { name: "About", content: "About", icon: "📁" },
  { name: "Notes", content: "Notes", icon: "📁" },
  { name: "Photos", content: "Photos", icon: "📁" },
  { name: "Trash", content: "Trash", icon: "🗑️" },
];

const LaptopScreen = ({ is3DView, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

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
      <div className="fixed inset-0 bg-red-200 rounded max-w-2xl mx-auto max-h-[500px] z-50 text-white flex flex-col items-center justify-between translate-y-[10vh] pb-6">

        <div className="w-full flex justify-between items-center rounded-t px-4 py-1 bg-black/30 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <button 
                onClick={onClose} 
                className="w-3 h-3 rounded-full text-xs text-white bg-red-500 hover:bg-red-600"
              />
              <div className="w-3 h-3 rounded-full text-xs text-white bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full text-xs text-white bg-green-500"></div>
            </div>
            <span className="ml-4 text-xs font-semibold">Sam's Desktop</span>
          </div>
          
          <div className="flex items-center space-x-3 text-xs">
            <span>{currentTime}</span>
            <span>ᯤ</span>
          </div>
        </div>
        
        {/* Desktop area */}
        <div className="flex self-end">
          <div className="grid grid-cols-2 gap-4">
            {folders.map((folder) => (
              <div
                key={folder.name}
                onClick={() => handleFolderClick(folder)}
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="text-4xl">
                  <span>{folder.icon}</span>
                </div>
                <span className="mt-2 text-xs font-medium text-white/80">{folder.name}</span>
              </div>
            ))}
          </div>
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