import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751497063655-color_logo_on_white.png" 
                  alt="AlTawfeek Engineering Logo" 
                  className="h-12 w-auto object-contain"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) saturate(1.1)'
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AlTawfeek Engineering</h3>
                <p className="text-red-400 text-sm font-medium">Fire Safety Experts</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading fire safety equipment supplier in Egypt, providing comprehensive fire protection solutions since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products & Services</h4>
            <ul className="space-y-2">
              <li><Link to="/bavaria-firefighting" className="text-gray-300 hover:text-red-400 transition-colors">Bavaria Fire Fighting</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Fire Extinguishers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Detection Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Safety Equipment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-red-400 mt-0.5" />
                <p className="text-gray-300">10th of Ramadan City, Sharqia Governorate, Egypt</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-red-400" />
                <div className="text-gray-300">
                  <a href="tel:+201005751057" className="hover:text-red-400 transition-colors block">
                    +20 100 575 1057
                  </a>
                  <a href="tel:+201101007157" className="hover:text-red-400 transition-colors block">
                    +20 110 100 7157
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-red-400" />
                <a href="mailto:info@altawfeek-engineering.com" className="text-gray-300 hover:text-red-400 transition-colors">
                  info@altawfeek-engineering.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="h-5 w-5 text-red-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>Sun - Thu: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AlTawfeek Engineering. All rights reserved. | Fire Safety Equipment Supplier in Egypt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;