import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cuboid as Cube3d } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Artwork } from '../../types';
import ARViewer from './ARViewer';

interface ARGalleryProps {
  artworks: Artwork[];
}

const ARGallery: React.FC<ARGalleryProps> = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  // Filter only artworks with 3D models
  const arCompatibleArtworks = artworks.filter(artwork => artwork.modelUrl);
  
  return (
    <div>
      {/* AR Gallery Hero */}
      <div className="bg-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Cube3d className="h-16 w-16 mx-auto mb-6 text-primary-300" />
          <h1 className="text-3xl sm:text-4xl font-heading font-bold">Augmented Reality Gallery</h1>
          <p className="mt-4 text-lg text-primary-100">
            Experience art in a whole new dimension. Place virtual artworks in your actual environment,
            walk around them, and see how they would look in your space.
          </p>
          <div className="mt-8">
            <Button size="lg">
              Learn How AR Works
            </Button>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" fill="none">
            <defs>
              <pattern id="ar-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 0l40 40M40 40l40 40M0 80l80-80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ar-pattern)" />
          </svg>
        </div>
      </div>
      
      {/* AR Compatible Artworks */}
      <div className="mt-16">
        <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8">
          AR Compatible Artworks
        </h2>
        
        {arCompatibleArtworks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No AR Artworks Available</h3>
            <p className="text-neutral-600">
              Currently, there are no artworks with AR compatibility. Check back soon as we're adding new AR experiences regularly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {arCompatibleArtworks.map((artwork) => (
              <Card key={artwork.id} hoverable className="h-full flex flex-col">
                <div className="relative">
                  <Card.Image
                    src={artwork.featuredImage}
                    alt={artwork.title}
                    aspectRatio="square"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Cube3d className="h-4 w-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600">AR Ready</span>
                    </div>
                  </div>
                </div>
                <Card.Content className="flex-grow">
                  <Card.Title>{artwork.title}</Card.Title>
                  <Card.Description className="mt-2 line-clamp-2">
                    {artwork.description}
                  </Card.Description>
                </Card.Content>
                <Card.Footer>
                  <div className="w-full grid grid-cols-2 gap-2">
                    <Link to={`/artworks/${artwork.id}`}>
                      <Button variant="outline" fullWidth size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      fullWidth
                      size="sm"
                      icon={<Cube3d className="h-4 w-4" />}
                      iconPosition="left"
                      onClick={() => setSelectedArtwork(artwork)}
                    >
                      Try in AR
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      {/* How AR Works Section */}
      <div className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h2 className="text-2xl font-heading font-bold text-neutral-900">
              How Augmented Reality Works
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">
                    Select an AR-compatible artwork
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    Browse our collection and look for artworks with the AR Ready label.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">
                    Click "Try in AR" to launch the experience
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    This will open our AR viewer in your browser.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">
                    Scan your environment
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    Your camera will open and scan the area to identify flat surfaces.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">
                    Place the artwork in your space
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    Tap to place the artwork on a detected surface. You can then move around it to view from all angles.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm text-neutral-500">
                For the best experience, use a recent smartphone or tablet with AR capabilities. Make sure you're in a well-lit area with enough space.
              </p>
            </div>
          </div>
          <div className="bg-neutral-100 relative flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="AR Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AR Viewer Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-neutral-900/75 transition-opacity"
              onClick={() => setSelectedArtwork(null)}
            ></div>
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:align-middle">
              <ARViewer
                modelUrl={selectedArtwork.modelUrl}
                artworkTitle={selectedArtwork.title}
                onClose={() => setSelectedArtwork(null)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARGallery;