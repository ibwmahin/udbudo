
export type ProductCategory = 'ui-kit' | 'component' | 'dashboard' | 'icon-pack' | 'template' | 'tool';

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  category: ProductCategory;
  tags: string[];
  image: string;
  features: string[];
  preview?: string;
}

export const products: Product[] = [
  {
    id: 'udk-001',
    name: 'Nebula UI Kit',
    description: 'A comprehensive UI kit with over 300 glassmorphic components designed for modern web applications. Includes both light and dark modes with seamless transitions.',
    shortDescription: 'Premium glassmorphic UI components collection',
    price: 79,
    discountPrice: 59,
    category: 'ui-kit',
    tags: ['ui-kit', 'glassmorphism', 'dark-mode'],
    image: '/placeholder.svg',
    features: [
      '300+ UI components',
      'Light & Dark modes',
      'Figma source files',
      'Responsive design',
      'Animation ready',
      'React/Vue/Angular versions',
    ]
  },
  {
    id: 'cmp-002',
    name: 'Motion Components',
    description: 'A collection of 50+ pre-built animated React components using Framer Motion. Perfect for adding beautiful animations to your web applications with minimal effort.',
    shortDescription: 'Animated React components built with Framer Motion',
    price: 49,
    category: 'component',
    tags: ['animation', 'react', 'framer-motion'],
    image: '/placeholder.svg',
    features: [
      '50+ animated components',
      'Customizable properties',
      'React hooks included',
      'Zero dependencies except Framer Motion',
      'TypeScript support',
      'Detailed documentation'
    ]
  },
  {
    id: 'dsh-003',
    name: 'DevBoard Pro',
    description: 'A modern developer dashboard template with dark mode and glassmorphism design. Includes 20+ pages, 100+ components, and integration with popular APIs.',
    shortDescription: 'Complete developer dashboard solution',
    price: 99,
    discountPrice: 79,
    category: 'dashboard',
    tags: ['dashboard', 'admin', 'analytics', 'dark-mode'],
    image: '/placeholder.svg',
    features: [
      '20+ page templates',
      'Real-time chart components',
      'Data visualization tools',
      'Authentication flows',
      'User management',
      'API integration examples'
    ]
  },
  {
    id: 'icn-004',
    name: 'TechIcons Pro Pack',
    description: 'A comprehensive collection of 1000+ developer-focused icons in multiple formats (SVG, PNG, Icon Font). Perfect for tech projects and applications.',
    shortDescription: 'Developer-focused icon collection',
    price: 39,
    category: 'icon-pack',
    tags: ['icons', 'svg', 'developer'],
    image: '/placeholder.svg',
    features: [
      '1000+ unique icons',
      'SVG, PNG, and Icon Font formats',
      'Resizable vector icons',
      'Multiple styles (outline, filled, duotone)',
      'Regular updates',
      'Custom icon requests'
    ]
  },
  {
    id: 'tmp-005',
    name: 'Portfolio X',
    description: 'A developer portfolio template built with React and Tailwind CSS. Showcase your projects, skills, and experience in a modern and interactive way.',
    shortDescription: 'Modern developer portfolio template',
    price: 29,
    category: 'template',
    tags: ['portfolio', 'developer', 'react'],
    image: '/placeholder.svg',
    features: [
      'Project showcase section',
      'Skills visualization',
      'Experience timeline',
      'Contact form',
      'Blog integration',
      'SEO optimized'
    ]
  },
  {
    id: 'tl-006',
    name: 'CodeProductivity Suite',
    description: 'A collection of productivity tools for developers including code snippets, generators, and utilities to speed up your workflow.',
    shortDescription: 'Developer productivity toolkit',
    price: 49,
    category: 'tool',
    tags: ['productivity', 'tools', 'workflow'],
    image: '/placeholder.svg',
    features: [
      'Code snippet library',
      'Boilerplate generators',
      'Design system tools',
      'Productivity utilities',
      'VS Code integration',
      'Regular updates'
    ]
  },
  {
    id: 'udk-007',
    name: 'Quantum UI Kit',
    description: 'A futuristic UI kit with neon-themed components for creating vibrant and eye-catching interfaces for modern applications.',
    shortDescription: 'Futuristic neon UI components',
    price: 69,
    category: 'ui-kit',
    tags: ['ui-kit', 'neon', 'futuristic'],
    image: '/placeholder.svg',
    features: [
      '250+ UI components',
      'Neon effects and animations',
      'Dark mode optimized',
      'Figma source files',
      'React implementation',
      'Customization guide'
    ]
  },
  {
    id: 'dsh-008',
    name: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard template with data visualization tools, charts, and graphs for monitoring application performance.',
    shortDescription: 'Complete analytics solution',
    price: 89,
    category: 'dashboard',
    tags: ['dashboard', 'analytics', 'charts'],
    image: '/placeholder.svg',
    features: [
      'Real-time data visualization',
      'User behavior analytics',
      'Performance monitoring',
      'Customizable reports',
      'Export functionality',
      'Multiple chart types'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
