
export interface Member {
  id: string;
  name: string;
  businessName: string;
  role: string;
  island: string;
  tags: string[];
  description: string;
  story: string;
  impactMetrics: { label: string; value: string }[];
  imageUrl: string;
  videoUrl?: string; // Mock URL
  products: Product[];
  certified: boolean; // New field to show if they use the Founder's services
  certificationBadge?: string;
  website?: string;
  email?: string;
  phone?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Spa' | 'F&B' | 'Decor' | 'Consulting';
  priceRange: string;
  description: string;
  imageUrl: string;
  supplierId?: string;
  supplier?: string;
  island?: string;
  // New detailed fields
  scentProfile?: string;
  spaUse?: string;
  sustainabilityFeatures?: string[];
}

export interface ForumTopic {
  id: string;
  title: string;
  category: 'Funding' | 'Certification' | 'Collaboration' | 'General';
  author: string;
  replies: number;
  lastActive: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Guide' | 'Certification' | 'Video' | 'Funding';
  summary: string;
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  cta: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Youth & Media' | 'Science & Education' | 'Agriculture' | 'Biodiversity';
  summary: string;
  description: string;
  islands: string[];
  impactMetrics: { label: string; value: string }[];
  coverImage: string;
  media: { type: 'video' | 'image'; url: string; caption?: string }[];
  links: { label: string; url: string }[];
  partners: string[];
}
