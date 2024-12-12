import { ReactNode } from 'react';

export interface CoreService {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface TechStackItem {
  name: string;
  icon: string;
  description: string;
}

export interface Services {
  coreServices: CoreService[];
  techStack: TechStackItem[];
}
