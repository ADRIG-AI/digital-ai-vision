
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const CtaSection = () => {
//   return (
//     <section className="py-20 bg-adrig-blue text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white">Let's Build the Future Together!</h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//           Ready to transform your business with cutting-edge AI solutions? 
//           Our team of experts is ready to help you navigate the future of technology.
//         </p>
//         <Link to="/contact">
//           <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6 font-semibold hover:scale-105 transform transition-transform">
//             Schedule a Consultation
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const CtaSection = () => {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content/landingpage/CtaSection.json');
        const data = await response.json();
        setCtaData(data);
      } catch (error) {
        console.error("Error loading CTA data:", error);
        // Fallback data
        setCtaData({
          heading: "Let's Build the Future Together!",
          subheading: "Ready to transform your business with cutting-edge AI solutions?",
          buttonText: "Schedule a Consultation",
          buttonLink: "/contact"
        });
      }
    };
    fetchData();
  }, []);

  if (!ctaData) return <div className="py-20 bg-adrig-blue"></div>;

  return (
    <section className="py-20 bg-adrig-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">{ctaData.heading}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          {ctaData.subheading}
        </p>
        <Link to={ctaData.buttonLink}>
          <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6 font-semibold hover:scale-105 transform transition-transform">
            {ctaData.buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;