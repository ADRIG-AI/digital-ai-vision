
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSubcategory from './ServiceSubcategory';
import { ServiceType } from './types';

interface ServiceCategoryContentProps {
  service: ServiceType;
  isActive: boolean;
}

export const ServiceCategoryContent: React.FC<ServiceCategoryContentProps> = ({
  service,
  isActive
}) => {
  return (
    <div
      className={`${isActive ? "block" : "hidden"}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-adrig-blue mb-1">{service.title}</h3>
        <p className="text-sm text-gray-600">Explore our {service.title.toLowerCase()} services</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {service.subcategories.map((subcategory) => (
          <ServiceSubcategory
            key={subcategory.href}
            name={subcategory.name}
            href={subcategory.href}
            icon={subcategory.icon}
            description={subcategory.description}
          />
        ))}
      </div>
      
      <div className="mt-4 flex justify-end">
        <Link
          to={service.href}
          className="text-adrig-blue hover:underline text-sm flex items-center"
        >
          View all {service.title} services
        </Link>
      </div>
    </div>
  );
};

export default ServiceCategoryContent;
