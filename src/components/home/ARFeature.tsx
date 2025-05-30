import React from 'react';
import { Link } from 'react-router-dom';
import { Cuboid as Cube3d } from 'lucide-react';
import Button from '../ui/Button';

const ARFeature: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M0 64V0h64v64H0z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Image Section */}
          <div className="mt-10 lg:mt-0 lg:col-span-6 flex justify-center">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Augmented Reality Art Experience"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg transform rotate-12 animate-float">
                <Cube3d className="h-8 w-8 text-primary-600" />
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="lg:col-span-6 text-white mt-10 lg:mt-0 lg:pr-8">
            <h2 className="text-3xl font-heading font-bold sm:text-4xl">
              Experience Art in Augmented Reality
            </h2>
            <p className="mt-3 text-xl text-primary-100">
              See how artwork will look in your space before you buy.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Place virtual artworks in your actual environment',
                'Experience true-to-scale 3D models of sculptures and installations',
                'View artworks from any angle with interactive 360° viewing',
                'Share your AR experience with friends and family',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-primary-100">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/ar-gallery">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  icon={<Cube3d className="h-5 w-5" />} 
                  iconPosition="left"
                >
                  Try AR Gallery
                </Button>
              </Link>
              <p className="mt-3 text-sm text-primary-200">
                Compatible with most modern smartphones and tablets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARFeature;