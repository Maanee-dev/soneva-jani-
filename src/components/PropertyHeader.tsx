import { MapPin, Share } from 'lucide-react';
import { resortData } from '../data/resort';

export default function PropertyHeader() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: resortData.name,
          text: `Check out ${resortData.name} on Maldives Serenity Travels`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-gray-900 leading-tight mb-2">
            {resortData.name}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm gap-y-2 gap-x-4">
            <div className="flex items-center gap-1 font-medium text-gray-900">
              <span className="text-[#732E24] text-lg leading-none">★</span>
              <span>{resortData.rating}</span>
              <span className="text-gray-500 font-normal">·</span>
              <span className="underline cursor-pointer">{resortData.reviewsCount} reviews</span>
            </div>
            
            <div className="hidden sm:block text-gray-300">|</div>
            
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="underline cursor-pointer">{resortData.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          >
            <Share className="w-4 h-4" />
            <span className="underline">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
