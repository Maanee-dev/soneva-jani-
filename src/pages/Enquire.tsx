import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { resortData } from '../data/resort';
import { 
  ArrowLeft, 
  Users, 
  X, 
  Check, 
  Plus,
  Minus
} from 'lucide-react';
import { countries } from '../data/countries';
import { supabase } from '../lib/supabase';
import SearchableSelect from '../components/SearchableSelect';
import CustomDatePicker from '../components/CustomDatePicker';
import VillaSelect from '../components/VillaSelect';

// Helper to format Date to YYYY-MM-DD for native input
const toDateInputValue = (d: Date) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function Enquire() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedRoom = searchParams.get('room') || resortData.rooms[0]?.name || '';

  useSEO({
    title: "Check Rates & Availability | Book Soneva Jani Maldives",
    description: "Check rates and availability for your Soneva Jani Maldives stay. Fast response, exclusive resort rates, VIP transfers, and bespoke travel design.",
    path: "/enquire",
    image: resortData.images[0]
  });

  // Default dates: check-in 14 days from now, checkout 19 days from now (5 nights)
  const today = new Date();
  const defaultCheckIn = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
  const defaultCheckOut = new Date(today.getTime() + 19 * 24 * 60 * 60 * 1000);

  const [checkIn, setCheckIn] = useState<string>(toDateInputValue(defaultCheckIn));
  const [checkOut, setCheckOut] = useState<string>(toDateInputValue(defaultCheckOut));

  // Guests
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  // Villa & Dining
  const [roomChoice1, setRoomChoice1] = useState<string>(preSelectedRoom);
  const [mealPlan, setMealPlan] = useState<string>('Bed & Breakfast');

  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState<boolean>(true);

  // Country / Geo-detection
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(c => c.code === 'US') || countries[0]
  );
  const [nationality, setNationality] = useState(
    countries.find(c => c.code === 'US') || countries[0]
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Auto-detect country
  useEffect(() => {
    fetch('https://api.country.is')
      .then(res => res.json())
      .then(data => {
        if (data.country) {
          const match = countries.find(c => c.code === data.country);
          if (match) {
            setSelectedCountry(match);
            setNationality(match);
          }
        }
      })
      .catch(() => {
        fetch('https://ipapi.co/json/')
          .then(res => res.json())
          .then(data => {
            if (data.country_code) {
              const match = countries.find(c => c.code === data.country_code);
              if (match) {
                setSelectedCountry(match);
                setNationality(match);
              }
            }
          })
          .catch(() => {});
      });
  }, []);

  // Calculate nights
  const nights = React.useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }
    if (!checkIn || !checkOut || nights <= 0) {
      setFormError('Please select valid check-in and check-out dates.');
      return;
    }

    setIsSubmitting(true);

    try {
      const [yIn, mIn, dInNum] = checkIn.split('-').map(Number);
      const [yOut, mOut, dOutNum] = checkOut.split('-').map(Number);
      const dIn = new Date(yIn, mIn - 1, dInNum);
      const dOut = new Date(yOut, mOut - 1, dOutNum);
      const checkInFormatted = dIn.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      const checkOutFormatted = dOut.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      const datesStr = `${checkInFormatted} to ${checkOutFormatted}`;
      const guestsStr = `${adults} Adults, ${children} Children${infants > 0 ? `, ${infants} Infants` : ''}`;
      const fullPhone = `${selectedCountry.dialCode} ${phone.trim()}`;

      // 1. Supabase insert
      if (supabase) {
        try {
          await supabase
            .from('soneva_jani_inquiries')
            .insert([
              {
                full_name: fullName.trim(),
                email: email.trim(),
                nationality: nationality.name,
                phone: fullPhone,
                check_in_date: dIn.toISOString(),
                check_out_date: dOut.toISOString(),
                adults,
                children,
                infants,
                room_choice_1: roomChoice1,
                room_choice_2: null,
                meal_plan: mealPlan,
                special_requests: notes.trim() || null,
                agreed_to_privacy: agreedToPrivacy
              }
            ]);
        } catch (dbErr) {
          console.warn('Supabase insert issue:', dbErr);
        }
      }

      // 2. Send email via server
      try {
        await fetch('/send-email.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            phone: fullPhone,
            dates: datesStr,
            guests: guestsStr,
            primary_villa: roomChoice1,
            alternative_villa: roomChoice1,
            meal_plan: mealPlan,
            nationality: nationality.name,
            special_requests: notes.trim() || 'None'
          })
        });
      } catch (emailErr) {
        console.warn('Email notification skipped:', emailErr);
      }

      // 3. Telegram notification
      const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (telegramBotToken && telegramChatId) {
        try {
          const now = new Date();
          const maldivesTime = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Indian/Maldives',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }).format(now).replace(',', ' at');

          const altRoom = roomChoice1;

          const telegramMessage = `New Inquiry: ${resortData.name}
Received: ${maldivesTime} (Maldives Time)

Name: ${fullName.trim()}
Email: ${email.trim()}
Phone: ${fullPhone}
Nationality: ${nationality.name}

Room: ${roomChoice1} (Alt: ${altRoom})
Meal Plan: ${mealPlan}
Dates: ${checkInFormatted} to ${checkOutFormatted}
Guests: ${adults} Adults, ${children} Children${infants > 0 ? `, ${infants} Infants` : ''}

Notes: ${notes.trim() || 'None'}`;

          await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: telegramMessage
            })
          });
        } catch (tgErr) {
          console.warn('Telegram send failed:', tgErr);
        }
      }

      setIsSubmitting(false);

      // Navigate to Thank You
      const firstName = fullName.trim().split(' ')[0] || 'Guest';
      navigate(`/thank-you?name=${encodeURIComponent(firstName)}`, {
        state: {
          fullName: fullName.trim(),
          email: email.trim(),
          phone: fullPhone,
          checkInDate: dIn.toISOString(),
          checkOutDate: dOut.toISOString(),
          adults,
          children,
          infants,
          roomChoice1,
          mealPlan
        }
      });
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setFormError('Something went wrong submitting your request. Please try again or contact us directly.');
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2EB] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-[#732E24] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resort
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div className="mb-8">
          <div className="border-b border-gray-200/80 pb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Check Rates & Availability
            </h1>
          </div>
        </div>

        {/* Form Error Banner */}
        {formError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold rounded-lg flex items-center justify-between">
            <span>{formError}</span>
            <button type="button" onClick={() => setFormError(null)} className="text-red-500 hover:text-red-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Main Single Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200/80 shadow-xs p-6 sm:p-10 space-y-10">
          
          {/* SECTION 1: DATES & GUESTS */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#732E24] text-white flex items-center justify-center text-xs font-extrabold">1</div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-gray-900">Dates & Guests</h2>
                </div>
              </div>

              {/* Custom Calendar Date Selector */}
              <div className="mb-6">
                <CustomDatePicker
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onDatesChange={(cin, cout) => {
                    setCheckIn(cin);
                    setCheckOut(cout);
                  }}
                  nights={nights}
                />
              </div>

              {/* Guests Counters */}
              <div className="bg-[#FAF8F5] border border-gray-200 p-4 sm:p-5">
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gray-700" />
                  Travel Party
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {/* Adults */}
                  <div className="pt-2 sm:pt-0 sm:pr-3 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-gray-900">Adults</div>
                      <div className="text-xs font-semibold text-gray-600">Age 13+</div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <span className="w-6 text-center font-black text-base text-gray-900">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="pt-3 sm:pt-0 sm:px-3 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-gray-900">Children</div>
                      <div className="text-xs font-semibold text-gray-600">Ages 2 - 12</div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        disabled={children <= 0}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <span className="w-6 text-center font-black text-base text-gray-900">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="pt-3 sm:pt-0 sm:pl-3 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-gray-900">Infants</div>
                      <div className="text-xs font-semibold text-gray-600">Under 2 yrs</div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        disabled={infants <= 0}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <span className="w-6 text-center font-black text-base text-gray-900">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(infants + 1)}
                        className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-800 hover:border-black font-bold transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: VILLA & MEAL PLAN */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#732E24] text-white flex items-center justify-center text-xs font-extrabold">2</div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-gray-900">Villa & Meal Plan</h2>
                </div>
              </div>

              {/* Villa Dropdown / Toggle Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wider">
                  Select Preferred Villa <span className="text-[#732E24]">*</span>
                </label>
                
                <VillaSelect
                  rooms={resortData.rooms}
                  value={roomChoice1}
                  onChange={(val) => setRoomChoice1(val)}
                />
              </div>

              {/* Meal Plan Select */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wider">
                  Preferred Meal Plan
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Bed & Breakfast', 'Half Board', 'Full Board', 'All Inclusive'].map((plan) => {
                    const isSelected = mealPlan === plan;
                    return (
                      <button
                        type="button"
                        key={plan}
                        onClick={() => setMealPlan(plan)}
                        className={`p-3 text-left border transition-all text-xs sm:text-sm font-bold cursor-pointer ${
                          isSelected
                            ? 'border-[#732E24] bg-[#732E24]/10 text-[#732E24] ring-2 ring-[#732E24]'
                            : 'border-gray-300 bg-white hover:border-gray-500 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{plan}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#732E24] stroke-[3] shrink-0 ml-1" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 3: CONTACT & GUEST DETAILS */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#732E24] text-white flex items-center justify-center text-xs font-extrabold">3</div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-gray-900">Your Contact Details</h2>
                </div>
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wider">
                    Full Name <span className="text-[#732E24]">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-gray-300 focus:border-[#732E24] focus:bg-white outline-none text-gray-900 text-sm sm:text-base font-semibold transition-colors rounded-none placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>

                {/* Email and Nationality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wider">
                      Email Address <span className="text-[#732E24]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-gray-300 focus:border-[#732E24] focus:bg-white outline-none text-gray-900 text-sm sm:text-base font-semibold transition-colors rounded-none placeholder:text-gray-400 placeholder:font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wider">
                      Nationality / Passport Country
                    </label>
                    <SearchableSelect
                      options={countries.map(c => ({
                        value: c.code,
                        label: `${c.flag} ${c.name}`,
                        searchStr: `${c.name} ${c.code}`
                      }))}
                      value={nationality.code}
                      onChange={(val) => setNationality(countries.find(c => c.code === val) || countries[0])}
                      className="bg-[#FAF8F5] border border-gray-300 px-3.5 py-2.5 font-semibold text-gray-900"
                    />
                  </div>
                </div>

                {/* Phone with dial code */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-[#732E24]">*</span>
                  </label>
                  <div className="flex border border-gray-300 bg-[#FAF8F5] focus-within:border-[#732E24] focus-within:bg-white transition-colors">
                    <div className="w-36 shrink-0 border-r border-gray-300">
                      <SearchableSelect
                        options={countries.map(c => ({
                          value: c.code,
                          label: `${c.flag} ${c.dialCode}`,
                          subLabel: c.name,
                          searchStr: `${c.name} ${c.dialCode} ${c.code}`
                        }))}
                        value={selectedCountry.code}
                        onChange={(val) => setSelectedCountry(countries.find(c => c.code === val) || countries[0])}
                        className="border-b-0 px-3 py-2.5 font-bold text-gray-900"
                        dropdownClassName="w-[280px]"
                      />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="123 456 7890"
                      className="flex-1 px-3.5 py-2.5 outline-none text-sm sm:text-base font-semibold text-gray-900 bg-transparent rounded-none placeholder:text-gray-400 placeholder:font-normal"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wider">
                    Special Requests & Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g., Honeymoon celebration, dietary requirements, flight times, preferred villa location..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-gray-300 focus:border-[#732E24] focus:bg-white outline-none text-gray-900 text-sm font-semibold transition-colors rounded-none resize-y placeholder:text-gray-400 placeholder:font-normal"
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="mt-0.5 h-4 w-4 text-[#732E24] border-gray-300 rounded focus:ring-[#732E24] cursor-pointer"
                  />
                  <label htmlFor="privacy-policy" className="text-xs sm:text-sm font-semibold text-gray-800 cursor-pointer leading-relaxed">
                    I agree to the Privacy Policy and consent to being contacted with my customized quote and resort updates.
                  </label>
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2 border-t border-gray-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#732E24] hover:bg-[#954034] text-white text-base font-extrabold uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Enquiry</span>
                )}
              </button>
            </div>

        </form>

      </div>
    </main>
  );
}
