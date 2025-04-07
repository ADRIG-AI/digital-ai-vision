
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import ServiceCategory from './services-dropdown/ServiceCategory';
import ServiceCategoryContent from './services-dropdown/ServiceCategoryContent';
import { services } from './services-dropdown/serviceData';

export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(services[0].title);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-adrig-black hover:text-adrig-blue">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white w-[900px] p-0 -translate-x-1/4">
            <div className="flex">
              {/* Left sidebar with categories */}
              <div className="w-[250px] bg-gray-50 py-3">
                {services.map((service) => (
                  <div key={service.href}>
                    <ServiceCategory
                      title={service.title}
                      icon={service.icon}
                      isActive={activeCategory === service.title}
                      onMouseEnter={() => setActiveCategory(service.title)}
                    />
                  </div>
                ))}
              </div>

              {/* Right content with subcategories and illustrations */}
              <div className="flex-1 p-6">
                {services.map((service) => (
                  <ServiceCategoryContent 
                    key={service.title}
                    service={service}
                    isActive={activeCategory === service.title}
                  />
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { services } from './services-dropdown/serviceData';
export default ServicesDropdown;
