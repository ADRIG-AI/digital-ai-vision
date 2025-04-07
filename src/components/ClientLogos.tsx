
import { useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';

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
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <CircleCheck className="text-adrig-blue mr-2 flex-shrink-0" size={24} />
                <span className="text-xl font-semibold text-adrig-blue">{logo}</span>
              </div>
            ))}
            {/* Duplicate logos for continuous scrolling effect */}
            {placeholderLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <CircleCheck className="text-adrig-blue mr-2 flex-shrink-0" size={24} />
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
