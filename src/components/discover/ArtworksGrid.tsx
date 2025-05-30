import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown } from 'lucide-react';

import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Artwork } from '../../types';

interface ArtworksGridProps {
  artworks: Artwork[];
}

const ArtworksGrid: React.FC<ArtworksGridProps> = ({ artworks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };
  
  const filteredArtworks = artworks.filter(artwork => 
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase())) ||
    artwork.techniques.some(technique => technique.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search artworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2 px-3 w-full rounded-md border border-neutral-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <Button
            variant="outline"
            icon={<Filter className="h-5 w-5" />}
            iconPosition="left"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {showFilters && (
          <div className="p-4 bg-white rounded-md border border-neutral-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Categories</label>
                <select className="w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option value="">All Categories</option>
                  <option value="Sculpture">Sculpture</option>
                  <option value="Digital Art">Digital Art</option>
                  <option value="Textile Art">Textile Art</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Price Range</label>
                <select className="w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option value="">Any Price</option>
                  <option value="0-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Availability</label>
                <select className="w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option value="">All Items</option>
                  <option value="available">Available Only</option>
                  <option value="sold">Sold Items</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" size="sm">
                Reset
              </Button>
              <Button size="sm">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {filteredArtworks.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">No Artworks Found</h3>
          <p className="text-neutral-600">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <Link to={`/artworks/${artwork.id}`} key={artwork.id}>
              <Card hoverable className="h-full flex flex-col">
                <Card.Image
                  src={artwork.featuredImage}
                  alt={artwork.title}
                  aspectRatio="square"
                />
                <Card.Content className="flex-grow">
                  <Card.Title>{artwork.title}</Card.Title>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {artwork.categories.slice(0, 2).map((category, index) => (
                      <Badge key={index} variant="primary" size="sm">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Card.Description className="mt-2 line-clamp-2">
                    {artwork.description}
                  </Card.Description>
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
      )}
    </div>
  );
};

export default ArtworksGrid;