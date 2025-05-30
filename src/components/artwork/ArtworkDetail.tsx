import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Share2, Cuboid as Cube3d } from 'lucide-react';

import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Artwork } from '../../types';
import { getArtworkById, getArtisanById, getReviewsByArtworkId } from '../../data/mockData';
import ARViewer from '../ar/ARViewer';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork: Artwork | undefined = id ? getArtworkById(id) : undefined;
  const artisan = artwork ? getArtisanById(artwork.artisanId) : undefined;
  const reviews = id ? getReviewsByArtworkId(id) : [];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showARViewer, setShowARViewer] = useState(false);
  
  if (!artwork || !artisan) {
    return <div className="py-20 text-center">Artwork not found</div>;
  }
  
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length);
  };
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-neutral-500">
            <li>
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to="/discover" className="hover:text-primary-600 transition-colors">Discover</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-neutral-900 font-medium">{artwork.title}</span>
            </li>
          </ol>
        </nav>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border border-neutral-200">
                <img
                  src={artwork.images[currentImageIndex]}
                  alt={artwork.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              
              {artwork.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={prevImage}
                    className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white pointer-events-auto"
                  >
                    <ChevronLeft className="h-5 w-5 text-neutral-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white pointer-events-auto"
                  >
                    <ChevronRight className="h-5 w-5 text-neutral-800" />
                  </button>
                </div>
              )}
              
              {artwork.modelUrl && (
                <div className="absolute bottom-4 right-4">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Cube3d className="h-4 w-4" />}
                    iconPosition="left"
                    onClick={() => setShowARViewer(true)}
                  >
                    View in AR
                  </Button>
                </div>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {artwork.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${artwork.title} - view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-heading font-bold text-neutral-900">{artwork.title}</h1>
            
            <div className="mt-2">
              <Link to={`/artisans/${artisan.id}`} className="group">
                <p className="text-sm text-neutral-500">
                  By{' '}
                  <span className="font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    {artisan.name}
                  </span>
                </p>
              </Link>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center">
                <p className="text-2xl font-semibold text-neutral-900">
                  {formatPrice(artwork.price, artwork.currency)}
                </p>
                {!artwork.available && (
                  <Badge variant="error" className="ml-2">
                    Sold
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {artwork.categories.map((category, index) => (
                <Badge key={index} variant="primary">
                  {category}
                </Badge>
              ))}
              {artwork.techniques.map((technique, index) => (
                <Badge key={index} variant="neutral">
                  {technique}
                </Badge>
              ))}
            </div>
            
            <div className="mt-6">
              <h2 className="text-sm font-medium text-neutral-900">Description</h2>
              <p className="mt-2 text-neutral-700 leading-relaxed">{artwork.description}</p>
            </div>
            
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <h2 className="text-sm font-medium text-neutral-900">Details</h2>
              <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {artwork.dimensions && (
                  <div>
                    <dt className="text-neutral-500">Dimensions</dt>
                    <dd className="text-neutral-900 font-medium mt-1">
                      {artwork.dimensions.width} × {artwork.dimensions.height}
                      {artwork.dimensions.depth ? ` × ${artwork.dimensions.depth}` : ''}{' '}
                      {artwork.dimensions.unit}
                    </dd>
                  </div>
                )}
                
                <div>
                  <dt className="text-neutral-500">Materials</dt>
                  <dd className="text-neutral-900 font-medium mt-1">
                    {artwork.materials.join(', ')}
                  </dd>
                </div>
                
                <div>
                  <dt className="text-neutral-500">Created</dt>
                  <dd className="text-neutral-900 font-medium mt-1">
                    {new Date(artwork.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </dd>
                </div>
                
                {artwork.modelUrl && (
                  <div>
                    <dt className="text-neutral-500">Experience</dt>
                    <dd className="text-neutral-900 font-medium mt-1">
                      AR/VR Available
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            
            <div className="mt-8 space-y-3">
              {artwork.available ? (
                <Button
                  fullWidth
                  size="lg"
                  icon={<ShoppingCart className="h-5 w-5" />}
                  iconPosition="left"
                >
                  Add to Cart
                </Button>
              ) : (
                <Button fullWidth size="lg" variant="outline" disabled>
                  Sold Out
                </Button>
              )}
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  icon={<Heart className="h-5 w-5" />}
                  iconPosition="left"
                >
                  Save
                </Button>
                <Button
                  variant="outline"
                  icon={<Share2 className="h-5 w-5" />}
                  iconPosition="left"
                >
                  Share
                </Button>
              </div>
            </div>
            
            <div className="mt-8 border-t border-neutral-200 pt-6">
              <h2 className="text-sm font-medium text-neutral-900">About the Artisan</h2>
              <div className="mt-3 flex items-center">
                <Link to={`/artisans/${artisan.id}`} className="flex-shrink-0">
                  <img
                    src={artisan.profileImage}
                    alt={artisan.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </Link>
                <div className="ml-4">
                  <Link to={`/artisans/${artisan.id}`} className="text-primary-600 hover:text-primary-700 font-medium">
                    {artisan.name}
                  </Link>
                  <p className="text-sm text-neutral-500">{artisan.specializations.join(', ')}</p>
                </div>
              </div>
              <div className="mt-3">
                <Link to={`/artisans/${artisan.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-16 border-t border-neutral-200 pt-10">
            <h2 className="text-2xl font-heading font-bold text-neutral-900">Customer Reviews</h2>
            <div className="mt-6 space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-neutral-200 pb-6 last:border-0">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-neutral-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-neutral-700">{review.comment}</p>
                  {review.images && review.images.length > 0 && (
                    <div className="mt-4 flex space-x-2">
                      {review.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="h-20 w-20 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* AR Viewer Modal */}
      {showARViewer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-neutral-900/75 transition-opacity" onClick={() => setShowARViewer(false)}></div>
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:align-middle">
              <ARViewer modelUrl={artwork.modelUrl} artworkTitle={artwork.title} onClose={() => setShowARViewer(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default ArtworkDetail;