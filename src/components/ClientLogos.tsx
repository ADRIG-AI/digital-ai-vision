import { useEffect, useRef } from 'react';
import BTS from "../assets/BTS.png";
import CHARGCOM from "../assets/CHARGCOM.png";
import DataDrone from "../assets/DataDrone.png";
import DMI from "../assets/DMI.png";
import documein from "../assets/doumein.png";
import FAI from "../assets/FAI.png";
import LIFCO from "../assets/LIFCO.png";
import MIPORIS from "../assets/MIPORIS.png";
import southern_railway from "../assets/southern_railway.png";
import SRM from "../assets/SRM.png";
import SSPC from "../assets/SSPC.png";
import SSR from "../assets/SSR.png";
import STJ from "../assets/STJ.png";
import TJ from "../assets/T&T.png";
import Vedic from "../assets/Vedic.png";
import VIT from "../assets/VIT.png";
import Vmind from "../assets/Vminds.png";

const clientLogos = [
  { src: BTS, alt: "BTS logo" },
  { src: CHARGCOM, alt: "CHARGCOM logo" },
  { src: DataDrone, alt: "DataDrone logo" },
  { src: DMI, alt: "DMI logo" },
  { src: documein, alt: "Documein logo" },
  { src: FAI, alt: "FAI logo" },
  { src: LIFCO, alt: "LIFCO logo" },
  { src: MIPORIS, alt: "MIPORIS logo" },
  { src: southern_railway, alt: "Southern Railway logo" },
  { src: SRM, alt: "SRM logo" },
  { src: SSPC, alt: "SSPC logo" },
  { src: SSR, alt: "SSR logo" },
  { src: STJ, alt: "STJ logo" },
  { src: TJ, alt: "T&T logo" },
  { src: Vedic, alt: "Vedic logo" },
  { src: VIT, alt: "VIT logo" },
  { src: Vmind, alt: "Vmind logo" }
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
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate logos for continuous scrolling effect */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;