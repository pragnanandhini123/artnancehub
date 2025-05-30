import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="font-heading text-2xl font-bold text-white">Artistry</h2>
            </Link>
            <p className="text-neutral-400 text-sm">
              Connecting exceptional artisans with art lovers. Discover unique creations and experience art in new dimensions through AR and VR technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="text-neutral-400 hover:text-white transition-colors">
                  Discover Art
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="text-neutral-400 hover:text-white transition-colors">
                  Meet Artisans
                </Link>
              </li>
              <li>
                <Link to="/ar-gallery" className="text-neutral-400 hover:text-white transition-colors">
                  AR Gallery
                </Link>
              </li>
              <li>
                <Link to="/become-an-artisan" className="text-neutral-400 hover:text-white transition-colors">
                  Become an Artisan
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-400 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Inspired</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Join our newsletter to receive updates on new artisans, collections, and exclusive events.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-neutral-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Artistry. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-neutral-500 hover:text-neutral-400 text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-500 hover:text-neutral-400 text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-neutral-500 hover:text-neutral-400 text-sm">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-500 hover:text-neutral-400 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;