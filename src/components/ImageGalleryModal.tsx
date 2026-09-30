import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { resortData } from '../data/resort';

export default function ImageGalleryModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Aggregate all images
  const allImages = [
    ...resortData.images,
    ...resortData.rooms.flatMap(room => room.images)
  ].filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300">
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 border-gray-100">
        <div className="text-sm font-semibold tracking-widest uppercase">
          {currentIndex + 1} / {allImages.length} Photos
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
        >
          Close
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 relative flex items-center justify-center bg-gray-50 overflow-hidden">
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-10 p-4 bg-white hover:bg-white rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="w-full h-full max-w-6xl p-4 md:p-12 flex items-center justify-center">
          <img 
            src={allImages[currentIndex]} 
            alt={`Gallery ${currentIndex + 1}`} 
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-10 p-4 bg-white hover:bg-white rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
