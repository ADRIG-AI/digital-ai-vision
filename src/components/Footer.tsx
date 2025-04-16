
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('content/landingpage/Footer.json');
        if (!response.ok) {
          throw new Error('Failed to fetch footer data');
        }
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error loading footer data:", error);
      }
    };

    fetchData();
  }, []);

  if (!footerData) {
    return <footer className="bg-gray-900 h-40"></footer>;
  }

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'Instagram': return <Instagram size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{footerData.company_info.name}</h3>
            <p className="text-gray-400 mb-4">{footerData.company_info.description}</p>
            <div className="flex space-x-2">
              {footerData.social_links.map((item, index) => (
                <a 
                  key={index}
                  href={item.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.platform}
                >
                  {getSocialIcon(item.platform)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.nav_links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerData.footer_services.map((service, index) => (
                <li key={index}>
                  <a href={service.url} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-adrig-blue" />
                <span className="text-gray-400">{footerData.contact_info.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-adrig-blue" />
                <span className="text-gray-400">{footerData.contact_info.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-adrig-blue" />
                <span className="text-gray-400">{footerData.contact_info.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
  <p style={{ color: '#ffffff' }}>&copy; 2025 Adrig AI Technologies. All rights reserved.</p>
</div>
      </div>
    </footer>
  );
};

export default Footer;