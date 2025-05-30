import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { mockArtisans } from '../data/mockData';

const ArtisansPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-heading font-bold text-neutral-900 sm:text-4xl">
            Meet Our Artisans
          </h1>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover talented creators who bring exceptional craftsmanship and innovation to their art.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArtisans.map((artisan) => (
            <Link to={`/artisans/${artisan.id}`} key={artisan.id}>
              <Card hoverable className="h-full flex flex-col">
                <Card.Image
                  src={artisan.profileImage || 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                  alt={artisan.name}
                  aspectRatio="square"
                  className="h-64"
                />
                <Card.Content className="flex-grow">
                  <div className="flex items-start justify-between">
                    <Card.Title className="font-heading">{artisan.name}</Card.Title>
                    {artisan.availableForCommission && (
                      <Badge variant="success" size="sm">Available for Commission</Badge>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">{artisan.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {artisan.specializations.slice(0, 3).map((specialization, index) => (
                      <Badge key={index} variant="neutral" size="sm">
                        {specialization}
                      </Badge>
                    ))}
                  </div>
                  <Card.Description className="mt-4 line-clamp-3">
                    {artisan.bio}
                  </Card.Description>
                </Card.Content>
                <Card.Footer className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">
                    {artisan.experience} years of experience
                  </span>
                  <span className="text-primary-600 inline-flex items-center text-sm font-medium">
                    View Profile
                  </span>
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArtisansPage;