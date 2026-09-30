import { useState } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookiePolicyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 md:bottom-6 left-4 md:left-6 z-[60] bg-[#732E24] text-white p-3.5 rounded-full hover:scale-110 transition-transform group shadow-md ${
          isOpen ? 'scale-110 bg-[#954034]' : ''
        }`}
        aria-label="Cookies and Policies"
      >
        <Cookie className="w-6 h-6" />
        {!isOpen && (
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
            Cookies & Policies
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 left-4 md:left-6 z-[70] w-[calc(100vw-32px)] md:w-[400px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col animate-in slide-in-from-bottom-4 zoom-in-95 duration-200">
          <div className="flex justify-between items-center p-5 border-b border-gray-200 border-gray-100">
            <div className="flex items-center gap-2 text-[#732E24]">
              <Cookie className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Cookies & Policies</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5 text-sm text-gray-600 space-y-6 max-h-[60vh] overflow-y-auto">
            <p>
              We use cookies and similar technologies to personalize content, tailor and measure ads, and provide a better experience on our resort platform.
            </p>
            
            <div className="space-y-5">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Essential Cookies</h4>
                  <p className="text-xs">Necessary for the website to function securely. Cannot be switched off.</p>
                </div>
                <div className="relative inline-flex items-center h-5 w-9 shrink-0">
                  <div className="w-9 h-5 bg-[#732E24] rounded-full opacity-50"></div>
                  <div className="absolute left-[18px] top-[2px] bg-white w-4 h-4 rounded-full"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Analytics Cookies</h4>
                  <p className="text-xs">Help us improve our website by collecting and reporting information on its usage.</p>
                </div>
                <button 
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative inline-flex items-center h-5 w-9 shrink-0 rounded-full transition-colors focus:outline-none ${analytics ? 'bg-[#732E24]' : 'bg-gray-200'}`}
                >
                  <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${analytics ? 'translate-x-[18px]' : 'translate-x-[2px]'}`} />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Marketing Cookies</h4>
                  <p className="text-xs">Used to track visitors across websites to display relevant advertisements.</p>
                </div>
                <button 
                  onClick={() => setMarketing(!marketing)}
                  className={`relative inline-flex items-center h-5 w-9 shrink-0 rounded-full transition-colors focus:outline-none ${marketing ? 'bg-[#732E24]' : 'bg-gray-200'}`}
                >
                  <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${marketing ? 'translate-x-[18px]' : 'translate-x-[2px]'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex gap-3">
            <button 
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-colors text-sm shadow-sm"
            >
              Save Preferences
            </button>
            <button 
              onClick={() => {
                setAnalytics(true);
                setMarketing(true);
                setIsOpen(false);
              }}
              className="flex-1 px-4 py-2.5 bg-[#732E24] hover:bg-[#954034] text-white font-medium rounded-lg transition-colors text-sm shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </>
  );
}
