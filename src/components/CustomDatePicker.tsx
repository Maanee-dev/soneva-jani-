import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X, Check } from 'lucide-react';

interface CustomDatePickerProps {
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  onDatesChange: (checkIn: string, checkOut: string) => void;
  nights: number;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// Helpers
const parseLocalDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
};

const formatToYMD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (dateStr: string): string => {
  const d = parseLocalDate(dateStr);
  if (!d) return 'Select date';
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const isSameDay = (d1: Date | null, d2: Date | null) => {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export default function CustomDatePicker({
  checkIn,
  checkOut,
  onDatesChange,
  nights
}: CustomDatePickerProps) {
  // Which calendar is open: 'checkin' | 'checkout' | null
  const [activePicker, setActivePicker] = useState<'checkin' | 'checkout' | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const checkInDateObj = parseLocalDate(checkIn);
  const checkOutDateObj = parseLocalDate(checkOut);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Month navigation for active calendar
  const initialDate = checkInDateObj || today;
  const [viewDate, setViewDate] = useState<Date>(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Close calendar on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActivePicker(null);
        setHoveredDate(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePicker(null);
        setHoveredDate(null);
      }
    };

    if (activePicker) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePicker]);

  const openCheckInPicker = () => {
    if (checkInDateObj) {
      setViewDate(new Date(checkInDateObj.getFullYear(), checkInDateObj.getMonth(), 1));
    } else {
      setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }
    setActivePicker('checkin');
    setHoveredDate(null);
  };

  const openCheckOutPicker = () => {
    if (checkOutDateObj) {
      setViewDate(new Date(checkOutDateObj.getFullYear(), checkOutDateObj.getMonth(), 1));
    } else if (checkInDateObj) {
      setViewDate(new Date(checkInDateObj.getFullYear(), checkInDateObj.getMonth(), 1));
    } else {
      setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }
    setActivePicker('checkout');
    setHoveredDate(null);
  };

  // Month navigation
  const prevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const nextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  // Generate days
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Handle clicking day on Check-in calendar
  const handleSelectCheckIn = (date: Date) => {
    if (date < today) return;
    const newInStr = formatToYMD(date);

    if (checkOutDateObj && date >= checkOutDateObj) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      onDatesChange(newInStr, formatToYMD(nextDay));
    } else {
      onDatesChange(newInStr, checkOut);
    }
    // Switch to Check-out picker
    setActivePicker('checkout');
    const targetOutDate = checkOutDateObj || date;
    setViewDate(new Date(targetOutDate.getFullYear(), targetOutDate.getMonth(), 1));
    setHoveredDate(null);
  };

  // Handle clicking day on Check-out calendar
  const handleSelectCheckOut = (date: Date) => {
    const minDate = checkInDateObj || today;
    if (date <= minDate) return;

    onDatesChange(checkIn, formatToYMD(date));
    setActivePicker(null);
    setHoveredDate(null);
  };

  return (
    <div className="relative" ref={containerRef}>
      
      {/* 2 DATE BOXES: CHECK-IN & CHECK-OUT (WITH HIGHLIGHT FUNCTION) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Check-in Field Box */}
        <button
          type="button"
          onClick={openCheckInPicker}
          className={`p-4 text-left border-2 transition-all cursor-pointer flex items-center justify-between relative ${
            activePicker === 'checkin'
              ? 'border-[#732E24] bg-white ring-4 ring-[#732E24]/15 shadow-md'
              : checkIn
              ? 'border-[#732E24]/60 bg-[#732E24]/5 hover:border-[#732E24]'
              : 'border-gray-300 hover:border-gray-600 bg-[#FAF8F5]'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Check-in Date <span className="text-[#732E24]">*</span>
              </span>
              {checkIn && (
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 bg-[#732E24] text-white rounded-xs tracking-wider">
                  Check-in
                </span>
              )}
            </div>
            <span className="text-base sm:text-lg font-bold text-gray-900 block">
              {checkIn ? formatDisplayDate(checkIn) : 'Choose date'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {checkIn && <Check className="w-4 h-4 text-[#732E24] stroke-[3]" />}
            <CalendarIcon className={`w-5 h-5 shrink-0 ${activePicker === 'checkin' || checkIn ? 'text-[#732E24]' : 'text-gray-500'}`} />
          </div>
        </button>

        {/* Check-out Field Box */}
        <button
          type="button"
          onClick={openCheckOutPicker}
          className={`p-4 text-left border-2 transition-all cursor-pointer flex items-center justify-between relative ${
            activePicker === 'checkout'
              ? 'border-[#732E24] bg-white ring-4 ring-[#732E24]/15 shadow-md'
              : checkOut
              ? 'border-[#732E24]/60 bg-[#732E24]/5 hover:border-[#732E24]'
              : 'border-gray-300 hover:border-gray-600 bg-[#FAF8F5]'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Check-out Date <span className="text-[#732E24]">*</span>
              </span>
              {checkOut && (
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 bg-[#732E24] text-white rounded-xs tracking-wider">
                  Check-out
                </span>
              )}
            </div>
            <span className="text-base sm:text-lg font-bold text-gray-900 block">
              {checkOut ? formatDisplayDate(checkOut) : 'Choose date'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {checkOut && <Check className="w-4 h-4 text-[#732E24] stroke-[3]" />}
            <CalendarIcon className={`w-5 h-5 shrink-0 ${activePicker === 'checkout' || checkOut ? 'text-[#732E24]' : 'text-gray-500'}`} />
          </div>
        </button>

      </div>

      {/* CALENDAR POPUP WITH BOX HIGHLIGHT FUNCTION */}
      {activePicker && (
        <div
          className={`mt-2 bg-white border-2 border-gray-900 p-4 sm:p-5 shadow-2xl z-30 max-w-sm sm:max-w-md w-full ${
            activePicker === 'checkout' ? 'sm:ml-auto' : ''
          }`}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#732E24]">
                {activePicker === 'checkin' ? 'Select Check-in Date' : 'Select Check-out Date'}
              </span>
              <div className="text-xs font-semibold text-gray-600 mt-0.5">
                {activePicker === 'checkin' ? 'Click on your arrival date' : 'Click on your departure date'}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setActivePicker(null);
                setHoveredDate(null);
              }}
              className="p-1 text-gray-400 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Month / Year Navigator */}
          <div className="flex items-center justify-between mb-3 px-1">
            <button
              type="button"
              onClick={prevMonth}
              disabled={
                activePicker === 'checkin'
                  ? viewDate.getFullYear() === today.getFullYear() && viewDate.getMonth() <= today.getMonth()
                  : checkInDateObj
                  ? viewDate.getFullYear() === checkInDateObj.getFullYear() && viewDate.getMonth() <= checkInDateObj.getMonth()
                  : viewDate.getFullYear() === today.getFullYear() && viewDate.getMonth() <= today.getMonth()
              }
              className="p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <div className="text-sm font-extrabold text-gray-900 tracking-wide">
              {MONTH_NAMES[month]} {year}
            </div>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Day of Week Labels */}
          <div className="grid grid-cols-7 text-center mb-1">
            {DAY_NAMES.map((d) => (
              <div key={d} className="text-xs font-bold text-gray-400 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid with Highlighted Boxes and Range Span */}
          <div className="grid grid-cols-7">
            {days.map((date, idx) => {
              if (!date) {
                return <div key={`empty-${idx}`} className="h-9 w-full" />;
              }

              const isPast = activePicker === 'checkin'
                ? date < today
                : date <= (checkInDateObj || today);

              const isCheckInDay = isSameDay(date, checkInDateObj);
              const isCheckOutDay = isSameDay(date, checkOutDateObj);

              // Date range highlight logic:
              // 1. Confirmed stay between checkIn and checkOut
              const isConfirmedInRange = Boolean(
                checkInDateObj &&
                checkOutDateObj &&
                date > checkInDateObj &&
                date < checkOutDateObj
              );

              // 2. Hover preview range when picking checkout
              const isHoveredInRange = Boolean(
                activePicker === 'checkout' &&
                checkInDateObj &&
                hoveredDate &&
                hoveredDate > checkInDateObj &&
                date > checkInDateObj &&
                date < hoveredDate
              );

              const isHoverTarget = Boolean(
                activePicker === 'checkout' &&
                hoveredDate &&
                isSameDay(date, hoveredDate) &&
                checkInDateObj &&
                hoveredDate > checkInDateObj
              );

              const inRange = isConfirmedInRange || isHoveredInRange;

              // Container background strip logic for continuous highlight band
              let containerBg = '';
              if (inRange) {
                containerBg = 'bg-[#732E24]/15';
              } else if (isCheckInDay && (checkOutDateObj || (hoveredDate && hoveredDate > checkInDateObj))) {
                containerBg = 'bg-gradient-to-r from-transparent 50% to-[#732E24]/15 50%';
              } else if (isCheckOutDay && checkInDateObj) {
                containerBg = 'bg-gradient-to-l from-transparent 50% to-[#732E24]/15 50%';
              } else if (isHoverTarget && checkInDateObj) {
                containerBg = 'bg-gradient-to-l from-transparent 50% to-[#732E24]/15 50%';
              }

              // Button / box style
              let buttonStyle = 'w-8 h-8 rounded-sm flex flex-col items-center justify-center text-xs font-bold transition-all relative z-10';

              if (isPast) {
                buttonStyle += ' text-gray-300 cursor-not-allowed';
              } else if (isCheckInDay) {
                // Highlighted Check-in Box
                buttonStyle += ' bg-[#732E24] text-white font-black shadow-md scale-105 ring-2 ring-[#732E24]/30';
              } else if (isCheckOutDay || isHoverTarget) {
                // Highlighted Check-out Box
                buttonStyle += ' bg-[#732E24] text-white font-black shadow-md scale-105 ring-2 ring-[#732E24]/30';
              } else if (inRange) {
                // Highlighted in-between box
                buttonStyle += ' text-[#732E24] font-extrabold hover:bg-[#732E24]/20';
              } else {
                buttonStyle += ' text-gray-900 hover:bg-gray-100 hover:font-bold cursor-pointer';
              }

              return (
                <div
                  key={date.toISOString()}
                  className={`h-9 w-full flex items-center justify-center relative ${containerBg}`}
                  onMouseEnter={() => {
                    if (activePicker === 'checkout' && checkInDateObj && date > checkInDateObj) {
                      setHoveredDate(date);
                    }
                  }}
                >
                  <button
                    type="button"
                    disabled={isPast}
                    onClick={() => {
                      if (activePicker === 'checkin') {
                        handleSelectCheckIn(date);
                      } else {
                        handleSelectCheckOut(date);
                      }
                    }}
                    className={buttonStyle}
                    title={
                      isCheckInDay
                        ? 'Check-in Date'
                        : isCheckOutDay
                        ? 'Check-out Date'
                        : undefined
                    }
                  >
                    <span>{date.getDate()}</span>
                    {/* Small sub-label for active selection */}
                    {isCheckInDay && (
                      <span className="text-[7px] leading-[8px] font-black uppercase text-amber-200 -mt-0.5">
                        IN
                      </span>
                    )}
                    {(isCheckOutDay || isHoverTarget) && !isCheckInDay && (
                      <span className="text-[7px] leading-[8px] font-black uppercase text-amber-200 -mt-0.5">
                        OUT
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Highlight Legend & Status */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#732E24] rounded-xs inline-block"></span>
                <span className="text-[11px] font-bold text-gray-700">Check-in / Out</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-3 bg-[#732E24]/20 rounded-xs inline-block"></span>
                <span className="text-[11px] font-bold text-gray-700">Stay Highlight</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActivePicker(null);
                setHoveredDate(null);
              }}
              className="px-3 py-1 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-black cursor-pointer"
            >
              Done
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
