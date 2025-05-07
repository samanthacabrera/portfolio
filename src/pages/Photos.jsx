import React, { useState } from "react";
import photos from "../data/photosData";

const Photos = ({ is3DView }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  const showNext = () =>
    setLightboxIndex((prev) => (prev + 1) % photos.length);

  return (
    <>
      <div className="px-4 max-w-md mx-auto">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:scale-[101%] transition cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              className="w-8 h-8 object-cover rounded-sm"
            />
            <span className="text-sm text-black truncate">
              {photo.label || photo.alt || `Photo ${index + 1}`}
            </span>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full p-4 bg-[#1e1e1e] rounded-xl border border-gray-600 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✕
            </button>
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-lime-400"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-lime-400"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
