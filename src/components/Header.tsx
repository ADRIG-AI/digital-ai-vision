
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-adrig-blue">Adrig AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
            Contact
          </Link>
          <Button className="bg-adrig-blue text-white hover:bg-blue-700 transition-colors">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-adrig-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute left-0 right-0 top-full">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-adrig-blue text-white hover:bg-blue-700 transition-colors w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
