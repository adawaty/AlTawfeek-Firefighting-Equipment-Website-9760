import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiBell, FiDroplet, FiEye, FiTool, FiArrowRight } = FiIcons;

const Products = () => {
  const productCategories = [
    {
      icon: FiDroplet,
      title: "Fire Extinguishers",
      description: "Premium Bavaria fire extinguishers for all fire classes - water, foam, CO2, dry powder, and wet chemical systems.",
      features: ["All fire classes coverage", "Certified quality", "Various sizes available", "Professional maintenance"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiBell,
      title: "Fire Alarm Systems",
      description: "Advanced fire detection and alarm systems with intelligent monitoring and early warning capabilities.",
      features: ["Intelligent detection", "Early warning alerts", "Zone monitoring", "Remote management"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiEye,
      title: "Detection Systems",
      description: "Comprehensive fire and smoke detection systems including heat detectors, smoke detectors, and flame detectors.",
      features: ["Multi-sensor technology", "False alarm prevention", "Wireless options", "Integration ready"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiShield,
      title: "Suppression Systems",
      description: "Automatic fire suppression systems including sprinkler systems, gas suppression, and foam systems.",
      features: ["Automatic activation", "Zone-specific control", "Minimal water damage", "Industrial grade"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiTool,
      title: "Safety Equipment",
      description: "Complete range of fire safety accessories including hose reels, fire blankets, emergency lighting, and exit signs.",
      features: ["Emergency lighting", "Fire hose reels", "Safety signage", "Fire blankets"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const brands = [
    {
      name: "Bavaria Fire Fighting",
      description: "Premium fire extinguishers and suppression systems",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      link: "/bavaria-firefighting"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Products - Bavaria Equipment & Detection Systems | AlTawfeek Engineering</title>
        <meta name="description" content="Comprehensive fire safety products including Bavaria fire extinguishers, alarm systems, detection systems & suppression equipment. Professional installation in Egypt." />
        <meta name="keywords" content="fire extinguishers Egypt, Bavaria fire fighting products, fire detection equipment, fire suppression systems, fire safety products Egypt" />
        <link rel="canonical" href="https://altawfeek-engineering.com/products" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fire Safety Products & Equipment</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive range of premium fire safety equipment from trusted global brands. Professional installation and maintenance services included.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-xl text-gray-600">
              Complete fire safety solutions for all types of buildings and industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <SafeIcon icon={category.icon} className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{category.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                  >
                    <span>Get Quote</span>
                    <SafeIcon icon={FiArrowRight} className="h-4 w-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Brands</h2>
            <p className="text-xl text-gray-600">
              Authorized distributor of world-class fire safety equipment manufacturers
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
                  alt="Bavaria Fire Fighting Equipment"
                  className="w-20 h-12 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bavaria Fire Fighting</h3>
                  <p className="text-gray-600">Premium fire extinguishers and suppression systems</p>
                </div>
              </div>
              <Link
                to="/bavaria-firefighting"
                className="inline-flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700"
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
            <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right Equipment?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Our fire safety experts will assess your needs and recommend the best solutions for your business. Free consultation and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+201005751057"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Call Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;