import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Mail, Calendar, Award, Instagram, Globe, Youtube } from 'lucide-react';

import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Artisan, Artwork } from '../../types';
import { getArtisanById, getArtworksByArtisanId } from '../../data/mockData';
import ArtisanPortfolio from './ArtisanPortfolio';

const ArtisanProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artisan: Artisan | undefined = id ? getArtisanById(id) : undefined;
  const artworks: Artwork[] = id ? getArtworksByArtisanId(id) : [];

  if (!artisan) {
    return <div className="py-20 text-center">Artisan not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-primary-600">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="profile-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-primary-400" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#profile-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-40 sm:-mt-48">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row">
                {/* Profile Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <img
                    src={artisan.profileImage}
                    alt={artisan.name}
                    className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-heading font-bold text-neutral-900">{artisan.name}</h1>
                      <div className="flex flex-wrap items-center mt-2 text-neutral-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{artisan.location}</span>
                        {artisan.availableForCommission && (
                          <Badge variant="success" className="ml-3">
                            Available for Commission
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <Button variant="primary" icon={<Mail className="h-4 w-4" />} iconPosition="left">
                        Contact Artisan
                      </Button>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mt-6">
                    <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Specializes in</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {artisan.specializations.map((specialization, index) => (
                        <Badge key={index} variant="primary">
                          {specialization}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-neutral-700">
                        <span className="font-medium">{artisan.experience} years</span> of experience
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-neutral-400 mr-2" />
                      <span className="text-neutral-700">
                        <span className="font-medium">{artworks.length}</span> artwork
                        {artworks.length !== 1 && 's'} in portfolio
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  {artisan.socialLinks && (
                    <div className="mt-6 flex space-x-4">
                      {artisan.socialLinks.website && (
                        <a
                          href={artisan.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-primary-600 transition-colors"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      {artisan.socialLinks.instagram && (
                        <a
                          href={`https://instagram.com/${artisan.socialLinks.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-primary-600 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {artisan.socialLinks.youtube && (
                        <a
                          href={`https://youtube.com/${artisan.socialLinks.youtube}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-primary-600 transition-colors"
                        >
                          <Youtube className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900">About {artisan.name.split(' ')[0]}</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">{artisan.bio}</p>

              {/* Credentials */}
              {artisan.credentials && artisan.credentials.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-neutral-900">Credentials & Awards</h3>
                  <ul className="mt-2 space-y-2">
                    {artisan.credentials.map((credential, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-neutral-700">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mt-8">
            <ArtisanPortfolio artworks={artworks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;