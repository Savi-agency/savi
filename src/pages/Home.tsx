import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from './Team';
import FAQ from './FAQ';
import { Brain, Target, BarChart as ChartBar } from 'lucide-react';

const Home = () => {
  // Function to scroll to different sections of the page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Agency Name (Like OUP Agency Placement) */}
      

          {/* Main Value Proposition */}
          <h2 className="text-5xl font-extrabold mt-4">
          Maximize returns - Cut acquisition costs
          </h2>

          {/* Highlighted Growth Message (Gradient Effect Like OUP Agency) */}
          <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-blue-500">
            Data-Driven Growth
          </p>

          {/* Supporting Text */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6 mb-6">
            Your growth solution is here! We help brands like yours acquire customers profitably and maximize retention & AOV with data-driven Meta Ads & high-converting email marketing. Our Guarantee: We will at least 3x your monthly recurring revenue or you don’t pay. No fluff, just results. Let’s build a scalable system for predictable, profitable growth!
          </p>

          {/* CTA Button (Matching OUP Agency Button Placement) */}
          <Link
  to="/book-call"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition duration-300 mt-6"
>
  Book a Demo
</Link>
        
        </div>
      </section>

      {/* Stats Section */}
      {/* (You can insert the Stats section here if needed) */}

      {/* Other Sections */}
      <section id="about" className="py-10">
        <About />
      </section>

      <section id="why-choose-us" className="py-10">
        <WhyChooseUs />
      </section>

      <section id="services" className="py-10">
        <Services />
      </section>

      <section id="process" className="py-10">
        <ProcessSection />
      </section>

      <section id="team" className="py-10">
        <Team />
      </section>

      <section id="faq" className="py-10">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
