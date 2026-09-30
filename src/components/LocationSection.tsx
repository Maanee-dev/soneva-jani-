import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <div className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Soneva Jani</h3>
            <div className="flex items-start gap-2 text-gray-600 mt-2">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#732E24]" />
              <p>Medhufaru Island, Noonu Atoll, Manadhoo, Malé 6170, Maldives</p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>
              Located on the island of Medhufaru in the Maldives’ Noonu Atoll, Soneva Jani is the perfect escape for those seeking sun, sand and transformative wellness experiences.
            </p>
            <p>
              The resort is located approximately a 45-minute seaplane flight from Velana International Airport (MLE) in Malé. The resort can be reached by a seaplane transfer, available at an additional cost (payable directly to the resort). Alternatively, the resort can be reached by a 15-minute speedboat transfer if guests fly into the domestic Maafaru International Airport (NMF), available at an additional cost (payable directly to the resort). Please contact the resort directly to book your transfer (see Fine Print for more details).
            </p>
          </div>


        </div>

        <div className="h-[300px] md:h-auto min-h-[300px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 relative group">
          <iframe 
            src="https://maps.google.com/maps?q=Soneva+Jani&t=ROADMAP&z=12&output=embed&iwloc=near" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Soneva Jani"
            className="absolute inset-0"
          />
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Soneva%20Jani%2C%20Maldives"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-50 transition-colors z-10 flex items-center justify-center gap-2 text-gray-900 border border-gray-200"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
