
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    title: 'AI Automation',
    description: 'Transform business processes with intelligent automation',
    href: '/services/ai-automation',
  },
  {
    title: 'Data Analysis',
    description: 'Make smarter decisions with real-time insights',
    href: '/services/data-analysis',
  },
  {
    title: 'Chatbot Development',
    description: 'Intelligent chatbots that engage and convert',
    href: '/services/chatbot-development',
  },
  {
    title: 'Workflow Automations',
    description: 'Streamline business operations for maximum efficiency',
    href: '/services/workflow-automations',
  },
  {
    title: 'LLM Development',
    description: 'Revolutionizing AI language understanding',
    href: '/services/llm-development',
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance for AI-powered transformation',
    href: '/services/ai-consulting',
  },
];

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
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium bg-transparent text-adrig-black hover:text-adrig-blue">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:w-[600px] lg:w-[700px] grid-cols-2">
                    {serviceItems.map((service) => (
                      <li key={service.href} className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="flex h-full w-full select-none flex-col justify-between rounded-md bg-white p-4 no-underline outline-none hover:bg-gray-50 transition-colors"
                          >
                            <div className="mb-2 text-lg font-medium text-adrig-blue">
                              {service.title}
                            </div>
                            <p className="text-sm text-gray-600">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="text-adrig-black hover:text-adrig-blue font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </div>
              
              <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-200">
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="text-gray-600 hover:text-adrig-blue text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
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
