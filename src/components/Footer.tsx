import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-500">SAVI</span>
              <span className="text-2xl font-bold ml-1 text-white">Agency</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Transforming skincare marketing with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-blue-400">Team</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-blue-400">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@saviagency.com</li>
              <li>+447771444978</li>
              <li>Marketing Street</li>
              <li>London, UK</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SAVI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;