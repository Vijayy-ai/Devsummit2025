import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const Prizes = () => {
  const prizes = [
    {
      title: "Grand Prize Pool",
      amount: "₹1,50,000",
      description: "Total prize pool for innovative solutions",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Special Categories",
      amount: "Exciting Prizes",
      description: "Best UI/UX, Most Innovative, Best Use of AI",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Internship Opportunities",
      amount: "Career Growth",
      description: "Chance to work with leading tech companies",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Swag & Goodies",
      amount: "For Everyone",
      description: "T-shirts, stickers, and exclusive merchandise",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="prizes" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4">
        <SectionTransition className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white"
            variants={fadeInUp}
          >
            Prizes &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Rewards
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Win big with your innovative solutions
          </motion.p>
        </SectionTransition>

        {/* Prize Pool Highlight */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
              transition-all duration-300 max-w-3xl mx-auto relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#A7FF40]/5 rounded-full blur-xl group-hover:bg-[#A7FF40]/10 transition-colors duration-300" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#A7FF40]/5 rounded-full blur-xl group-hover:bg-[#A7FF40]/10 transition-colors duration-300" />
            
            <motion.h3 
              className="text-4xl md:text-6xl font-bold text-[#A7FF40] mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ₹1,50,000
            </motion.h3>
            <motion.p 
              className="text-2xl text-white mb-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Total Prize Pool
            </motion.p>
            <motion.p 
              className="text-gray-300 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Turn your ideas into reality and win amazing prizes
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Prize Categories */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              variants={fadeInUp}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon container with rotation animation */}
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl overflow-hidden bg-black/50 p-3 
                  border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5 sm:mb-6
                  relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                  {prize.icon}
                </div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold text-[#A7FF40] mb-2 text-center relative z-10"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                {prize.title}
              </motion.h3>
              <motion.div 
                className="text-2xl font-bold text-white mb-2 text-center relative z-10"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
              >
                {prize.amount}
              </motion.div>
              <motion.p 
                className="text-gray-300 text-center relative z-10"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
              >
                {prize.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default Prizes;
