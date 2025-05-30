import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from '../ui/Button';

interface ARViewerProps {
  modelUrl?: string;
  artworkTitle: string;
  onClose: () => void;
}

const ARViewer: React.FC<ARViewerProps> = ({ modelUrl, artworkTitle, onClose }) => {
  const [arSupported, setArSupported] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if WebXR is supported
    if ('xr' in navigator) {
      // @ts-ignore - navigator.xr.isSessionSupported may not be recognized in TypeScript
      navigator.xr?.isSessionSupported('immersive-ar')
        .then((supported: boolean) => {
          setArSupported(supported);
          setLoading(false);
        })
        .catch(() => {
          setArSupported(false);
          setLoading(false);
        });
    } else {
      setArSupported(false);
      setLoading(false);
    }
    
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const startARSession = () => {
    // In a real implementation, this would start an AR session
    console.log('Starting AR session with model:', modelUrl);
    // For demo purposes, we're just showing a placeholder
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-neutral-200">
        <h3 className="text-lg font-medium text-neutral-900">View in Augmented Reality</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="p-6">
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-neutral-600">Loading AR experience...</p>
          </div>
        ) : arSupported ? (
          <div className="space-y-6">
            <div className="relative h-96 bg-neutral-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* This would be replaced with actual AR content in a real implementation */}
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="AR Placeholder"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="relative z-10 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">Ready to view {artworkTitle}</h3>
                    <p className="mb-4 text-neutral-700">Click the button below to place this artwork in your space</p>
                    <Button onClick={startARSession}>Start AR Experience</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-neutral-600">
              <p>
                For the best experience, make sure you're in a well-lit area with enough space to move around.
                Point your camera at a flat surface to place the artwork.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="rounded-full bg-yellow-100 p-3 mx-auto w-16 h-16 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-neutral-900">AR Not Supported</h3>
            <p className="mt-2 text-neutral-600 max-w-md mx-auto">
              Your device or browser doesn't support WebXR or augmented reality. Try using a compatible device or browser.
            </p>
            <div className="mt-6">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ARViewer;