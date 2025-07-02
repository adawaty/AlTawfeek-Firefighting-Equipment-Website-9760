import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiAward, FiUsers, FiTarget, FiCheckCircle } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiShield,
      title: "Safety First",
      description: "We prioritize safety above all else, ensuring every solution meets the highest international standards."
    },
    {
      icon: FiAward,
      title: "Quality Excellence",
      description: "We partner only with premium brands and maintain rigorous quality control in all our services."
    },
    {
      icon: FiUsers,
      title: "Customer Focus",
      description: "Our clients' needs drive everything we do, from initial consultation to ongoing support."
    },
    {
      icon: FiTarget,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge fire safety solutions."
    }
  ];

  const milestones = [
    { year: "2010", event: "AlTawfeek Engineering founded in 10th of Ramadan" },
    { year: "2012", event: "Became authorized distributor of Bavaria Fire Fighting" },
    { year: "2015", event: "Added Sectron alarm systems to our portfolio" },
    { year: "2018", event: "Expanded operations across Egypt" },
    { year: "2020", event: "Reached 500+ successful installations" },
    { year: "2024", event: "Leading fire safety equipment supplier in Egypt" }
  ];

  return (
    <>
      <Helmet>
        <title>About AlTawfeek Engineering - Fire Safety Experts in Egypt Since 2010</title>
        <meta name="description" content="Learn about AlTawfeek Engineering, Egypt's trusted fire safety equipment supplier since 2010. Based in 10th of Ramadan, we're authorized distributors of Bavaria & Sectron systems." />
        <meta name="keywords" content="AlTawfeek Engineering history, fire safety company Egypt, 10th Ramadan engineering company, Bavaria Sectron distributor Egypt" />
        <link rel="canonical" href="https://altawfeek-engineering.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AlTawfeek Engineering</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over 14 years, we've been Egypt's trusted partner in fire safety, protecting lives and property with premium equipment and expert services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010 in the industrial heart of 10th of Ramadan City, AlTawfeek Engineering began with a simple mission: to provide Egypt with world-class fire safety solutions that protect what matters most.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As an authorized distributor of Bavaria Fire Fighting equipment and Sectron alarm systems, we've built our reputation on reliability, expertise, and an unwavering commitment to safety standards.
              </p>
              <p className="text-lg text-gray-700">
                Today, we serve businesses across Egypt, from small enterprises to large industrial complexes, providing comprehensive fire safety solutions backed by professional installation and 24/7 support.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AlTawfeek Engineering headquarters in 10th of Ramadan"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth as Egypt's leading fire safety equipment supplier
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Businesses Trust AlTawfeek Engineering</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-yellow-400 mt-0.5" />
                  <p className="text-lg">14+ years of proven expertise in fire safety solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-yellow-400 mt-0.5" />
                  <p className="text-lg">Authorized distributor of premium international brands</p>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-yellow-400 mt-0.5" />
                  <p className="text-lg">Professional installation by certified technicians</p>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-yellow-400 mt-0.5" />
                  <p className="text-lg">24/7 support and maintenance services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-yellow-400 mt-0.5" />
                  <p className="text-lg">Comprehensive solutions for all business sizes</p>
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
                alt="Professional fire safety team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;