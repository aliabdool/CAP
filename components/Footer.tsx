import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-4">Indi-Océan</h3>
            <p className="text-teal-200 text-sm leading-relaxed">
              From our islands to your oasis. Fostering cross-island collaboration in sustainable tourism and agriculture.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-teal-100">
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Biodiversity Map</a></li>
              <li><a href="#" className="hover:text-white transition">Product Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition">Events Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-teal-100">
              <li><a href="#" className="hover:text-white transition">TNFD Action Plans</a></li>
              <li><a href="#" className="hover:text-white transition">Funding Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Certification Help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-teal-200 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-teal-200 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-teal-200 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-teal-200 hover:text-white"><Facebook size={20} /></a>
            </div>
            <div className="flex items-center text-teal-200 text-sm">
              <Mail size={16} className="mr-2" />
              <span>hello@indiocean.org</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-teal-400">
          <p>&copy; 2024 Indi-Océan Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;