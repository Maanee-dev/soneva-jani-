import { useSEO } from '../hooks/useSEO';
import { useNavigate } from 'react-router-dom';
import { diningVenues } from '../data/dining';
import { ArrowLeft } from 'lucide-react';

export default function Dining() {
  const navigate = useNavigate();

  useSEO({
    title: "Soneva Jani Restaurants | Exclusive Dining & Bars",
    description: "Discover exceptional overwater dining and organic garden-to-table culinary experiences at Soneva Jani Maldives. Reserve with Maldives Serenity Travels.",
    path: "/dining",
    image: diningVenues[0].images[0]
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] bg-gray-900">
        <img 
          src={diningVenues[3].images[0]} // Tapasake
          alt="Dining" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-wide mb-4">Restaurants & Bars</h1>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-200">A Culinary Journey</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 text-gray-400 hover:text-[#732E24] transition-colors mb-16 text-xs font-semibold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resort
        </button>

        <div className="space-y-32">
          {diningVenues.map((venue, index) => (
            <div key={venue.name} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Gallery */}
              <div className="w-full lg:w-3/5">
                {venue.images.length === 1 ? (
                  <img 
                    src={venue.images[0]} 
                    alt={venue.name} 
                    className="w-full h-80 sm:h-[500px] object-cover"
                  />
                ) : venue.images.length === 2 ? (
                  <div className="grid grid-cols-2 gap-4">
                    <img src={venue.images[0]} alt={venue.name} className="w-full h-64 sm:h-96 object-cover" />
                    <img src={venue.images[1]} alt={venue.name} className="w-full h-64 sm:h-96 object-cover mt-12" />
                  </div>
                ) : (
                  <div className="grid grid-cols-12 gap-4">
                    <img src={venue.images[0]} alt={venue.name} className="col-span-12 h-64 sm:h-96 object-cover w-full" />
                    {venue.images.slice(1, 5).map((img, i) => (
                      <img key={i} src={img} alt={`${venue.name} detail`} className="col-span-6 md:col-span-3 h-32 sm:h-48 object-cover w-full" />
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#732E24] mb-4">
                  {venue.cuisine}
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 tracking-wide">
                  {venue.name}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-10">
                  {venue.description}
                </p>

                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => navigate('/enquire')}
                    className="px-8 py-4 bg-[#732E24] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#954034] transition-colors rounded-none"
                  >
                    Reserve a Table
                  </button>
                  <button 
                    className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#732E24] transition-colors"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
