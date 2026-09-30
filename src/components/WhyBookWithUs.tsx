import React from 'react';

const RateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M32 10L46 16V28C46 40 32 52 32 52C32 52 18 40 18 28V16L32 10Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M32 14L42 18.5V28C42 37.5 32 47 32 47C32 47 22 37.5 22 28V18.5L32 14Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinejoin="round" />
    <path d="M26 30L30 34L38 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 4" />
    <path d="M32 20V32L38 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 4V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M32 56V60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M60 32H56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 32H4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
  </svg>
);

const PerksIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M32 8C32 21.2548 42.7452 32 56 32C42.7452 32 32 42.7452 32 56C32 42.7452 21.2548 32 8 32C21.2548 32 32 21.2548 32 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M46 14C46 19.5228 50.4772 24 56 24C50.4772 24 46 28.4772 46 34C46 28.4772 41.5228 24 36 24C41.5228 24 46 19.5228 46 14Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinejoin="round" />
    <path d="M18 42C18 45.3137 20.6863 48 24 48C20.6863 48 18 50.6863 18 54C18 50.6863 15.3137 48 12 48C15.3137 48 18 45.3137 18 42Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinejoin="round" />
  </svg>
);

const FlexibleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M46 16C46 16 46 36 32 50C18 36 18 16 18 16C18 16 28 16 32 24C36 16 46 16 46 16Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M32 50V24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M32 34C36 32 40 30 42 26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M32 42C35 40 38 38 40 34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M32 34C28 32 24 30 22 26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M32 42C29 40 26 38 24 34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
  </svg>
);

const reasons = [
  {
    icon: RateIcon,
    title: 'Best Rate Guarantee',
    description: 'Book directly with us for the most competitive rates and exclusive availability.'
  },
  {
    icon: SupportIcon,
    title: '24/7 Dedicated Support',
    description: 'Our luxury travel experts are available around the clock to assist with your every need.'
  },
  {
    icon: PerksIcon,
    title: 'Exclusive VIP Perks',
    description: 'Enjoy complimentary upgrades, early check-in, and special amenities upon arrival.'
  },
  {
    icon: FlexibleIcon,
    title: 'Flexible Booking',
    description: 'Peace of mind with our flexible cancellation policies and secure payment options.'
  }
];

export default function WhyBookWithUs() {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">Why Book With Us</h2>
          <div className="w-12 h-[1px] bg-[#732E24] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-[#F5EBE9] rounded-full flex items-center justify-center mb-6 text-[#732E24] group-hover:bg-[#732E24] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">{reason.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
