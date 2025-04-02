
import { useEffect, useRef } from 'react';

const logos = [
  { name: 'Google', url: '/logos/logo1.svg' },
  { name: 'Amazon', url: '/logos/logo2.svg' },
  { name: 'Microsoft', url: '/logos/logo3.svg' },
  { name: 'Apple', url: '/logos/logo4.svg' },
  { name: 'IBM', url: '/logos/logo5.svg' },
  { name: 'Oracle', url: '/logos/logo6.svg' },
  { name: 'Samsung', url: '/logos/logo7.svg' },
];

const placeholderLogos = [
  "Acme Inc.",
  "TechGiant",
  "GlobalSoft",
  "Innovate AI",
  "DataFlow",
  "FutureTech",
  "SmartCorp"
];

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { top } = scrollRef.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          scrollRef.current.classList.add('animate-carousel');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-adrig-blue/10 to-adrig-white">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex space-x-16 py-8">
            {placeholderLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm"
              >
                <span className="text-xl font-semibold text-adrig-blue">{logo}</span>
              </div>
            ))}
            {/* Duplicate logos for continuous scrolling effect */}
            {placeholderLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm"
              >
                <span className="text-xl font-semibold text-adrig-blue">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
