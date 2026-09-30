import { useState } from 'react';
import { resortData } from '../data/resort';
import * as LucideIcons from 'lucide-react';

export default function AmenitiesSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Amenities</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
        {resortData.amenities.map((amenity, idx) => {
          // @ts-ignore - dynamic icon access
          const Icon = LucideIcons[amenity.icon] || LucideIcons.Check;
          return (
            <div key={idx} className="flex items-center gap-4 text-gray-700">
              <Icon className="w-6 h-6 text-gray-900 stroke-[1.5]" />
              <span className="text-sm md:text-base">{amenity.name}</span>
            </div>
          );
        })}
      </div>
      
      <button 
        onClick={() => setShowAll(true)}
        className="mt-8 px-6 py-2.5 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
      >
        Show all amenities
      </button>

      {/* Full Screen Amenities Modal */}
      {showAll && (
        <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-black/40 backdrop-blur-sm sm:p-4 transition-opacity">
          <div className="bg-white w-full sm:max-w-3xl sm:rounded-2xl h-[90vh] sm:h-[85vh] flex flex-col animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">All Amenities</h3>
              <button 
                onClick={() => setShowAll(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <LucideIcons.X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              {resortData.allAmenities?.map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 border-gray-100">{category.category}</h4>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-600">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <LucideIcons.Check className="w-4 h-4 text-[#732E24] mt-0.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
