import { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

const folders = [
  { name: "Projects", content: "Work", icon: "📁" },
  { name: "About", content: "About", icon: "📁" },
  { name: "Photos", content: "Photos", icon: "📁" },
];

const LaptopScreen = ({ is3DView, onClose }) => {
  const screenRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (screenRef.current && !screenRef.current.contains(event.target)) {
        onClose();
      }
    }
  
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
  
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);  
  
  useEffect(() => {
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
      <div
        ref={screenRef}
        className="fixed inset-0 bg-red-200 rounded max-w-2xl mx-auto max-h-[500px] z-50 text-white flex flex-col items-center justify-between translate-y-[10vh] pb-6">

        <div className="w-full flex justify-between items-center rounded-t px-4 py-1 bg-black/30 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold">Sam's Desktop</span>
          </div>
          
          <div className="flex items-center space-x-3 text-xs">
            <span>{currentTime}</span>
            <span>ᯤ</span>
          </div>
        </div>
        
      {/* Desktop area */}
      <div className="w-1/4 flex-1 self-end pt-8">
        <div className="grid grid-cols-2 gap-2 justify-start items-start">
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