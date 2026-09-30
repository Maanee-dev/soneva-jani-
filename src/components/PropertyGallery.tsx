import { useState } from 'react';
import { resortData } from '../data/resort';
import ImageGalleryModal from './ImageGalleryModal';

export default function PropertyGallery() {
  const [mainImg, ...gridImgs] = resortData.images;
  const displayGridImgs = gridImgs.slice(0, 4);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* Mobile view - Image slider */}
      <div className="md:hidden relative rounded-xl overflow-hidden aspect-[4/3] group">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
          {resortData.images.map((img, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
              <img 
                src={img} 
                alt={`${resortData.name} ${idx + 1}`}
                className="w-full h-full object-cover"
                onClick={() => setIsGalleryOpen(true)}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <button 
            onClick={() => setIsGalleryOpen(true)}
            className="bg-white backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-3 w-3 fill-current"><path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>
            Show all
          </button>
        </div>
      </div>

      {/* Desktop view - Airbnb style gallery */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[50vh] min-h-[400px] max-h-[600px] rounded-xl overflow-hidden group">
        <div className="col-span-2 row-span-2 relative overflow-hidden" onClick={() => setIsGalleryOpen(true)}>
          <img 
            src={mainImg} 
            alt={`${resortData.name} - Main Resort View`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>
        {displayGridImgs.map((img, idx) => (
          <div key={idx} className="relative overflow-hidden" onClick={() => setIsGalleryOpen(true)}>
            <img 
              src={img} 
              alt={`${resortData.name} - Resort Feature ${idx + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            {/* Show 'View all photos' button on the last image */}
            {idx === 3 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setIsGalleryOpen(true); }}
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-semibold border border-gray-900 hover:bg-gray-50 shadow-sm transition-colors z-10 flex items-center gap-2"
              >
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-4 w-4 fill-current"><path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>
                Show all photos
              </button>
            )}
          </div>
        ))}
      </div>

      <ImageGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
}
