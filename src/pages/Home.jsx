import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiAward, FiUsers, FiTrendingUp, FiCheckCircle, FiPhone, FiArrowRight } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiShield,
      title: "Premium Fire Safety Equipment",
      description: "High-quality fire extinguishers, detection systems, and safety equipment from trusted global brands."
    },
    {
      icon: FiAward,
      title: "Authorized Distributor",
      description: "Official distributor of Bavaria Fire Fighting and Sectron alarm systems in Egypt."
    },
    {
      icon: FiUsers,
      title: "Expert Installation & Service",
      description: "Professional installation, maintenance, and 24/7 support services by certified technicians."
    },
    {
      icon: FiTrendingUp,
      title: "Proven Track Record",
      description: "Over 14 years of experience serving businesses across Egypt with reliable fire safety solutions."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "14+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <>
      <Helmet>
        <title>AlTawfeek Engineering - Fire Safety Equipment Supplier in Egypt | Bavaria & Sectron Distributor</title>
        <meta name="description" content="Leading fire safety equipment supplier in 10th of Ramadan, Egypt. Authorized distributor of Bavaria Fire Fighting & Sectron alarm systems. Professional installation & maintenance services." />
        <meta name="keywords" content="fire safety equipment Egypt, Bavaria fire fighting distributor, Sectron alarm systems, fire extinguishers Egypt, 10th Ramadan fire safety, firefighting equipment supplier" />
        <meta property="og:title" content="AlTawfeek Engineering - Fire Safety Equipment Supplier in Egypt" />
        <meta property="og:description" content="Leading fire safety equipment supplier in Egypt. Authorized distributor of Bavaria Fire Fighting & Sectron alarm systems." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://altawfeek-engineering.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Egypt's Leading <span className="text-yellow-400">Fire Safety</span> Equipment Supplier
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Authorized distributor of Bavaria Fire Fighting and Sectron alarm systems. Protecting lives and property across Egypt since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+20XXXXXXXXX"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fire safety equipment and firefighting systems"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AlTawfeek Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive fire safety solutions with premium equipment, expert installation, and reliable support services across Egypt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized Distributor of Premium Brands
            </h2>
            <p className="text-xl text-gray-600">
              We partner with world-class manufacturers to bring you the best fire safety solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
                  alt="Bavaria Fire Fighting Equipment"
                  className="w-20 h-12 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bavaria Fire Fighting</h3>
                  <p className="text-red-600 font-medium">Premium Fire Extinguishers</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                High-quality fire extinguishers and suppression systems from Bavaria, trusted by professionals worldwide for reliable fire protection.
              </p>
              <Link
                to="/bavaria-firefighting"
                className="text-red-600 font-semibold hover:text-red-700 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <SafeIcon icon={FiArrowRight} className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
                  alt="Sectron Alarm Systems"
                  className="w-20 h-12 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sectron Alarms</h3>
                  <p className="text-red-600 font-medium">Advanced Detection Systems</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                State-of-the-art fire detection and alarm systems from Sectron, providing early warning and comprehensive fire safety monitoring.
              </p>
              <Link
                to="/sectron-alarms"
                className="text-red-600 font-semibold hover:text-red-700 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <SafeIcon icon={FiArrowRight} className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Business with Professional Fire Safety Solutions
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Don't compromise on safety. Get expert consultation and premium fire safety equipment installation from Egypt's trusted fire safety specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Request Free Consultation
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;