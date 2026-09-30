import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resortData } from '../data/resort';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function RoomCard({ room }: { room: any; key?: React.Key }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!room.images || room.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % room.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [room.images]);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % room.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 group cursor-pointer">
      {/* Image Carousel */}
      <div className="md:w-1/3 aspect-[4/3] md:aspect-auto md:h-64 rounded-xl overflow-hidden relative group/carousel bg-gray-100">
        {room.images.map((img: string, idx: number) => (
          <img 
            key={idx}
            src={img} 
            alt={`${room.name} view ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        
        {room.images.length > 1 && (
          <>
            <button 
              onClick={prevImg} 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white shadow-sm hover:scale-105 z-20"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900 pr-0.5" />
            </button>
            <button 
              onClick={nextImg} 
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white shadow-sm hover:scale-105 z-20"
            >
              <ChevronRight className="w-5 h-5 text-gray-900 pl-0.5" />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
              {room.images.map((_: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImg ? 'bg-white' : 'bg-white'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Details */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">{room.name}</h3>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span className="text-[#732E24] text-lg leading-none">★</span>
              <span>{room.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap text-sm text-gray-600 gap-x-3 gap-y-1 mb-4">
            <span>{room.size}</span>
            <span>·</span>
            <span>{room.guests}</span>
            <span>·</span>
            <span>{room.bed}</span>
            <span>·</span>
            <span>{room.view}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {room.features.map((feature: string, idx: number) => (
              <span key={idx} className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                {feature}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {room.description}
          </p>

          {room.inclusions && (
            <div className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-md mb-4 inline-block">
              <span className="font-semibold mr-1">Included:</span> {room.inclusions}
            </div>
          )}

          {room.roomAmenities && room.roomAmenities.length > 0 && (
            <div className="mt-2 mb-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAmenities(!showAmenities);
                }}
                className="text-sm font-semibold text-[#732E24] hover:text-[#954034] transition-colors flex items-center gap-1"
              >
                {showAmenities ? 'Hide Amenities' : 'View Full Amenities'}
                <svg
                  className={`w-4 h-4 transition-transform ${showAmenities ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showAmenities && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 bg-gray-50 p-4 rounded-lg">
                  {room.roomAmenities.map((group: any, idx: number) => (
                    <div key={idx}>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        {group.category}
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {group.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#732E24] mt-0.5">•</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t border-gray-100 pt-6">
          <button 
            onClick={() => navigate(`/enquire?room=${encodeURIComponent(room.name)}`)}
            className="w-full md:w-auto px-8 py-3 bg-[#732E24] text-white font-semibold rounded-lg hover:bg-[#954034] transition-colors shadow-sm"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RoomsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(resortData.rooms.length / itemsPerPage);
  
  const paginatedRooms = resortData.rooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-12 border-b border-gray-200">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Rooms & Villas</h2>
        <span className="text-sm text-gray-500 font-medium">{resortData.rooms.length} accommodations</span>
      </div>
      
      <div className="space-y-8">
        {paginatedRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-2">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === idx + 1 
                    ? 'bg-[#732E24] text-white' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
