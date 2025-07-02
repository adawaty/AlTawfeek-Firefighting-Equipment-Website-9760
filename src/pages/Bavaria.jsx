import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDroplet, FiShield, FiAward, FiCheckCircle, FiExternalLink } = FiIcons;

const Bavaria = () => {
  const products = [
    {
      name: "Water Fire Extinguishers",
      description: "Ideal for Class A fires (wood, paper, textiles)",
      features: ["6L and 9L capacities", "High cooling effect", "Environmentally friendly", "Easy maintenance"]
    },
    {
      name: "Foam Fire Extinguishers",
      description: "Effective for Class A and B fires",
      features: ["AFFF foam technology", "Superior fire suppression", "Prevents re-ignition", "Marine approved"]
    },
    {
      name: "CO2 Fire Extinguishers",
      description: "Perfect for electrical and Class B fires",
      features: ["Clean extinguishing agent", "No residue left", "Electrical safety rated", "Various sizes available"]
    },
    {
      name: "Dry Powder Extinguishers",
      description: "Multi-purpose for Class A, B, and C fires",
      features: ["ABC powder formula", "Wide temperature range", "Quick fire knockdown", "Reliable performance"]
    },
    {
      name: "Wet Chemical Extinguishers",
      description: "Specialized for Class F fires (cooking oils)",
      features: ["Kitchen fire specialist", "Cooling and sealing effect", "Commercial kitchen approved", "Safe for deep fat fryers"]
    }
  ];

  const certifications = [
    "CE Marking Compliance",
    "EN3 European Standard",
    "ISO 9001 Quality Management",
    "PED Pressure Equipment Directive",
    "Egyptian Fire Safety Standards"
  ];

  const applications = [
    {
      title: "Commercial Buildings",
      description: "Offices, retail stores, shopping centers"
    },
    {
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses, factories"
    },
    {
      title: "Hospitality Sector",
      description: "Hotels, restaurants, entertainment venues"
    },
    {
      title: "Healthcare Facilities",
      description: "Hospitals, clinics, medical centers"
    },
    {
      title: "Educational Institutions",
      description: "Schools, universities, training centers"
    },
    {
      title: "Residential Buildings",
      description: "Apartments, villas, housing complexes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bavaria Fire Fighting Equipment - Premium Fire Extinguishers | AlTawfeek Engineering</title>
        <meta name="description" content="Authorized distributor of Bavaria Fire Fighting equipment in Egypt. Premium fire extinguishers: water, foam, CO2, dry powder & wet chemical. Professional installation & service." />
        <meta name="keywords" content="Bavaria fire extinguishers Egypt, premium fire fighting equipment, water foam CO2 extinguishers, fire suppression systems, Bavaria distributor Egypt" />
        <link rel="canonical" href="https://altawfeek-engineering.com/bavaria-firefighting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
                  alt="Bavaria Fire Fighting Equipment"
                  className="w-20 h-12 object-cover rounded mr-4"
                />
                <div>
                  <h1 className="text-4xl font-bold">Bavaria Fire Fighting</h1>
                  <p className="text-xl text-gray-200">Premium Fire Extinguishers</p>
                </div>
              </div>
              <p className="text-xl mb-8 text-gray-100">
                As the authorized distributor of Bavaria Fire Fighting equipment in Egypt, we provide premium fire extinguishers and suppression systems trusted by professionals worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-center"
                >
                  Get Quote
                </Link>
                <a
                  href="https://bavariafirefighting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Visit Bavaria Website</span>
                  <SafeIcon icon={FiExternalLink} className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bavaria fire extinguishers and fire fighting equipment"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Bavaria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Bavaria Fire Fighting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bavaria has been a trusted name in fire safety for decades, providing reliable, high-quality fire extinguishers that meet the strictest international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiAward} className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Manufactured to the highest European standards with rigorous quality control and testing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiShield} className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Reliability</h3>
              <p className="text-gray-600">
                Trusted by fire safety professionals worldwide for consistent performance when it matters most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiDroplet} className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Range</h3>
              <p className="text-gray-600">
                Comprehensive selection of fire extinguishers for all fire classes and applications.
              </p>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications & Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bavaria Product Range</h2>
            <p className="text-xl text-gray-600">
              Complete selection of fire extinguishers for every fire class and application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-xl text-gray-600">
              Bavaria fire extinguishers are suitable for a wide range of applications across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Get Premium Bavaria Fire Extinguishers</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Protect your business with Bavaria's premium fire extinguishers. Professional installation, maintenance, and support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Request Quote
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Bavaria;