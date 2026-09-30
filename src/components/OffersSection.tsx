import React from 'react';
import { useNavigate } from 'react-router-dom';

const offers = [
  {
    id: 'luxury-escape',
    title: 'Maldives Luxury Escape',
    description: 'Exclusive Soneva Jani package rates with added travel benefits.',
    details: [
      'Daily half-board dining at select restaurants',
      'Welcome champagne and exotic fruit basket',
      '20% off all spa treatments during stay'
    ]
  },
  {
    id: 'stay-5',
    title: 'Stay 5, Pay Less',
    description: 'Stay longer and unlock special extended-stay savings.',
    details: [
      'Save up to 25% on the best available rate',
      'Complimentary upgrade to the next villa category (subject to availability)',
      'Daily breakfast for two',
      'One complimentary sunset cruise'
    ]
  },
  {
    id: 'honeymoon',
    title: 'Luxury Honeymoon Escape',
    description: 'A romantic island getaway designed for honeymoons and celebrations.',
    details: [
      'Romantic bed decoration and bath ritual',
      'One private beach dinner under the stars',
      '60-minute couples massage',
      'Professional honeymoon photoshoot (1 hour)'
    ]
  },
  {
    id: 'last-minute',
    title: 'Last-Minute Maldives Escape',
    description: 'Travelling soon? Unlock special rates for selected travel dates.',
    details: [
      'Exclusive 15% discount for bookings within 14 days',
      'Flexible cancellation policy',
      'Complimentary seaplane or speedboat transfers',
      'Late check-out guaranteed until 4:00 PM'
    ]
  }
];

export default function OffersSection() {
  const navigate = useNavigate();

  return (
    <section id="offers" className="py-24 bg-[#F5EBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">Exclusive Offers</h2>
          <div className="w-12 h-[1px] bg-[#732E24] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide group-hover:text-[#732E24] transition-colors">{offer.title}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                {offer.description}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {offer.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-500 font-light leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[#732E24] mt-1.5 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-50 mt-auto">
                <button 
                  onClick={() => navigate('/enquire')}
                  className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-900 group-hover:text-[#732E24] transition-colors flex items-center gap-2"
                >
                  Enquire Now
                  <span className="w-4 h-[1px] bg-current transform origin-left transition-all duration-300 group-hover:w-6"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
