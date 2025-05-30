import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Art Collector',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'The AR feature is incredible! Being able to see exactly how a sculpture would look in my living room before purchasing made all the difference. The artisan I worked with was responsive and created exactly what I envisioned.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Interior Designer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'I\'ve been recommending Artistry to all my clients. The quality of artisans on this platform is exceptional, and the virtual gallery makes it easy to visualize pieces in different spaces during client presentations.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Leila Patel',
    role: 'Emerging Artist',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Joining Artistry has transformed my career. The platform\'s AI tools helped me refine my technique, and the exposure to a global audience has led to commissions I never would have received otherwise.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            From art collectors to artisans, hear from the people who are part of our growing creative ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-neutral-900 font-semibold">{testimonial.name}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;