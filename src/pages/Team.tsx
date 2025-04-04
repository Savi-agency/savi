import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import kadirov from '../images/kadirov.png';
import mutalibov from '../images/mutalibov.jpeg';
import random from '../images/random.jpg';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const team = [
    {
      name: "Umidjon Kadirov",
      role: "CEO & Founder",
      image: kadirov,
      bio: "Digital marketing Expert",
    },
    {
      name: "Mutalibov",
      role: "Head of AI Strategy",
      image: mutalibov,
      bio: "AI specialist with a focus on marketing automation.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: random,
      bio: "Expert in skincare industry marketing and brand development.",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-400">Meet the experts behind our success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
