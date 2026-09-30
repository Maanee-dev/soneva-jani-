import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  subLabel?: string;
  searchStr: string;
}

interface SearchableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  dropdownClassName?: string;
  wrapperClassName?: string;
}

export default function SearchableSelect({ options, value, onChange, placeholder = 'Select...', className = '', dropdownClassName = '', wrapperClassName = '' }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(o => o.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(o => 
    o.searchStr.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`relative ${wrapperClassName}`} ref={wrapperRef}>
      <div 
        className={`w-full py-3 flex items-center justify-between cursor-pointer group transition-colors ${className.includes('border-b-0') ? '' : 'border-b border-gray-200'} ${className}`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearch('');
        }}
      >
        <span className="font-light truncate text-gray-900 pr-2">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className={`absolute z-50 mt-1 bg-[#F5F2EB] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 w-full min-w-[200px] ${dropdownClassName}`}>
          <div className="p-2 border-b border-gray-100 relative bg-[#F5F2EB]">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="w-full pl-8 pr-3 py-2 bg-white rounded-lg text-sm font-light outline-none border border-transparent focus:border-gray-200 transition-colors"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          
          <div className="max-h-60 overflow-y-auto p-1 custom-scrollbar bg-[#F5F2EB]">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-sm text-gray-500 font-light">No results found</div>
            ) : (
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors text-sm font-light ${
                    value === option.value ? 'bg-[#732E24]/10 text-[#732E24]' : 'hover:bg-white text-gray-900'
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="truncate">{option.label}</span>
                    {option.subLabel && <span className="text-gray-400 text-xs shrink-0">{option.subLabel}</span>}
                  </div>
                  {value === option.value && <Check className="w-4 h-4 shrink-0" />}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
