
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ServicesDropdown, { services } from './ServicesDropdown';

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
          <nav className="hidden md:flex items-center space-x-8">
            <ServicesDropdown />
            
            <Link to="/about" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-adrig-black hover:text-adrig-blue font-medium transition-colors">
              Contact
            </Link>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="text-adrig-blue border-adrig-blue hover:bg-adrig-blue hover:text-white transition-colors"
                onClick={() => {
                  setShowLoginForm(true);
                  setShowSignupForm(false);
                }}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button 
                className="bg-adrig-blue text-white hover:bg-blue-900 transition-colors"
                onClick={() => {
                  setShowSignupForm(true);
                  setShowLoginForm(false);
                }}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
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
          <div className="md:hidden bg-white py-4 px-4 shadow-md absolute left-0 right-0 top-full max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Services Menu with Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className="py-2 text-adrig-black hover:text-adrig-blue font-medium">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    {services.map((service) => (
                      <Accordion key={service.title} type="single" collapsible className="w-full pl-4">
                        <AccordionItem value={service.title} className="border-b-0">
                          <AccordionTrigger className="py-2">
                            <div className="flex items-center">
                              <service.icon className="h-4 w-4 mr-2" />
                              <span className="text-sm">{service.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-6 space-y-2">
                              {service.subcategories.map((subcategory) => (
                                <Link
                                  key={subcategory.href}
                                  to={subcategory.href}
                                  className="flex items-center py-1 text-sm text-gray-700 hover:text-adrig-blue"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <subcategory.icon className="h-3 w-3 mr-2" />
                                  {subcategory.name}
                                </Link>
                              ))}
                              <Link
                                to={service.href}
                                className="flex items-center py-1 text-sm text-adrig-blue font-medium hover:underline"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                View all {service.title}
                                <ChevronRight className="h-3 w-3 ml-1" />
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Link 
                to="/about" 
                className="text-adrig-black hover:text-adrig-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-adrig-black hover:text-adrig-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Button 
                variant="outline" 
                className="text-adrig-blue border-adrig-blue hover:bg-adrig-blue hover:text-white transition-colors w-full"
                onClick={() => {
                  setShowLoginForm(true);
                  setShowSignupForm(false);
                  setIsMenuOpen(false);
                }}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button 
                className="bg-adrig-blue text-white hover:bg-blue-900 transition-colors w-full"
                onClick={() => {
                  setShowSignupForm(true);
                  setShowLoginForm(false);
                  setIsMenuOpen(false);
                }}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Auth Modals */}
      {(showLoginForm || showSignupForm) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            {showLoginForm && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-adrig-blue">Login</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-adrig-blue focus:ring-adrig-blue border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-adrig-blue hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full bg-adrig-blue text-white hover:bg-blue-900">
                    Log in
                  </Button>
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <button
                      type="button"
                      className="text-sm text-adrig-blue hover:underline"
                      onClick={() => {
                        setShowLoginForm(false);
                        setShowSignupForm(true);
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </>
            )}
            
            {showSignupForm && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-adrig-blue">Create an Account</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-adrig-blue focus:ring-adrig-blue border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                      I agree to the <a href="#" className="text-adrig-blue hover:underline">Terms</a> and <a href="#" className="text-adrig-blue hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <Button className="w-full bg-adrig-blue text-white hover:bg-blue-900">
                    Sign up
                  </Button>
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <button
                      type="button"
                      className="text-sm text-adrig-blue hover:underline"
                      onClick={() => {
                        setShowSignupForm(false);
                        setShowLoginForm(true);
                      }}
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </>
            )}
            
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeLoginSignupForms}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
