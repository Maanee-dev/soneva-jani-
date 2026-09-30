import { useState, useMemo } from 'react';
import { resortData } from '../data/resort';
import { X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RateComparison() {
  const [showPriceMatch, setShowPriceMatch] = useState(false);
  const navigate = useNavigate();

  const dynamicRates = useMemo(() => {
    return [...resortData.rates].sort((a, b) => b.price - a.price); // Sort highest to lowest
  }, []);

  return (
    <div className="py-12 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Compare rates</h2>
        <button 
          onClick={() => setShowPriceMatch(true)}
          className="text-sm font-medium text-[#732E24] hover:text-[#954034] flex items-center gap-1 transition-colors"
        >
          <Check className="w-4 h-4" /> We Price Match
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Third-party rates */}
        <div className="space-y-4">
          {dynamicRates.map((rate, idx) => (
            <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                {rate.logo ? (
                  <img 
                    src={rate.logo} 
                    alt={rate.provider} 
                    className="h-5 w-auto object-contain" 
                    style={rate.provider === 'Agoda' ? { width: '119.5234px', height: '40px', marginLeft: '-20px' } : undefined}
                  />
                ) : (
                  <span className="text-gray-600">{rate.provider}</span>
                )}
              </div>
              <span className="text-gray-900 font-medium">${rate.price.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* Our Specialist Rate with Futuristic Glow */}
        <div className="relative group mt-2 md:mt-0">
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-xl blur-[6px] opacity-40"></div>
          <div className="relative p-[2px] bg-gradient-to-br from-[#ffcfa8] via-[#e2c1ff] to-[#80c8ff] rounded-xl h-full">
            <div className="bg-white rounded-[10px] p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Our Maldives Specialist Rate</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Get our best contracted offer, including exclusive VIP perks, complimentary transfers, and 24/7 on-island support.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <button onClick={() => navigate("/enquire")} className="w-full bg-[#732E24] hover:bg-[#954034] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Match Modal */}
      {showPriceMatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowPriceMatch(false)}>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden relative" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Price Match Guarantee</h3>
                <button onClick={() => setShowPriceMatch(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4 text-gray-600 text-sm">
                <p>
                  We are committed to offering you the absolute best value for your Maldives holiday. 
                  If you find a lower, publicly available qualifying rate on another website for the exact same room type, dates, and meal plan, we will match it.
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-4 text-base">How to Claim:</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Save the url or a screenshot of the lower rate.</li>
                    <li>Contact our specialists via WhatsApp or Email.</li>
                    <li>Provide the details before making your booking with us.</li>
                    <li>Once verified, we will match the price instantly.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-4 text-base">Why Book With Us?</h4>
                  <p>
                    Unlike standard booking engines, our Price Match Guarantee comes with our signature service. 
                    Booking directly with our Maldives specialists ensures you still receive our exclusive VIP perks, 
                    complimentary transfers, and 24/7 dedicated on-island support.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button 
                  onClick={() => setShowPriceMatch(false)}
                  className="w-full bg-[#732E24] hover:bg-[#954034] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
