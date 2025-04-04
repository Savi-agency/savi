import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Users, BarChart as ChartBar, Shield } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "AI-Powered Strategy",
      description: "Leverage cutting-edge artificial intelligence for data-driven marketing decisions",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused audience segmentation",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Proven Results",
      description: "Track record of delivering exceptional ROI for fitness brands",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Expert Team",
      description: "Dedicated specialists with deep industry knowledge",
    },
    {
      icon: <ChartBar className="w-12 h-12 text-blue-400" />,
      title: "Real-Time Analytics",
      description: "24/7 performance monitoring and optimization",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Guaranteed Growth",
      description: "Performance-based approach focused on your success",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-400">
            Six reasons why we're the perfect partner for your fitness brand
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:from-blue-900/30 hover:to-transparent"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
