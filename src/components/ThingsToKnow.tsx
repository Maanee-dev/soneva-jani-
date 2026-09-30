import { useState } from 'react';
import { LogIn, LogOut, Wine, CircleDollarSign, Info } from 'lucide-react';

export default function ThingsToKnow() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Things to know</h2>
      
      <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
        <div className="md:col-span-12 lg:col-span-10">
          
          <div className="flex flex-col">
            <div className="py-6 border-b border-gray-200 border-gray-100 flex items-start gap-4">
              <LogIn className="w-6 h-6 text-[#2D3748] shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#2D3748] mb-1">Check-in</h3>
                <p className="text-gray-600">2:00 PM</p>
              </div>
            </div>
            
            <div className="py-6 border-b border-gray-200 border-gray-100 flex items-start gap-4">
              <LogOut className="w-6 h-6 text-[#2D3748] shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#2D3748] mb-1">Check-out by</h3>
                <p className="text-gray-600">12:00 PM</p>
              </div>
            </div>

            <div className="py-6 border-b border-gray-200 border-gray-100 flex items-start gap-4">
              <Wine className="w-6 h-6 text-[#2D3748] shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Inclusions</h3>
                <div className="text-gray-600 space-y-2">
                  <p>Inclusions valid for select packages only.</p>
                  <p>Dining inclusions do not include drinks (unless otherwise stated). Menus are subject to change without notice.</p>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-gray-200 border-gray-100 flex items-start gap-4">
              <CircleDollarSign className="w-6 h-6 text-[#2D3748] shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Cancellation policy</h3>
                <p className="text-gray-600">
                  Please note cancellation policies vary depending on the rate selected, please choose your package carefully. See full booking terms and conditions.
                </p>
              </div>
            </div>

            <div className="py-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-[#2D3748] shrink-0 mt-0.5" />
              <div className="w-full">
                <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Fine print</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                  <strong>Update: 11th December 2024:</strong> As per the amendments to the Tourism Act issued by the Maldivian Government, applicable to all travellers arriving in the Maldives from 1 January 2025, the green tax payable by travellers upon arrival at hotels (including tourist resorts, tourist hotels, hotels, tourist guest houses, tourist vessels) has been increased from USD 6.00 to USD 12.00 per person per day.
                </p>

                <p>
                  <strong>Package Inclusions:</strong> Inclusions are correct at the time of purchase. Refer to your booking confirmation for details. Please note package inclusions for extra guests vary depending on the rate selected, please choose your package carefully.
                </p>

                <div className={`space-y-3 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p><strong>Transfers:</strong></p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>The resort is located approximately a 50-minute boat ride or a 20-minute seaplane flight from Velana International Airport (MLE).</li>
                    <li>There are four transfer options available to get you to the resort: a luxury boat transfer (up to 12 guests), a private luxury yacht transfer (up to 12 guests), a private speedboat transfer (up to 8 guests) or a private seaplane flight (up to 14 guests).</li>
                    <li>All transfers provide pick-up at Velana International Airport. Boat transfers operate 24 hours.</li>
                    <li>Please arrange your transfer at least three days in advance, and reconfirm pick-up time with the resort at least one day prior to arrival.</li>
                    <li>All transfer information is subject to change. Please contact the hotel directly to confirm transfer details before you depart for your escape.</li>
                  </ul>

                  <p>
                    <strong>Important:</strong> The hotel, transportation and/or destination you are travelling to may have health, insurance and vaccination requirements in place. Please ensure you stay up to date with any requirements prior to your departure.
                  </p>
                  <p>
                    The property, facilities and dining are subject to government regulations and restrictions. Please check the property website for the most up-to-date information as some of the services may be impacted.
                  </p>
                  <p>
                    Maldives Serenity Travels reserves the right to modify prices for marketing and commercial reasons. Please note that full terms and conditions apply.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm font-medium text-[#732E24] hover:text-[#954034] transition-colors mt-4 flex items-center gap-1"
              >
                {isExpanded ? 'Read less' : 'Read more'}
                <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
