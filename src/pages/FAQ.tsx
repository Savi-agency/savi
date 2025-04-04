import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your marketing approach unique?",
      answer:
        "We combine AI-powered analytics with proven marketing strategies, specifically tailored for fitness brands. Our approach focuses on data-driven decisions and continuous optimization to maximize ROI.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "While results can vary, most clients see initial improvements within the first month. Significant results typically become apparent within 2-3 months of implementing our strategies.",
    },
    {
      question: "What's your minimum ad spend requirement?",
      answer:
        "Our minimum monthly ad spend requirement is $5,000. This ensures we have enough budget to effectively test and optimize campaigns for maximum performance.",
    },
    {
      question: "Do you offer month-to-month contracts?",
      answer:
        "Yes, we offer flexible month-to-month contracts. However, we recommend a minimum 3-month commitment to fully implement and optimize our strategies.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track key performance indicators including ROAS, CAC, conversion rates, and revenue growth. We provide detailed monthly reports and real-time dashboards for transparency.",
    },
  ];

  return (
    <div className="pt-24 pb-16" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-xl text-gray-400">
            Common questions about our services
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left backdrop-blur-sm bg-gradient-to-br from-white/5 to-black/20 hover:from-blue-900/10 hover:to-blue-800/10 transition duration-300"
              >
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition duration-300">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white/5 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-white/10"
>
  <h2 className="text-3xl font-bold mb-4 leading-tight">
    Ready to Completely Transform the Way You Do Marketing?
  </h2>
  <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto">
    Discover how our AI-powered strategies and performance marketing systems can unlock new levels of growth for your skincare brand. Let’s build a scalable, profitable marketing engine—together.
  </p>
  <a
    href="/book-call"
    className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
  >
    Book Your Free Strategy Call
  </a>
</motion.div>
      </div>
    </div>
  );
};

export default FAQ;
