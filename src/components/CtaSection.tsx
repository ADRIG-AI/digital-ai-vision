
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-adrig-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let's Build the Future Together!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Ready to transform your business with cutting-edge AI solutions? 
          Our team of experts is ready to help you navigate the future of technology.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6 font-semibold hover:scale-105 transform transition-transform">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
