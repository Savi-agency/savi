import React from "react";
import { motion } from "framer-motion";

const processDays = [
  {
    day: "3 Days",
    steps: [
      "Initial Strategy Call",
      "Account Analysis",
      "Custom Plan Development",
    ],
  },
  {
    day: "7 Days",
    steps: [
      "Campaign Setup",
      "Audience Research",
      "Creative Development",
      "Launch",
    ],
  },
  {
    day: "30 Days",
    steps: [
      "Deep Data Analysis",
      "A/B Testing",
      "Scaling",
      "Performance Optimization",
    ],
  },
  {
    day: "50 Days",
    steps: [
      "Performance Review",
      "Strategy Adjustment",
      "Continued Scaling",
    ],
  },
  {
    day: "60 Days",
    steps: [
      "Advanced Analytics",
      "Optimization Push",
      "Audience Re-engagement",
    ],
  },
  {
    day: "90 Days",
    steps: [
      "Final Report",
      "Long-Term Strategy Planning",
      "Client Review",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400">A step-by-step journey of success</p>
        </div>

        {/* Scrolling Cards */}
        <div className="relative">
          <div
            className="flex space-x-8 animate-scroll"
          >
            {processDays.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="min-w-[280px] bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg text-white border border-gray-700 hover:from-blue-900 hover:to-transparent hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{process.day}</h3>
                <ul className="space-y-2">
                  {process.steps.map((step, i) => (
                    <li key={i} className="text-gray-300">
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Scrolling Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
