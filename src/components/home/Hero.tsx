import React from 'react';
import { ArrowRight, Palette, Brush, Cuboid as Cube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-70" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-secondary-200 to-secondary-400 rounded-full blur-3xl opacity-20 animate-float delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-accent-200 to-accent-400 rounded-full blur-3xl opacity-20 animate-float delay-2000" />
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-5xl tracking-tight font-artistic font-bold text-neutral-900 sm:text-6xl md:text-7xl animate-reveal">
                <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                  Where Art Meets
                </span>{' '}
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-accent-600">
                  Innovation
                </span>
              </h1>
              <p className="mt-6 text-xl text-neutral-600 sm:text-2xl font-artistic animate-reveal delay-300">
                Discover exceptional artisans, experience their creations in augmented reality, 
                and connect with a global community of art enthusiasts and creators.
              </p>
              <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 animate-reveal delay-500">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link to="/discover">
                    <Button 
                      variant="artistic" 
                      size="lg" 
                      icon={<Palette className="h-5 w-5" />} 
                      iconPosition="right"
                    >
                      Explore Art
                    </Button>
                  </Link>
                  <Link to="/ar-gallery">
                    <Button 
                      variant="artistic" 
                      size="lg" 
                      icon={<Cube className="h-5 w-5" />} 
                      iconPosition="right"
                    >
                      AR Gallery
                    </Button>
                  </Link>
                </div>
                <p className="mt-4 text-sm text-neutral-500 animate-reveal delay-700">
                  Already an artisan?{' '}
                  <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 underline decoration-wavy">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-artistic overflow-hidden shadow-artistic animate-reveal delay-300">
                <div className="relative block w-full">
                  <img
                    className="w-full transform transition-transform duration-700 hover:scale-110"
                    src="https://images.pexels.com/photos/7005693/pexels-photo-7005693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Artist working on a sculpture"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <button
                    type="button"
                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                  >
                    <div className="bg-white/90 rounded-full p-4 shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <Brush className="h-8 w-8 text-primary-600" />
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Floating Art Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent-400 to-accent-600 rounded-artistic opacity-20 animate-float delay-1000"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-primary-400 to-primary-600 rounded-artistic opacity-20 animate-float delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;