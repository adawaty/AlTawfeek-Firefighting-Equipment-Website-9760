import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBell, FiEye, FiWifi, FiMonitor, FiCheckCircle, FiExternalLink, FiCpu } = FiIcons;

const Sectron = () => {
  const products = [
    {
      icon: FiBell,
      name: "Fire Alarm Control Panels",
      description: "Advanced control panels with intelligent zone management and monitoring capabilities",
      features: ["Multi-zone control", "LCD display interface", "Remote monitoring", "Battery backup system"]
    },
    {
      icon: FiEye,
      name: "Smoke Detectors",
      description: "Intelligent smoke detection with advanced algorithms to minimize false alarms",
      features: ["Photoelectric technology", "Drift compensation", "Remote testing", "LED status indicators"]
    },
    {
      icon: FiCpu,
      name: "Heat Detectors",
      description: "Reliable heat detection for environments where smoke detectors are not suitable",
      features: ["Fixed temperature detection", "Rate-of-rise detection", "High temperature tolerance", "Maintenance-free operation"]
    },
    {
      icon: FiWifi,
      name: "Wireless Systems",
      description: "Flexible wireless fire detection systems for easy installation and expansion",
      features: ["Wireless communication", "Easy installation", "Expandable network", "Long battery life"]
    },
    {
      icon: FiMonitor,
      name: "Monitoring Software",
      description: "Comprehensive monitoring and management software for complete system control",
      features: ["Real-time monitoring", "Event logging", "Remote access", "Maintenance scheduling"]
    }
  ];

  const features = [
    {
      title: "Intelligent Detection",
      description: "Advanced algorithms reduce false alarms while ensuring reliable fire detection",
      icon: FiCpu
    },
    {
      title: "Easy Installation",
      description: "User-friendly design and wireless options make installation quick and cost-effective",
      icon: FiWifi
    },
    {
      title: "Remote Monitoring",
      description: "Monitor and manage your fire safety systems remotely with comprehensive software",
      icon: FiMonitor
    },
    {
      title: "Reliable Performance",
      description: "Proven reliability with minimal maintenance requirements and long service life",
      icon: FiCheckCircle
    }
  ];

  const applications = [
    "Office Buildings & Commercial Spaces",
    "Retail Stores & Shopping Centers",
    "Hotels & Hospitality Venues",
    "Healthcare Facilities",
    "Educational Institutions",
    "Industrial & Manufacturing Plants",
    "Residential Buildings",
    "Government Buildings"
  ];

  const specifications = [
    {
      category: "Control Panels",
      specs: [
        "1-32 zone capacity",
        "EN54 certified",
        "LCD display with menu navigation",
        "Built-in battery charger",
        "RS485 communication"
      ]
    },
    {
      category: "Detectors",
      specs: [
        "Photoelectric smoke detection",
        "Temperature range: -10°C to +55°C",
        "LED status indication",
        "Remote test capability",
        "Low power consumption"
      ]
    },
    {
      category: "Wireless Systems",
      specs: [
        "868 MHz frequency",
        "Up to 500m transmission range",
        "AES encryption",
        "10-year battery life",
        "Self-monitoring network"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sectron Fire Alarm Systems - Advanced Detection Technology | AlTawfeek Engineering</title>
        <meta name="description" content="Authorized distributor of Sectron fire alarm systems in Egypt. Advanced smoke detectors, heat detectors, control panels & wireless systems. Professional installation & monitoring." />
        <meta name="keywords" content="Sectron fire alarms Egypt, fire detection systems, smoke detectors, heat detectors, fire alarm control panels, wireless fire alarms, Sectron distributor Egypt" />
        <link rel="canonical" href="https://altawfeek-engineering.com/sectron-alarms" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
                  alt="Sectron Alarm Systems"
                  className="w-20 h-12 object-cover rounded mr-4"
                />
                <div>
                  <h1 className="text-4xl font-bold">Sectron Alarm Systems</h1>
                  <p className="text-xl text-gray-200">Advanced Fire Detection Technology</p>
                </div>
              </div>
              <p className="text-xl mb-8 text-gray-100">
                As the authorized distributor of Sectron alarm systems in Egypt, we provide state-of-the-art fire detection and alarm solutions with intelligent monitoring capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-center"
                >
                  Get Quote
                </Link>
                <a
                  href="https://sectron.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Visit Sectron Website</span>
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
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sectron fire alarm control panel and detection systems"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Sectron Alarm Systems?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sectron combines cutting-edge technology with reliable performance to deliver fire detection systems that provide early warning and peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectron Product Range</h2>
            <p className="text-xl text-gray-600">
              Comprehensive fire detection and alarm solutions for all types of buildings and applications
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
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <SafeIcon icon={product.icon} className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">
              Detailed specifications for our Sectron fire alarm system components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-xl text-gray-600">
              Sectron alarm systems are suitable for a wide range of applications across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <p className="text-gray-700 font-medium">{app}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Installation & Support</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our certified technicians provide complete installation, commissioning, and ongoing support for all Sectron alarm systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Professional system design and installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive testing and commissioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Staff training on system operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">24/7 monitoring and maintenance support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional installation of Sectron fire alarm systems"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Upgrade to Intelligent Fire Detection</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Protect your property with Sectron's advanced fire alarm systems. Get early warning, reduce false alarms, and ensure reliable fire detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Request System Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sectron;