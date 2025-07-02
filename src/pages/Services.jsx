import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiSettings, FiShield, FiUsers, FiClock, FiCheckCircle, FiPhone } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiTool,
      title: "Professional Installation",
      description: "Expert installation of fire safety equipment by certified technicians with years of experience.",
      features: [
        "Certified technician installation",
        "Compliance with Egyptian fire codes",
        "Quality testing and commissioning",
        "Installation certificates provided"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiSettings,
      title: "Maintenance & Service",
      description: "Regular maintenance and servicing to ensure your fire safety systems are always ready when needed.",
      features: [
        "Scheduled preventive maintenance",
        "Emergency repair services",
        "System performance testing",
        "Maintenance logs and reports"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiShield,
      title: "Fire Safety Consultation",
      description: "Comprehensive fire risk assessment and safety planning tailored to your specific business needs.",
      features: [
        "Fire risk assessment",
        "Safety system design",
        "Compliance consultation",
        "Emergency planning assistance"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FiUsers,
      title: "Training & Education",
      description: "Fire safety training programs for your staff to ensure they know how to respond in emergency situations.",
      features: [
        "Fire safety awareness training",
        "Equipment operation training",
        "Emergency response procedures",
        "Certification programs available"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your premises and discuss your fire safety requirements"
    },
    {
      step: "02",
      title: "System Design",
      description: "Our experts design a customized fire safety solution for your needs"
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Certified technicians install your equipment with precision and care"
    },
    {
      step: "04",
      title: "Testing & Commissioning",
      description: "Comprehensive testing ensures everything works perfectly"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Regular maintenance and 24/7 support keep your systems operational"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Services - Installation, Maintenance & Training | AlTawfeek Engineering</title>
        <meta name="description" content="Professional fire safety services in Egypt: installation, maintenance, consultation & training. 24/7 support, certified technicians, compliance with Egyptian fire codes." />
        <meta name="keywords" content="fire safety installation Egypt, fire equipment maintenance, fire safety training, fire risk assessment, emergency planning Egypt, fire safety consultation" />
        <link rel="canonical" href="https://altawfeek-engineering.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Fire Safety Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Complete fire safety services from consultation to installation, maintenance, and training. 24/7 support by certified professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive fire safety services to protect your business and ensure compliance
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
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
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <SafeIcon icon={service.icon} className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    <span>Request Service</span>
                    <SafeIcon icon={FiPhone} className="h-4 w-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure the best fire safety solutions for your business
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <SafeIcon icon={FiClock} className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">24/7 Emergency Support</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Fire safety emergencies don't wait for business hours. That's why we provide round-the-clock emergency support to ensure your fire safety systems are always operational.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Emergency repair services available 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Rapid response team across Egypt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Remote system monitoring and diagnostics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Priority support for service contract customers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:+201005751057"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="h-5 w-5" />
                  <span>+20 100 575 1057</span>
                </a>
                <a
                  href="tel:+201101007157"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="h-5 w-5" />
                  <span>+20 110 100 7157</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="24/7 emergency fire safety support"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Get professional fire safety services from Egypt's trusted experts. Free consultation, competitive pricing, and guaranteed quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+201005751057"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;