import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ServicesDropdown from './ServicesDropdown';

// Service items for mobile menu
const serviceItems = [
  {
    title: 'AI Automation',
    href: '/services/ai-automation',
    subcategories: [
      { name: "Predictive Analytics", href: "/services/ai-automation/predictive-analytics" },
      { name: "Machine Learning Solutions", href: "/services/ai-automation/machine-learning" },
      { name: "AI Integration", href: "/services/ai-automation/ai-integration" }
    ]
  },
  {
    title: 'Data Analysis',
    href: '/services/data-analysis',
    subcategories: [
      { name: "Business Intelligence", href: "/services/data-analysis/business-intelligence" },
      { name: "Data Visualization", href: "/services/data-analysis/data-visualization" },
      { name: "Big Data Processing", href: "/services/data-analysis/big-data" }
    ]
  },
  {
    title: 'Chatbot Development',
    href: '/services/chatbot-development',
    subcategories: [
      { name: "Customer Support Bots", href: "/services/chatbot-development/customer-support" },
      { name: "E-commerce Assistants", href: "/services/chatbot-development/ecommerce" },
      { name: "Lead Generation Bots", href: "/services/chatbot-development/lead-generation" }
    ]
  },
  {
    title: 'Workflow Automations',
    href: '/services/workflow-automations',
    subcategories: [
      { name: "Process Optimization", href: "/services/workflow-automations/process-optimization" },
      { name: "Task Automation", href: "/services/workflow-automations/task-automation" },
      { name: "Integration Services", href: "/services/workflow-automations/integration" }
    ]
  },
  {
    title: 'LLM Development',
    href: '/services/llm-development',
    subcategories: [
      { name: "Custom LLM Training", href: "/services/llm-development/custom-training" },
      { name: "Language Understanding", href: "/services/llm-development/language-understanding" },
      { name: "Content Generation", href: "/services/llm-development/content-generation" }
    ]
  },
  {
    title: 'AI Consulting',
    href: '/services/ai-consulting',
    subcategories: [
      { name: "AI Strategy Development", href: "/services/ai-consulting/strategy" },
      { name: "Technology Assessment", href: "/services/ai-consulting/assessment" },
      { name: "Implementation Planning", href: "/services/ai-consulting/implementation" }
    ]
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
    setExpandedService(null);
  };

  const toggleServiceExpand = (serviceTitle: string) => {
    if (expandedService === serviceTitle) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceTitle);
    }
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
              {/* Mobile Services Menu with Subcategories */}
              {serviceItems.map((service) => (
                <div key={service.href} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={service.href} 
                      className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                    <button 
                      onClick={() => toggleServiceExpand(service.title)}
                      className="p-1 text-gray-500"
                    >
                      {expandedService === service.title ? 
                        <X size={16} /> : 
                        <Menu size={16} />
                      }
                    </button>
                  </div>
                  
                  {expandedService === service.title && (
                    <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-200 mt-2">
                      {service.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.href}
                          to={subcategory.href}
                          className="text-gray-600 hover:text-adrig-blue text-sm transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
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
