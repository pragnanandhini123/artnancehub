import { Artisan, Artwork, Gallery, Review } from '../types';

export const mockArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Elena Winters',
    email: 'elena@example.com',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'artisan',
    createdAt: '2023-01-15',
    specializations: ['Sculpture', 'Ceramics', 'Mixed Media'],
    bio: 'Award-winning sculptor with over 15 years of experience creating captivating ceramic pieces inspired by natural forms and human emotion.',
    location: 'Portland, OR',
    experience: 15,
    credentials: ['MFA Fine Arts, Rhode Island School of Design', 'Featured Artist, Portland Museum of Art'],
    availableForCommission: true,
    featured: true,
    socialLinks: {
      website: 'https://elenawinters.com',
      instagram: 'elenawintersstudio',
    },
  },
  {
    id: '2',
    name: 'Marcus Chen',
    email: 'marcus@example.com',
    profileImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'artisan',
    createdAt: '2022-09-08',
    specializations: ['Digital Art', 'Illustration', 'Animation'],
    bio: 'Digital artist and animator combining traditional techniques with cutting-edge technology to create immersive visual experiences.',
    location: 'San Francisco, CA',
    experience: 8,
    credentials: ['BFA Animation, California Institute of the Arts', 'Lead Artist, Pixar Short Films Festival'],
    availableForCommission: true,
    featured: true,
    socialLinks: {
      website: 'https://marcuschen.art',
      instagram: 'marcuschenart',
      youtube: 'MarcusChenCreates',
    },
  },
  {
    id: '3',
    name: 'Amara Okafor',
    email: 'amara@example.com',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'artisan',
    createdAt: '2022-11-21',
    specializations: ['Textiles', 'Weaving', 'Sustainable Fashion'],
    bio: 'Textile artist creating sustainable woven pieces that celebrate cultural heritage and environmental consciousness.',
    location: 'Chicago, IL',
    experience: 12,
    credentials: ['MA Textile Design, School of the Art Institute of Chicago', 'Sustainable Arts Foundation Award'],
    availableForCommission: false,
    featured: true,
    socialLinks: {
      website: 'https://amaraokafor.com',
      instagram: 'amaraokafortextiles',
    },
  },
  {
    id: '4',
    name: 'Hiroshi Tanaka',
    email: 'hiroshi@example.com',
    profileImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'artisan',
    createdAt: '2023-02-05',
    specializations: ['Woodworking', 'Furniture Design', 'Traditional Japanese Joinery'],
    bio: 'Master woodworker combining traditional Japanese techniques with contemporary design to create heirloom furniture pieces.',
    location: 'Seattle, WA',
    experience: 20,
    credentials: ['Master Craftsman, Japanese Woodworking Association', 'Featured Designer, International Furniture Fair'],
    availableForCommission: true,
    featured: false,
    socialLinks: {
      website: 'https://hiroshitanaka.wood',
      instagram: 'hiroshitanakadesign',
    },
  },
];

export const mockArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Nebula Rising',
    description: 'A swirling ceramic sculpture that captures the dynamic movement of cosmic nebulae, glazed with a unique crystalline finish that shifts in different lighting.',
    artisanId: '1',
    images: [
      'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2086358/pexels-photo-2086358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    categories: ['Sculpture', 'Contemporary'],
    techniques: ['Hand-building', 'Crystalline Glazing'],
    dimensions: {
      height: 45,
      width: 30,
      depth: 30,
      unit: 'cm',
    },
    materials: ['Porcelain', 'Crystalline Glaze'],
    price: 1200,
    currency: 'USD',
    available: true,
    createdAt: '2023-05-12',
    featuredImage: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Digital Dreamscape',
    description: 'An immersive digital art piece exploring the boundaries between consciousness and dreams, featuring interactive elements that respond to viewer presence.',
    artisanId: '2',
    images: [
      'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    modelUrl: '/models/dreamscape.glb',
    categories: ['Digital Art', 'Interactive'],
    techniques: ['3D Modeling', 'Particle Systems', 'Interactive Design'],
    dimensions: {
      height: 1080,
      width: 1920,
      unit: 'px',
    },
    materials: ['Digital Media'],
    price: 800,
    currency: 'USD',
    available: true,
    createdAt: '2023-06-02',
    featuredImage: 'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Heritage Threads',
    description: 'A handwoven wall hanging that weaves together traditional African patterns with contemporary design elements, using naturally dyed sustainable fibers.',
    artisanId: '3',
    images: [
      'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    categories: ['Textile Art', 'Wall Hanging'],
    techniques: ['Hand Weaving', 'Natural Dyeing'],
    dimensions: {
      height: 120,
      width: 80,
      unit: 'cm',
    },
    materials: ['Organic Cotton', 'Wool', 'Natural Dyes'],
    price: 950,
    currency: 'USD',
    available: false,
    createdAt: '2023-04-18',
    featuredImage: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Harmony Table',
    description: 'A handcrafted dining table using traditional Japanese joinery techniques without nails or screws, made from sustainably harvested maple with black walnut accents.',
    artisanId: '4',
    images: [
      'https://images.pexels.com/photos/6207764/pexels-photo-6207764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6207772/pexels-photo-6207772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    modelUrl: '/models/table.glb',
    categories: ['Furniture', 'Woodworking'],
    techniques: ['Traditional Joinery', 'Hand Finishing'],
    dimensions: {
      height: 75,
      width: 180,
      depth: 90,
      unit: 'cm',
    },
    materials: ['Maple', 'Black Walnut', 'Natural Oil Finish'],
    price: 3500,
    currency: 'USD',
    available: true,
    createdAt: '2023-03-10',
    featuredImage: 'https://images.pexels.com/photos/6207764/pexels-photo-6207764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Fluid Form',
    description: 'An organic, flowing sculpture that explores the relationship between solidity and fluidity, with a surface texture that invites touch and interaction.',
    artisanId: '1',
    images: [
      'https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2499786/pexels-photo-2499786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    categories: ['Sculpture', 'Abstract'],
    techniques: ['Coiling', 'Burnishing'],
    dimensions: {
      height: 38,
      width: 25,
      depth: 20,
      unit: 'cm',
    },
    materials: ['Stoneware', 'Terra Sigillata'],
    price: 950,
    currency: 'USD',
    available: true,
    createdAt: '2023-07-05',
    featuredImage: 'https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const mockGalleries: Gallery[] = [
  {
    id: '1',
    name: 'Ceramic Explorations',
    description: 'A collection of sculptural works exploring organic forms and crystalline glazes.',
    artisanId: '1',
    artworks: ['1', '5'],
    featuredImage: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: '2023-05-15',
  },
  {
    id: '2',
    name: 'Digital Frontiers',
    description: 'Immersive digital artworks pushing the boundaries of technology and perception.',
    artisanId: '2',
    artworks: ['2'],
    featuredImage: 'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: '2023-06-10',
  },
  {
    id: '3',
    name: 'Woven Narratives',
    description: 'Textile pieces that tell stories of heritage, sustainability, and cultural connection.',
    artisanId: '3',
    artworks: ['3'],
    featuredImage: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: '2023-04-20',
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    artworkId: '1',
    artisanId: '1',
    customerId: 'c1',
    rating: 5,
    comment: 'This sculpture is even more stunning in person. The crystalline glaze catches the light in ways photos can\'t capture. A centerpiece in my home!',
    createdAt: '2023-05-30',
  },
  {
    id: '2',
    artworkId: '4',
    artisanId: '4',
    customerId: 'c2',
    rating: 5,
    comment: 'Hiroshi\'s craftsmanship is extraordinary. The joinery is flawless and the table is both functional art and a future family heirloom.',
    images: ['https://images.pexels.com/photos/6207780/pexels-photo-6207780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    createdAt: '2023-04-15',
  },
  {
    id: '3',
    artworkId: '2',
    artisanId: '2',
    customerId: 'c3',
    rating: 4,
    comment: 'The interactive elements of this piece are fascinating. I\'ve spent hours exploring all the different ways it responds to movement and light.',
    createdAt: '2023-06-22',
  },
];

export const getFeaturedArtisans = () => {
  return mockArtisans.filter(artisan => artisan.featured);
};

export const getArtisanById = (id: string) => {
  return mockArtisans.find(artisan => artisan.id === id);
};

export const getArtworksByArtisanId = (artisanId: string) => {
  return mockArtworks.filter(artwork => artwork.artisanId === artisanId);
};

export const getArtworkById = (id: string) => {
  return mockArtworks.find(artwork => artwork.id === id);
};

export const getGalleriesByArtisanId = (artisanId: string) => {
  return mockGalleries.filter(gallery => gallery.artisanId === artisanId);
};

export const getReviewsByArtworkId = (artworkId: string) => {
  return mockReviews.filter(review => review.artworkId === artworkId);
};

export const getReviewsByArtisanId = (artisanId: string) => {
  return mockReviews.filter(review => review.artisanId === artisanId);
};