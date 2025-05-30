import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedArtisans from '../components/home/FeaturedArtisans';
import FeaturedArtworks from '../components/home/FeaturedArtworks';
import ARFeature from '../components/home/ARFeature';
import Testimonials from '../components/home/Testimonials';
import { getFeaturedArtisans, mockArtworks } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredArtisans = getFeaturedArtisans();
  
  return (
    <Layout>
      <Hero />
      <FeaturedArtisans artisans={featuredArtisans} />
      <FeaturedArtworks artworks={mockArtworks.slice(0, 3)} />
      <ARFeature />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;