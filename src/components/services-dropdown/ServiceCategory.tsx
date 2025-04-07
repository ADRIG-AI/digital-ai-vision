
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCategoryProps {
  title: string;
  icon: LucideIcon;
  isActive: boolean;
  onMouseEnter: () => void;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  icon: Icon,
  isActive,
  onMouseEnter
}) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      className={`w-full text-left flex items-center gap-2 px-5 py-3 transition-colors hover:bg-gray-100 ${
        isActive ? "text-adrig-blue bg-gray-100" : "text-gray-800"
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default ServiceCategory;
