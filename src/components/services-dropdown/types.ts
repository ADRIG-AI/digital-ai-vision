
import { LucideIcon } from 'lucide-react';

export interface SubcategoryType {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export interface ServiceType {
  title: string;
  icon: LucideIcon;
  href: string;
  subcategories: SubcategoryType[];
}
