import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <SafeIcon icon={FiShield} className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AlTawfeek</h3>
                <p className="text-red-400 font-medium">Engineering</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
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
            <h4 className="text-lg font-semibold mb-4">Authorized Distributor</h4>
            <ul className="space-y-2">
              <li><Link to="/bavaria-firefighting" className="text-gray-300 hover:text-red-400 transition-colors">Bavaria Fire Fighting</Link></li>
              <li><Link to="/sectron-alarms" className="text-gray-300 hover:text-red-400 transition-colors">Sectron Alarm Systems</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Fire Extinguishers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Detection Systems</a></li>
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
                <a href="tel:+20XXXXXXXXX" className="text-gray-300 hover:text-red-400 transition-colors">
                  +20 XXX XXX XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-red-400" />
                <a href="mailto:info@altawfeek-eng.com" className="text-gray-300 hover:text-red-400 transition-colors">
                  info@altawfeek-eng.com
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