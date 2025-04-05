import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BookCall = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pt-24 pb-16 min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Free Strategy Call
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how we can help scale your fitness brand with AI-powered marketing strategies. 
            No sales pitch — just real, actionable value.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8 mb-16"
        >
          {features.map((feature, idx) => (
            <Feature key={idx} title={feature.title} description={feature.description} />
          ))}
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-2xl p-6"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/thesaviteam/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ title, description }) => (
  <div className="flex items-start">
    <CheckCircle className="w-6 h-6 text-blue-500 mt-1 mr-3" />
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const features = [
  {
    title: "Deep-Dive Analysis of Your Ad Performance",
    description: "Understand exactly what's working and where you can improve.",
  },
  {
    title: "Advanced E-Commerce Advertising Strategies",
    description: "See the frameworks we use to profitably scale fitness brands.",
  },
  {
    title: "AI & Data-Driven Optimization",
    description: "Learn how AI helps lower customer acquisition costs and boost ROI.",
  },
  {
    title: "15-Minute Call – 100% Value, 0% Sales",
    description: "Walk away with clear strategies you can implement immediately.",
  },

  
];

export default BookCall;

