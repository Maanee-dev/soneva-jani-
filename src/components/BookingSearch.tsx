import { Calendar, User, ChevronLeft, ChevronRight, Plus, Minus, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingSearch() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<'checkin' | 'checkout' | 'guests' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Date State
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  
  // Guest State
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };
  
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  
  const handleDateSelect = (date: Date) => {
    if (activeDropdown === 'checkin') {
      setCheckInDate(date);
      if (checkOutDate && date >= checkOutDate) {
        setCheckOutDate(null);
      }
      setActiveDropdown('checkout');
    } else if (activeDropdown === 'checkout') {
      if (!checkInDate || date > checkInDate) {
        setCheckOutDate(date);
        setActiveDropdown(null);
      }
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return 'Add dates';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const totalGuests = adults + children;
  const guestText = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${infants > 0 ? `, ${infants} infant${infants > 1 ? 's' : ''}` : ''}`;

  const renderCalendar = () => {
    const days = generateCalendarDays();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
      <>
        {/* Mobile Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={() => setActiveDropdown(null)} />
        
        {/* Calendar Dropdown */}
        <div className="fixed md:absolute bottom-0 md:bottom-auto md:top-[calc(100%+16px)] left-0 md:left-4 md:-translate-x-0 bg-white rounded-t-3xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border md:border-gray-100 p-6 z-50 w-full md:w-[400px] max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-full md:slide-in-from-top-4 md:zoom-in-95 duration-200">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h3 className="text-lg font-semibold font-playfair tracking-wide">Select Dates</h3>
            <button onClick={() => setActiveDropdown(null)} className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-full transition-all text-gray-500 hover:text-gray-800">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="font-semibold text-gray-900 text-lg tracking-wide">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-full transition-all text-gray-500 hover:text-gray-800">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
          </div>
          
          <div className="grid grid-cols-7 gap-y-2 gap-x-1">
            {days.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} className="h-12 md:h-11" />;
              
              const isCheckIn = checkInDate?.getTime() === date.getTime();
              const isCheckOut = checkOutDate?.getTime() === date.getTime();
              const isBetween = checkInDate && checkOutDate && date > checkInDate && date < checkOutDate;
              const isPast = date < new Date(new Date().setHours(0,0,0,0));
              const isDisabled = isPast || (activeDropdown === 'checkout' && checkInDate && date <= checkInDate);

              return (
                <div key={i} className={`relative flex justify-center ${isBetween ? 'bg-[#f7f5f2]' : ''} ${isCheckIn ? 'rounded-l-full bg-gradient-to-r from-transparent to-[#f7f5f2]' : ''} ${isCheckOut ? 'rounded-r-full bg-gradient-to-l from-transparent to-[#f7f5f2]' : ''}`}>
                  <button
                    disabled={isDisabled}
                    onClick={() => handleDateSelect(date)}
                    className={`
                      h-12 w-12 md:h-11 md:w-11 flex items-center justify-center text-sm font-medium rounded-full transition-all
                      ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:border-gray-900 hover:border'}
                      ${(isCheckIn || isCheckOut) ? 'bg-gray-900 text-white shadow-lg scale-105 z-10' : 'bg-transparent'}
                    `}
                  >
                    {date.getDate()}
                  </button>
                </div>
              )
            })}
          </div>
          
          <div className="mt-8 md:hidden">
            <button onClick={() => setActiveDropdown(null)} className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-md">
              Apply Dates
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderGuestCounter = () => {
    return (
      <>
        {/* Mobile Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={() => setActiveDropdown(null)} />
        
        {/* Guest Dropdown */}
        <div className="fixed md:absolute bottom-0 md:bottom-auto md:top-[calc(100%+16px)] right-0 md:right-4 bg-white rounded-t-3xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border md:border-gray-100 p-6 md:p-8 z-50 w-full md:w-[380px] space-y-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-full md:slide-in-from-top-4 md:zoom-in-95 duration-200">
          <div className="flex items-center justify-between md:hidden mb-2">
            <h3 className="text-lg font-semibold font-playfair tracking-wide">Guests</h3>
            <button onClick={() => setActiveDropdown(null)} className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 md:text-base text-lg tracking-wide">Adults</div>
              <div className="text-sm text-gray-500">Age 13+</div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setAdults(Math.max(1, adults - 1))} className={`p-3 md:p-2 rounded-full border ${adults <= 1 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors'}`} disabled={adults <= 1}>
                <Minus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <span className="w-6 md:w-4 text-center font-medium text-gray-900 md:text-base text-lg">{adults}</span>
              <button onClick={() => setAdults(adults + 1)} className="p-3 md:p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                <Plus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 md:text-base text-lg tracking-wide">Children</div>
              <div className="text-sm text-gray-500">Ages 2-12</div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setChildren(Math.max(0, children - 1))} className={`p-3 md:p-2 rounded-full border ${children <= 0 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors'}`} disabled={children <= 0}>
                <Minus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <span className="w-6 md:w-4 text-center font-medium text-gray-900 md:text-base text-lg">{children}</span>
              <button onClick={() => setChildren(children + 1)} className="p-3 md:p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                <Plus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 md:text-base text-lg tracking-wide">Infants</div>
              <div className="text-sm text-gray-500">Under 2</div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setInfants(Math.max(0, infants - 1))} className={`p-3 md:p-2 rounded-full border ${infants <= 0 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors'}`} disabled={infants <= 0}>
                <Minus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <span className="w-6 md:w-4 text-center font-medium text-gray-900 md:text-base text-lg">{infants}</span>
              <button onClick={() => setInfants(infants + 1)} className="p-3 md:p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                <Plus className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 md:hidden">
            <button onClick={() => setActiveDropdown(null)} className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-md">
              Apply Guests
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="py-12 border-b border-gray-200 relative z-40">
      {/* AI Chat-like subtle background shade/glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl h-[250px] bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-[40%] h-[150px] bg-gradient-to-tr from-cyan-50/40 to-teal-50/40 blur-[60px] rounded-full"></div>
      </div>
      
      <div className="relative" ref={dropdownRef}>
        <div className="relative w-full md:w-fit mx-auto group mt-4 mb-2">
          
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-3xl md:rounded-full blur-[10px] md:blur-[12px] opacity-60"></div>
          
          <div className="relative bg-white border border-gray-200 shadow-xl rounded-3xl md:rounded-full p-2">
            <div className="flex flex-col md:flex-row items-center relative">
              
              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'checkin' ? null : 'checkin')}
                className={`flex-1 min-w-[160px] p-4 md:px-8 cursor-pointer rounded-2xl md:rounded-full transition-all duration-300 w-full md:w-auto relative ${activeDropdown === 'checkin' ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] scale-[1.02] z-10 ring-1 ring-gray-100' : 'hover:bg-gray-50'}`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Check-in</div>
                <div className={`text-sm md:text-base flex items-center gap-2 ${checkInDate ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {formatDate(checkInDate)}
                </div>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-gray-200 mx-1"></div>
              
              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'checkout' ? null : 'checkout')}
                className={`flex-1 min-w-[160px] p-4 md:px-8 cursor-pointer rounded-2xl md:rounded-full transition-all duration-300 w-full md:w-auto relative ${activeDropdown === 'checkout' ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] scale-[1.02] z-10 ring-1 ring-gray-100' : 'hover:bg-gray-50'}`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Check-out</div>
                <div className={`text-sm md:text-base flex items-center gap-2 ${checkOutDate ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {formatDate(checkOutDate)}
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-200 mx-1"></div>

              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
                className={`flex-1 min-w-[190px] p-4 md:px-8 cursor-pointer rounded-2xl md:rounded-full transition-all duration-300 w-full md:w-auto relative ${activeDropdown === 'guests' ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] scale-[1.02] z-10 ring-1 ring-gray-100' : 'hover:bg-gray-50'}`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Guests</div>
                <div className="text-gray-900 text-sm md:text-base flex items-center gap-2 font-medium truncate">
                  {guestText}
                </div>
              </div>

              <div className="px-2 mt-2 md:mt-0 w-full md:w-auto">
                <button 
                  onClick={() => navigate('/enquire')}
                  className="w-full md:w-auto bg-gray-900 hover:bg-[#732E24] text-white font-semibold py-4 md:py-3 px-8 rounded-xl md:rounded-full transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-md hover:shadow-lg hover:scale-105"
                >
                  <span className="text-[15px]">Search</span>
                </button>
              </div>

              {(activeDropdown === 'checkin' || activeDropdown === 'checkout') && renderCalendar()}
              {activeDropdown === 'guests' && renderGuestCounter()}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium tracking-wide">Best Price Guarantee</span>
      </div>
    </div>
  );
}
