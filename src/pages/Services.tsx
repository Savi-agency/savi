import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Paid Social Advertising",
      description: "Strategic Facebook & Instagram ad campaigns optimized for maximum ROAS.",
      features: [
        "Custom audience targeting",
        "Creative A/B testing",
        "Performance tracking",
        "Budget optimization"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "E-commerce Growth",
      description: "Comprehensive strategies to scale your fitness e-commerce business.",
      features: [
        "Conversion optimization",
        "Sales funnel design",
        "Email marketing",
        "Analytics & reporting"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Email Marketing",
      description: "Boost retention and revenue with high-converting email flows and campaigns.",
      features: [
        "Klaviyo flow setup",
        "Campaign management",
        "List segmentation",
        "Performance reporting"
      ]
    }
  ];

  // Function to determine if the service section is in view
  const isInView = (index: number) => {
    const serviceElement = document.getElementById(`service-${index}`);
    if (serviceElement) {
      const rect = serviceElement.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
    return false;
  };

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400">
            Comprehensive solutions for fitness brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const inView = isInView(index); // Check if the current service is in view

            return (
              <motion.div
                id={`service-${index}`}
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-white/10 hover:border-blue-500/50 transition duration-300 hover:bg-gradient-to-br hover:from-blue-900 hover:to-transparent"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-gray-400 mb-6"
                >
                  {service.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="space-y-3"
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
              </motion.div>
            );
            
          })}
                <div className="md:col-span-3 flex justify-center mt-10">
    <a
      href="/book-call"
      className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
    >
      Partner With Us
    </a>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
