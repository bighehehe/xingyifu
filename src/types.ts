import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  isNew?: boolean;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
