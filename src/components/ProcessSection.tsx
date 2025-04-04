import React from "react";
import { motion } from "framer-motion";

const processDays = [
  {
    day: "3 Days",
    steps: [
      "Initial Strategy Call",
      "Account Analysis",
      "Custom Plan Development"
    ]
  },
  {
    day: "7 Days",
    steps: [
      "Campaign Setup",
      "Audience Research",
      "Creative Development",
      "Launch"
    ]
  },
  {
    day: "30 Days",
    steps: [
      "Deep Data Analysis",
      "A/B Testing",
      "Scaling",
      "Performance Optimization"
    ]
  },
  {
    day: "50 Days",
    steps: [
      "Performance Review",
      "Strategy Adjustment",
      "Continued Scaling"
    ]
  },
  {
    day: "60 Days",
    steps: [
      "Advanced Analytics",
      "Optimization Push",
      "Audience Re-engagement"
    ]
  },
  {
    day: "90 Days",
    steps: [
      "Final Report",
      "Long-Term Strategy Planning",
      "Client Review"
    ]
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-xl text-gray-400">A step-by-step journey of success</p>
        </div>

        {/* Horizontal Timeline */}
        <div
          className="flex space-x-8 pb-8 animate-scroll-container"
          style={{ animation: "scroll 30s linear infinite" }} // Unstoppable scroll animation
        >
          {processDays.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
              className="min-w-[300px] bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg text-white border-2 border-gray-700 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-900 hover:to-transparent hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold mb-4">{process.day}</h3>
              <ul className="space-y-2">
                {process.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-300"
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for Continuous Scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll-container {
            display: flex;
            animation: scroll 30s linear infinite;
            padding-bottom: 2rem;
          }
        `}
      </style>
    </section>
  );
};

export default ProcessSection;
