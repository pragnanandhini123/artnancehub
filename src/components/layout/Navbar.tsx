import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discover', path: '/discover' },
    { name: 'Artisans', path: '/artisans' },
    { name: 'AR Gallery', path: '/ar-gallery' },
    { name: 'About', path: '/about' },
  ];
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-heading text-2xl font-bold text-primary-600">
                Artistry
              </Link>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive(link.path)
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side Icons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <span className="sr-only">Search</span>
              <Search className="h-6 w-6" />
            </button>
            
            <button className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <span className="sr-only">View cart</span>
              <ShoppingCart className="h-6 w-6" />
            </button>
            
            <Link to="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button size="sm">
                Sign up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-neutral-500 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4 pb-3 border-t border-neutral-200">
            <div className="flex items-center px-4 space-x-3">
              <button className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <Search className="h-6 w-6" />
              </button>
              
              <button className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
              
              <button className="p-1 rounded-full text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <User className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-3 space-y-2 px-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" fullWidth>
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;