import React from 'react';
import Layout from '../components/layout/Layout';
import ARGallery from '../components/ar/ARGallery';
import { mockArtworks } from '../data/mockData';

const ARGalleryPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <ARGallery artworks={mockArtworks} />
      </div>
    </Layout>
  );
};

export default ARGalleryPage;