import { resortData } from '../data/resort';
import { Heart } from 'lucide-react';

export default function SimilarResorts() {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recommended Resorts</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resortData.similar.map((resort) => (
          <div key={resort.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
              <img 
                src={resort.image} 
                alt={resort.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 text-white hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-[#732E24] transition-colors">
                  {resort.name}
                </h3>
                <p className="text-sm text-gray-500">{resort.location}</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <span className="text-[#732E24] text-lg leading-none">★</span>
                <span>{resort.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
