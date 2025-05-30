import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import ArtisansPage from './pages/ArtisansPage';
import ARGalleryPage from './pages/ARGalleryPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/artisans" element={<ArtisansPage />} />
        <Route path="/artisans/:id" element={<ArtisanProfilePage />} />
        <Route path="/artworks/:id" element={<ArtworkDetailPage />} />
        <Route path="/ar-gallery" element={<ARGalleryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;