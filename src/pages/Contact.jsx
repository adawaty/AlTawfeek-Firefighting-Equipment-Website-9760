import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      details: ["+20 100 575 1057", "+20 110 100 7157"],
      href: "tel:+201005751057"
    },
    {
      icon: FiMail,
      title: "Email",
      details: ["info@altawfeek-engineering.com", "support@altawfeek-engineering.com"],
      href: "mailto:info@altawfeek-engineering.com"
    },
    {
      icon: FiMapPin,
      title: "Address",
      details: ["10th of Ramadan City", "Sharqia Governorate, Egypt"],
      href: "https://maps.google.com"
    },
    {
      icon: FiClock,
      title: "Business Hours",
      details: ["Sun - Thu: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 3:00 PM"],
      href: null
    }
  ];

  const services = [
    "Fire Risk Assessment",
    "Equipment Installation",
    "Maintenance Service",
    "Training Programs",
    "Emergency Support",
    "General Inquiry"
  ];

  return (
    <>
      <Helmet>
        <title>Contact AlTawfeek Engineering - Fire Safety Experts in 10th of Ramadan, Egypt</title>
        <meta name="description" content="Contact AlTawfeek Engineering for fire safety solutions in Egypt. Located in 10th of Ramadan. Free consultation, 24/7 emergency support. Call +20 100 575 1057 for expert service." />
        <meta name="keywords" content="contact AlTawfeek Engineering, fire safety consultation Egypt, 10th Ramadan fire safety, emergency fire support, fire safety quote Egypt" />
        <link rel="canonical" href="https://altawfeek-engineering.com/contact" />
        <meta property="og:title" content="Contact AlTawfeek Engineering - Fire Safety Experts" />
        <meta property="og:description" content="Contact Egypt's leading fire safety equipment supplier for professional consultation and services." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Fire Safety Experts</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Ready to protect your business? Get professional fire safety consultation and services from Egypt's trusted specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Free Consultation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our fire safety experts will contact you within 24 hours to discuss your requirements.
              </p>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5" />
                  <span>Thank you! We'll contact you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+20 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your fire safety requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help with all your fire safety needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <SafeIcon icon={info.icon} className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">
                          {info.href && detailIndex === 0 && info.title === "Phone" ? (
                            <>
                              <a href="tel:+201005751057" className="hover:text-green-600 transition-colors block">
                                {detail}
                              </a>
                              <a href="tel:+201101007157" className="hover:text-green-600 transition-colors block">
                                {info.details[1]}
                              </a>
                            </>
                          ) : info.href && detailIndex === 0 && info.title === "Email" ? (
                            <a href={info.href} className="hover:text-green-600 transition-colors">
                              {detail}
                            </a>
                          ) : detailIndex < 1 || info.title !== "Phone" ? (
                            detail
                          ) : null}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                <p className="text-red-700 mb-4">
                  For urgent fire safety emergencies, call our 24/7 hotline:
                </p>
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
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <SafeIcon icon={FiMapPin} className="h-12 w-12 mx-auto mb-2" />
                    <p>10th of Ramadan City</p>
                    <p>Sharqia Governorate, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;