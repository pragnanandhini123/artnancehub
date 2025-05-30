import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Artwork } from '../../types';

interface FeaturedArtworksProps {
  artworks: Artwork[];
}

const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({ artworks }) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 sm:text-4xl">
            Discover Unique Artworks
          </h2>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore one-of-a-kind creations from our exceptional artisans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Link to={`/artworks/${artwork.id}`} key={artwork.id}>
              <Card hoverable className="h-full flex flex-col">
                <Card.Image
                  src={artwork.featuredImage}
                  alt={artwork.title}
                  aspectRatio="square"
                  className="h-64"
                />
                <Card.Content className="flex-grow">
                  <Card.Title className="font-heading">{artwork.title}</Card.Title>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {artwork.categories.slice(0, 2).map((category, index) => (
                      <Badge key={index} variant="primary" size="sm">
                        {category}
                      </Badge>
                    ))}
                    {artwork.techniques.slice(0, 1).map((technique, index) => (
                      <Badge key={index} variant="neutral" size="sm">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                  <Card.Description className="mt-3 line-clamp-2">
                    {artwork.description}
                  </Card.Description>
                  
                  {artwork.modelUrl && (
                    <div className="mt-3">
                      <Badge variant="accent" size="sm" className="flex items-center w-max">
                        <span className="mr-1">✓</span> AR/VR Available
                      </Badge>
                    </div>
                  )}
                </Card.Content>
                <Card.Footer className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-neutral-900">
                      {formatPrice(artwork.price, artwork.currency)}
                    </span>
                    {!artwork.available && (
                      <Badge variant="error" size="sm" className="ml-2">
                        Sold
                      </Badge>
                    )}
                  </div>
                  <span className="text-primary-600 inline-flex items-center text-sm font-medium">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/discover"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View all artworks
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;