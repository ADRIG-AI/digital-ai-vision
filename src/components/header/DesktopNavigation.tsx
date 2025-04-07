
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus } from 'lucide-react';
import ServicesDropdown from '../ServicesDropdown';

interface DesktopNavigationProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const DesktopNavigation = ({ onLoginClick, onSignupClick }: DesktopNavigationProps) => {
  return (
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
          onClick={onLoginClick}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <Button 
          className="bg-adrig-blue text-white hover:bg-blue-900 transition-colors"
          onClick={onSignupClick}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
