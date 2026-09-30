import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';

export interface RoomOption {
  id: number | string;
  name: string;
  images: string[];
  size?: string;
  guests?: string;
  bed?: string;
  view?: string;
  features?: string[];
  description?: string;
}

interface VillaSelectProps {
  rooms: RoomOption[];
  value: string;
  onChange: (roomName: string) => void;
  className?: string;
}

export default function VillaSelect({
  rooms,
  value,
  onChange,
  className = ''
}: VillaSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedRoom = rooms.find((r) => r.name === value) || rooms[0];

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      // Focus search after opening
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredRooms = rooms.filter((room) => {
    if (!search.trim()) return true;
    const query = search.toLowerCase();
    const nameMatch = room.name.toLowerCase().includes(query);
    const guestsMatch = room.guests?.toLowerCase().includes(query);
    const sizeMatch = room.size?.toLowerCase().includes(query);
    const featuresMatch = room.features?.some((f) => f.toLowerCase().includes(query));
    return nameMatch || guestsMatch || sizeMatch || featuresMatch;
  });

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Toggle Trigger Box */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearch('');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`w-full p-2.5 sm:p-3 bg-[#FAF8F5] border transition-all cursor-pointer flex items-center justify-between gap-3 ${
          isOpen
            ? 'border-[#732E24] ring-1 ring-[#732E24] bg-white'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          {selectedRoom?.images?.[0] ? (
            <img
              src={selectedRoom.images[0]}
              alt={selectedRoom.name}
              className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-xs shrink-0 border border-gray-200"
            />
          ) : (
            <div className="w-16 h-12 sm:w-20 sm:h-14 bg-gray-200 rounded-xs shrink-0" />
          )}
          <div className="min-w-0 text-left">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {selectedRoom ? selectedRoom.name : 'Select Preferred Villa'}
            </h4>
            <div className="text-xs text-gray-600 mt-0.5 truncate flex items-center gap-2">
              {selectedRoom?.size && (
                <span className="font-semibold text-gray-800">{selectedRoom.size}</span>
              )}
              {selectedRoom?.size && selectedRoom?.guests && <span>•</span>}
              {selectedRoom?.guests && (
                <span className="truncate">{selectedRoom.guests}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pr-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden sm:inline">
            {isOpen ? 'Close' : 'Change Villa'}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#732E24]' : ''
            }`}
          />
        </div>
      </div>

      {/* Dropdown with Rooms, Images, and Details */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1.5 bg-white border border-gray-200 shadow-xl rounded-none overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search bar inside dropdown */}
          <div className="p-2.5 sm:p-3 bg-[#FAF8F5] border-b border-gray-200 flex items-center gap-2 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search villas by name, bedrooms, slide, size..."
              className="w-full pl-9 pr-8 py-2 bg-white border border-gray-300 focus:border-[#732E24] text-xs sm:text-sm font-semibold outline-none text-gray-900 placeholder:text-gray-400 placeholder:font-normal transition-colors"
              onClick={(e) => e.stopPropagation()}
            />
            {search && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch('');
                  searchInputRef.current?.focus();
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Rooms List - Mobile & Desktop Responsive */}
          <div className="max-h-[380px] sm:max-h-[440px] overflow-y-auto p-2 space-y-2">
            {filteredRooms.length === 0 ? (
              <div className="p-8 text-center text-sm text-gray-500 font-light">
                No villas found matching &ldquo;{search}&rdquo;
              </div>
            ) : (
              filteredRooms.map((room) => {
                const isSelected = room.name === value;
                return (
                  <div
                    key={room.id}
                    onClick={() => {
                      onChange(room.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-start sm:items-center gap-3 p-2.5 sm:p-3 transition-all cursor-pointer border ${
                      isSelected
                        ? 'border-[#732E24] bg-[#732E24]/10 ring-1 ring-[#732E24]'
                        : 'border-gray-200 bg-[#FAF8F5] hover:border-gray-400 hover:bg-white'
                    }`}
                  >
                    {/* Villa Thumbnail Image - ALWAYS VISIBLE on Mobile & Desktop */}
                    <div className="relative shrink-0">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-20 h-16 sm:w-24 sm:h-18 object-cover rounded-xs border border-gray-200"
                        loading="lazy"
                      />
                      {room.size && (
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
                          {room.size}
                        </span>
                      )}
                    </div>

                    {/* Villa Name & Details */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-xs sm:text-sm font-bold leading-snug ${
                          isSelected ? 'text-[#732E24]' : 'text-gray-900'
                        }`}
                      >
                        {room.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-0.5 line-clamp-2">
                        {room.guests}
                      </p>

                      {/* Feature Tags */}
                      {room.features && room.features.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {room.features.slice(0, 3).map((feature, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[10px] font-medium px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-xs"
                            >
                              {feature}
                            </span>
                          ))}
                          {room.features.length > 3 && (
                            <span className="text-[10px] text-gray-400 self-center">
                              +{room.features.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Radio / Checkmark Selection Indicator */}
                    <div className="shrink-0 self-center pl-1">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#732E24] text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom helper bar with count & close */}
          <div className="px-3.5 py-2.5 bg-[#FAF8F5] border-t border-gray-200 flex items-center justify-between text-xs text-gray-600 font-semibold">
            <span>
              {filteredRooms.length}{' '}
              {filteredRooms.length === 1 ? 'villa available' : 'villas available'}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#732E24] hover:underline font-bold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
