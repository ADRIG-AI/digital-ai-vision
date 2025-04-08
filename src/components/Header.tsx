
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServicesDropdown from './ServicesDropdown';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle scrolled state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-adrig-blue">ADRIG</span>
            <span className="font-bold text-xl text-black ml-1">AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8`}>
            <ServicesDropdown />
            
            <Link 
              to="/about"
              className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                location.pathname === '/about' ? 'font-semibold text-adrig-blue' : ''
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog"
              className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'font-semibold text-adrig-blue' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact"
              className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                location.pathname === '/contact' ? 'font-semibold text-adrig-blue' : ''
              }`}
            >
              Contact
            </Link>
            
            <Link to="/contact">
              <Button variant="default" className="bg-adrig-blue hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-adrig-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobile && (
          <div className={`
            md:hidden bg-white absolute left-0 right-0 px-4 py-5 shadow-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 top-full visible' : 'opacity-0 top-[calc(100%-10px)] invisible'}
          `}>
            <nav className="flex flex-col space-y-4">
              {/* Removed Home link from mobile menu too */}
              
              <div className="border-b border-gray-200 py-2">
                <span className="font-medium mb-2 block">Services</span>
                <div className="pl-4 flex flex-col space-y-3 mt-2">
                  <Link 
                    to="/services/ai-automation"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    AI Automation
                  </Link>
                  <Link 
                    to="/services/data-analysis"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    Data Analysis
                  </Link>
                  <Link 
                    to="/services/chatbot-development"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    Chatbot Development
                  </Link>
                  <Link 
                    to="/services/workflow-automations"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    Workflow Automations
                  </Link>
                  <Link 
                    to="/services/llm-development"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    LLM Development
                  </Link>
                  <Link 
                    to="/services/ai-consulting"
                    className="text-adrig-black hover:text-adrig-blue transition-colors"
                  >
                    AI Consulting
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/about"
                className={`text-adrig-black hover:text-adrig-blue transition-colors py-2 ${
                  location.pathname === '/about' ? 'font-semibold text-adrig-blue' : ''
                }`}
              >
                About
              </Link>
              
              <Link 
                to="/blog"
                className={`text-adrig-black hover:text-adrig-blue transition-colors py-2 ${
                  location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'font-semibold text-adrig-blue' : ''
                }`}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact"
                className={`text-adrig-black hover:text-adrig-blue transition-colors py-2 ${
                  location.pathname === '/contact' ? 'font-semibold text-adrig-blue' : ''
                }`}
              >
                Contact
              </Link>
              
              <div className="pt-2">
                <Link to="/contact" className="block">
                  <Button variant="default" className="w-full bg-adrig-blue hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
