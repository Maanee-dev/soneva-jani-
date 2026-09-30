import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled ? 'bg-[#F5F2EB]/95 backdrop-blur-md' : 'bg-[#F5F2EB]'
    }`}>
      <div className="bg-[#732E24] text-white text-[9px] sm:text-[10px] text-center py-1.5 px-4 uppercase tracking-widest font-medium">
        Independent travel booking platform
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
          
          {/* Left: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 flex-1">
            <span onClick={() => handleNavigate('/rooms')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 hover:text-[#732E24] transition-colors relative group py-2">
              Villas
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#732E24] transition-all duration-500 group-hover:w-full"></span>
            </span>
            <span onClick={() => handleNavigate('/dining')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 hover:text-[#732E24] transition-colors relative group py-2">
              Dining
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#732E24] transition-all duration-500 group-hover:w-full"></span>
            </span>
            <span onClick={() => handleNavigate('/#offers')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 hover:text-[#732E24] transition-colors relative group py-2">
              Offers
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#732E24] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </nav>

          {/* Center: Logo */}
          <div 
            onClick={() => handleNavigate('/')}
            className="flex-shrink-0 flex items-center justify-center cursor-pointer group flex-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <Logo className={`w-auto transition-all duration-500 text-[#732E24] ml-[-70px] ${scrolled ? 'h-5 md:h-6' : 'h-6 md:h-8'}`} />
          </div>

          {/* Right Action */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <span onClick={() => handleNavigate('/#experiences')} className="hidden lg:block cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 hover:text-[#732E24] transition-colors relative group py-2 mr-4">
              Experiences
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#732E24] transition-all duration-500 group-hover:w-full"></span>
            </span>
            
            <button 
              onClick={() => handleNavigate('/enquire')}
              className="hidden sm:block border border-[#732E24] text-[#732E24] hover:bg-[#732E24] hover:text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-500"
            >
              Tailor Your Journey
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-12 h-12 -mr-3 text-gray-900 hover:text-[#732E24] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-[24px] h-[14px] flex flex-col justify-between items-end">
                <span className={`block h-[1px] bg-current w-full transition-transform duration-500 ease-in-out origin-center ${isMobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
                <span className={`block h-[1px] bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-[75%] opacity-100'}`} />
                <span className={`block h-[1px] bg-current w-full transition-transform duration-500 ease-in-out origin-center ${isMobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F5F2EB] lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col px-8 py-10 space-y-8">
            <span onClick={() => handleNavigate('/rooms')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#732E24] transition-colors">
              Villas & Residences
            </span>
            <span onClick={() => handleNavigate('/dining')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#732E24] transition-colors">
              Dining & Culinary
            </span>
            <span onClick={() => handleNavigate('/#offers')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#732E24] transition-colors">
              Exclusive Offers
            </span>
            <span onClick={() => handleNavigate('/#experiences')} className="cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#732E24] transition-colors">
              Resort Experiences
            </span>
            
            <div className="h-[1px] w-full bg-gray-100 my-4"></div>
            
            <button 
              onClick={() => handleNavigate('/enquire')}
              className="border border-[#732E24] bg-[#732E24] text-white hover:bg-transparent hover:text-[#732E24] text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-4 transition-all duration-500 w-full text-center"
            >
              Tailor Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
