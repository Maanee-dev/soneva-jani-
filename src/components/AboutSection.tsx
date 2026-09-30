import { Phone } from 'lucide-react';
import { resortData } from '../data/resort';
import Logo from './Logo';

export default function AboutSection() {
  return (
    <div className="py-12 border-b border-gray-200">
      <div className="max-w-4xl items-start">
        
        {/* Text Content */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            About {resortData.name}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {resortData.description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="font-medium text-gray-900">Highlights:</span>
            <span className="text-gray-600">Private Island</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-600">World-class Spa</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-600">Pristine Beaches</span>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <h3 className="font-medium text-gray-900 mb-1">Awards & Recognition:</h3>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li><strong>Condé Nast Traveller Wellness & Spa</strong> Awards 2023, Leading Destination to ‘Bring the Family’</li>
              <li><strong>The World’s 50 Best Hotels</strong> 2023, Rated #36</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
