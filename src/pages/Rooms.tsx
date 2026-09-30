import { useSEO } from '../hooks/useSEO';
import { useNavigate } from 'react-router-dom';
import { resortData } from '../data/resort';
import { ArrowLeft, Users, Maximize, Wifi, Coffee, Bath } from 'lucide-react';

export default function Rooms() {
  const navigate = useNavigate();

  useSEO({
    title: "Water Villas with Slide | Soneva Jani Maldives",
    description: "Explore luxury overwater villas with slides at Soneva Jani. Secure exclusive deals & availability with Maldives Serenity Travels.",
    path: "/rooms",
    image: resortData.images[1]
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] bg-gray-900">
        <img 
          src={resortData.images[1]} 
          alt="Villas & Residences" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-wide mb-4">Villas & Residences</h1>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-200">A Sanctuary of Luxury</p>
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

        <div className="space-y-24">
          {resortData.rooms.map((room, index) => (
            <div key={room.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Gallery */}
              <div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
                <img 
                  src={room.images[0]} 
                  alt={room.name} 
                  className="w-full h-64 sm:h-96 object-cover col-span-2"
                />
                {room.images.slice(1, 3).map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`${room.name} interior`} 
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                ))}
              </div>

              {/* Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#732E24] mb-4">
                  {(room as any).type || 'Luxury Villa'}
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
                  {room.name}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-200 border-gray-100">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-light">{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Maximize className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-light">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Wifi className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-light">Complimentary Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Coffee className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-light">Espresso Machine</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => navigate(`/enquire?room=${encodeURIComponent(room.name)}`)}
                    className="px-8 py-4 bg-[#732E24] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#954034] transition-colors"
                  >
                    Request a Quote
                  </button>
                  <button 
                    onClick={() => navigate(`/enquire?room=${encodeURIComponent(room.name)}`)}
                    className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#732E24] transition-colors"
                  >
                    Check Availability
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
