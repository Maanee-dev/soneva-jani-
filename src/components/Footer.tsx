import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isEnquirePage = location.pathname === '/enquire';

  if (isEnquirePage) {
    return (
      <footer className="w-full bg-[#140E0C] text-white py-8 px-4 text-center mt-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm sm:text-[15px] font-normal tracking-wide text-white/90">
          <span>Managed by Maldives Serenity Travels</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-[#140E0C] text-white py-10 px-4 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-1 text-sm sm:text-[15px] font-normal tracking-wide text-white/90">
        <a 
          href="tel:+9606604300" 
          className="hover:text-white transition-colors"
        >
          (+960) 660 4300
        </a>
        <a 
          href="mailto:reservations@soneva.com" 
          className="hover:text-white transition-colors"
        >
          reservations@soneva.com
        </a>
      </div>
    </footer>
  );
}
