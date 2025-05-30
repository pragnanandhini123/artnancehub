import React from 'react';
import Layout from '../components/layout/Layout';
import ArtworksGrid from '../components/discover/ArtworksGrid';
import { mockArtworks } from '../data/mockData';

const DiscoverPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-heading font-bold text-neutral-900 sm:text-4xl">
            Discover Unique Artworks
          </h1>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our curated collection of handcrafted artworks from exceptional artisans around the world.
          </p>
        </div>
        
        <ArtworksGrid artworks={mockArtworks} />
      </div>
    </Layout>
  );
};

export default DiscoverPage;