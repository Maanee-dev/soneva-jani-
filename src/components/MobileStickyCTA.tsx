import { useNavigate } from 'react-router-dom';

export default function MobileStickyCTA() {
  const navigate = useNavigate();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F5F2EB] border-t border-gray-200 p-4 pb-6 flex items-center justify-between z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div>
        <div className="font-semibold text-gray-900">
          Request a Quote
        </div>
        <div className="text-sm text-[#732E24] underline font-medium cursor-pointer">
          Our Specialist Rate
        </div>
      </div>
      <button 
        onClick={() => navigate('/enquire')}
        className="bg-[#732E24] hover:bg-[#954034] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Check Availability
      </button>
    </div>
  );
}
