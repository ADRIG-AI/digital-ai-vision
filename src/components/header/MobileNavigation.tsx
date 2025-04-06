
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus } from 'lucide-react';
import { services } from '../services-dropdown/serviceData';

interface MobileNavigationProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const MobileNavigation = ({ 
  setIsMenuOpen, 
  onLoginClick, 
  onSignupClick 
}: MobileNavigationProps) => {
  return (
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
            onLoginClick();
            setIsMenuOpen(false);
          }}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <Button 
          className="bg-adrig-blue text-white hover:bg-blue-900 transition-colors w-full"
          onClick={() => {
            onSignupClick();
            setIsMenuOpen(false);
          }}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </nav>
    </div>
  );
};

export default MobileNavigation;
