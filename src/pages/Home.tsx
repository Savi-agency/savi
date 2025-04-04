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
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Agency Name (Like OUP Agency Placement) */}
      

        {/* Main Value Proposition */}
        <h2 className="text-5xl font-extrabold mt-4">
          Max ROI - Lower CAC.
        </h2>

        {/* Highlighted Growth Message (Gradient Effect Like OUP Agency) */}
        <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-blue-500">
          Data-Driven Growth
        </p>

        {/* Supporting Text */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
        Your growth solution is here!
        We help brands like yours acquire customers profitably and maximize retention & AOV with data-driven  Meta Ads & high-converting email marketing. Our Guarantee: We will at least 3x your monthly recurring revenue or you don’t pay.
No fluff, just results.
Let’s build a scalable system for predictable, profitable growth! 
        </p>

        {/* CTA Button (Matching OUP Agency Button Placement) */}
        <a 
            href="/book-call"
            className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 mt-7"
          >
            Book Your Free Demo Call
          </a>
        
      </div>
    </section>


      {/* Stats Section */}


      
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
