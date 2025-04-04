import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BookCall = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Free Strategy Call
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss how we can help grow your fitness brand with AI-powered marketing
          </p>

          <div className="space-y-6 text-left mb-12">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-400 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">Deep-Dive Analysis of Your Ad Performance</h3>
                <p className="text-gray-400">Get insights into your current marketing efforts</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-400 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">Advanced E-Commerce Advertising Strategies</h3>
                <p className="text-gray-400">Learn about our proven methods for scaling fitness brands</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-400 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">AI & Data-Driven Optimization</h3>
                <p className="text-gray-400">Discover how we lower CAC & increase ROI</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-400 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">15-Minute Call – No Sales, Just Real Value</h3>
                <p className="text-gray-400">Get actionable insights you can implement immediately</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/thesaviteam/30min" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookCall;