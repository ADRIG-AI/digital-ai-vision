
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from './header/DesktopNavigation';
import MobileNavigation from './header/MobileNavigation';
import AuthModal from './header/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

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

  const closeLoginSignupForms = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  return (
    <>
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
          <DesktopNavigation 
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-adrig-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileNavigation 
            setIsMenuOpen={setIsMenuOpen}
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />
        )}
      </header>

      {/* Auth Modals */}
      <AuthModal 
        showLoginForm={showLoginForm}
        showSignupForm={showSignupForm}
        onClose={closeLoginSignupForms}
        switchToLogin={() => {
          setShowLoginForm(true);
          setShowSignupForm(false);
        }}
        switchToSignup={() => {
          setShowSignupForm(true);
          setShowLoginForm(false);
        }}
      />
    </>
  );
};

export default Header;
