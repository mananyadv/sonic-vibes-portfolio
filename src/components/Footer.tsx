
import React from 'react';
import { Facebook, Instagram, Link, Mail, MapPin, Phone } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-karma-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-karma-gold mb-4">KARMA<span className="text-karma-100">ELECTRIC</span></h3>
            <p className="text-karma-300 mb-6">
              Innovating Sound & Vision for Over Three Decades
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-karma-400 hover:text-karma-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-karma-400 hover:text-karma-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-karma-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><RouterLink to="/" className="text-karma-400 hover:text-karma-gold transition-colors">Home</RouterLink></li>
              <li><RouterLink to="/services" className="text-karma-400 hover:text-karma-gold transition-colors">Services</RouterLink></li>
              <li><RouterLink to="/about" className="text-karma-400 hover:text-karma-gold transition-colors">About</RouterLink></li>
              <li><RouterLink to="/contact" className="text-karma-400 hover:text-karma-gold transition-colors">Contact</RouterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-karma-100 mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li><span className="text-karma-400">RIVAL ACOUSTIC</span></li>
              <li><span className="text-karma-400">ATOMIC AUDIO</span></li>
              <li><span className="text-karma-400">ANCILLARY DEVICES</span></li>
              <li><span className="text-karma-400">AUDIO LOTUS</span></li>
              <li><span className="text-karma-400">BRUTAL AUDIO</span></li>
              <li><span className="text-karma-400">FAT FUNK</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-karma-100 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-karma-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-karma-400">No 33, Katha no 270/1, Kanakagiri Main Road, Hormavu Agra, Bangalore - 560043, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-karma-gold mr-2 flex-shrink-0" />
                <span className="text-karma-400">+91 9845220453</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-karma-gold mr-2 flex-shrink-0" />
                <span className="text-karma-400">vasikhan@karmaelectric.in</span>
              </li>
              <li className="flex items-center">
                <Link size={20} className="text-karma-gold mr-2 flex-shrink-0" />
                <span className="text-karma-400">www.karmaelectric.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-karma-700 mt-12 pt-8 text-center">
          <p className="text-karma-400 text-sm">© 2025 by Karma Electric. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
