import React from 'react';
import { motion } from 'framer-motion';
import skincare from '../images/skincare.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-400">
            Transforming Skincare Marketing with data-driven advertising and email marketing
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
  src={skincare}
  alt="Team working"
  className="w-full max-w-[550px] h-auto md:h-[350px] lg:h-[400px] object-cover mx-auto rounded-2xl shadow-2xl"
/>

          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>

            <p className="text-gray-300">
              At Savi Agency, we help eCommerce brands in the skincare and beauty industry scale profitably with data-driven advertising and high-converting email marketing.
            </p>

            <p className="text-gray-300">
              We specialize in building predictable, revenue-generating marketing systems that drive consistent customer acquisition and retention. Our approach ensures that brands maximize their ROI while establishing a loyal customer base.
            </p>

            <p className="text-gray-300">
              Savi Agency was created with a clear mission: to help brands break free from ineffective marketing strategies and build sustainable, long-term growth. Through our expertise in Meta Ads, email marketing, and eCommerce optimization, we empower businesses to increase sales, lower acquisition costs, and create a lasting impact in their industry.
            </p>

            {/* CTA Button */}
            <div className="mt-9">
            <Link
  to="/book-call"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition duration-300 mt-6"
>
  Partner With Us
</Link>
            </div>
   

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
