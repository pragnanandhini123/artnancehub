import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid2X2, Rows } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Artwork } from '../../types';

interface ArtisanPortfolioProps {
  artworks: Artwork[];
}

const ArtisanPortfolio: React.FC<ArtisanPortfolioProps> = ({ artworks }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };

  if (artworks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-xl font-medium text-neutral-900 mb-2">No Artworks Available</h2>
        <p className="text-neutral-600">This artisan hasn't uploaded any artwork yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-neutral-900">Portfolio</h2>
          <div className="mt-3 sm:mt-0 flex items-center space-x-2">
            <span className="text-sm text-neutral-600">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md ${
                viewMode === 'grid' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <Grid2X2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md ${
                viewMode === 'list' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <Rows className="h-5 w-5" />
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <Link to={`/artworks/${artwork.id}`} key={artwork.id}>
                <Card hoverable>
                  <Card.Image src={artwork.featuredImage} alt={artwork.title} aspectRatio="square" />
                  <Card.Content>
                    <Card.Title>{artwork.title}</Card.Title>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {artwork.categories.slice(0, 2).map((category, index) => (
                        <Badge key={index} variant="primary" size="sm">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <Card.Description className="mt-2 line-clamp-2">{artwork.description}</Card.Description>
                  </Card.Content>
                  <Card.Footer className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-neutral-900">
                        {formatPrice(artwork.price, artwork.currency)}
                      </span>
                      {!artwork.available && (
                        <Badge variant="error" size="sm" className="ml-2">
                          Sold
                        </Badge>
                      )}
                    </div>
                    {artwork.modelUrl && (
                      <Badge variant="accent" size="sm">
                        AR/VR
                      </Badge>
                    )}
                  </Card.Footer>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {artworks.map((artwork) => (
              <Link to={`/artworks/${artwork.id}`} key={artwork.id}>
                <div className="border border-neutral-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 h-48 sm:h-auto">
                      <img
                        src={artwork.featuredImage}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-neutral-900">{artwork.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {artwork.categories.map((category, index) => (
                            <Badge key={index} variant="primary" size="sm">
                              {category}
                            </Badge>
                          ))}
                          {artwork.techniques.slice(0, 2).map((technique, index) => (
                            <Badge key={index} variant="neutral" size="sm">
                              {technique}
                            </Badge>
                          ))}
                        </div>
                        <p className="mt-3 text-neutral-700 line-clamp-2">{artwork.description}</p>
                        <div className="mt-3 flex items-center space-x-4">
                          {artwork.dimensions && (
                            <span className="text-sm text-neutral-600">
                              {artwork.dimensions.width} × {artwork.dimensions.height}
                              {artwork.dimensions.depth ? ` × ${artwork.dimensions.depth}` : ''}{' '}
                              {artwork.dimensions.unit}
                            </span>
                          )}
                          <span className="text-sm text-neutral-600">
                            {artwork.materials.slice(0, 2).join(', ')}
                            {artwork.materials.length > 2 && '...'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium text-lg text-neutral-900">
                            {formatPrice(artwork.price, artwork.currency)}
                          </span>
                          {!artwork.available && (
                            <Badge variant="error" className="ml-2">
                              Sold
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {artwork.modelUrl && (
                            <Badge variant="accent">AR/VR Available</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanPortfolio;