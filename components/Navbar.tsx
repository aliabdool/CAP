
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Mission', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Members', path: '/members' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Community', path: '/community' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-teal-800 p-1.5 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-teal-900 tracking-tight">Indi-Océan</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-teal-800 border-b-2 border-teal-600' 
                    : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/join"
              className="bg-teal-800 hover:bg-teal-900 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Join Collective
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-teal-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-sand-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-ocean-50 text-teal-800'
                    : 'text-slate-600 hover:bg-sand-50 hover:text-teal-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-teal-800 text-white px-3 py-3 rounded-md font-bold"
            >
              Join Collective
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
