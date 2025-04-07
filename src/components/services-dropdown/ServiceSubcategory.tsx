
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceSubcategoryProps {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export const ServiceSubcategory: React.FC<ServiceSubcategoryProps> = ({
  name,
  href,
  icon: Icon,
  description
}) => {
  return (
    <Link
      to={href}
      className="group block"
    >
      <div className="bg-gray-900 rounded-lg p-5 mb-3 flex items-center justify-center h-28 transition-transform group-hover:scale-[1.02]">
        <Icon className="h-10 w-10 text-white" />
      </div>
      <h4 className="font-medium text-gray-900 group-hover:text-adrig-blue">
        {name}
      </h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </Link>
  );
};

export default ServiceSubcategory;
