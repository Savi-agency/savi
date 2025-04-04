import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold text-blue-500">Savi</span>
            <span className="text-2xl font-bold ml-1">Agency</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition">Services</button>
            <button onClick={() => scrollToSection('process')} className="text-white hover:text-blue-400 transition">Process</button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-blue-400 transition">Team</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-blue-400 transition">FAQ</button>
            <Link 
              to="/book-call" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-white hover:text-blue-400 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-white hover:text-blue-400 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="block px-3 py-2 text-white hover:text-blue-400 w-full text-left"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="block px-3 py-2 text-white hover:text-blue-400 w-full text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block px-3 py-2 text-white hover:text-blue-400 w-full text-left"
              >
                FAQ
              </button>
              <Link 
                to="/book-call" 
                className="block px-3 py-2 text-blue-600 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
