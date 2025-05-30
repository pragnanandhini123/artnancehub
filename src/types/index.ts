export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  role: 'artisan' | 'customer' | 'admin';
  createdAt: string;
}

export interface Artisan extends User {
  specializations: string[];
  bio: string;
  location: string;
  experience: number; // years
  credentials: string[];
  availableForCommission: boolean;
  featured: boolean;
  socialLinks?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  artisanId: string;
  images: string[];
  modelUrl?: string; // 3D model URL for AR/VR viewing
  categories: string[];
  techniques: string[];
  dimensions?: {
    height: number;
    width: number;
    depth?: number;
    unit: 'cm' | 'in' | 'mm';
  };
  materials: string[];
  price: number;
  currency: string;
  available: boolean;
  createdAt: string;
  featuredImage: string;
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  artisanId: string;
  artworks: string[]; // Array of artwork IDs
  featuredImage: string;
  createdAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  artisanId: string;
  artworkId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  totalAmount: number;
  currency: string;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  artworkId: string;
  artisanId: string;
  customerId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
}