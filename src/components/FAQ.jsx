import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is DevSummit Hackathon?",
      answer: "DevSummit Hackathon is a coding competition where participants collaborate to create innovative solutions within a specified timeframe."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for coding and innovation can participate. Whether you're a student, professional, or hobbyist developer."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or form a team of up to 4 members. We also have team formation events to help you find teammates."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in DevSummit Hackathon is completely free of charge."
    },
    {
      question: "What are the prizes?",
      answer: "We have exciting prizes including cash rewards, internship opportunities, and exclusive merchandise for winners."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black">
      {/* Enhanced Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgDevSummit})` }}
        />
        <div className="animated-bg" />
        <FloatingParticles count={30} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <SectionTransition className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white"
            variants={fadeInUp}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Questions
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Got questions? We've got answers!
          </motion.p>
        </SectionTransition>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 overflow-hidden group"
            >
              <motion.button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.002 }}
                whileTap={{ scale: 0.998 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-[#A7FF40] group-hover:text-[#A7FF40] transition-colors">
                    {faq.question}
                  </span>
                  <motion.svg
                    className="w-6 h-6 text-[#A7FF40] transition-transform duration-300"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default FAQ;
