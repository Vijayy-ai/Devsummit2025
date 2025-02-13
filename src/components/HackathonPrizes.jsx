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

const HackathonPrizes = () => {
  const prizes = [
    {
      title: "1st Prize",
      description: "₹50,000 cash prize + Exclusive DevSummit Trophy",
      details: "Awarded to the team with the most innovative and impactful project.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "2nd Prize",
      description: "₹30,000 cash prize + Mentorship Session",
      details: "Awarded to the team with the second-best project, showcasing technical excellence.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "3rd Prize",
      description: "₹20,000 cash prize + Swag Packs",
      details: "Awarded to the team with the third-best project based on creativity and implementation.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Best Student Project",
      description: "₹10,000 cash prize + Internship Opportunities",
      details: "Awarded to the best project created by students, offering valuable industry experience.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Audience Choice Award",
      description: "₹5,000 cash prize + Free Tickets to Future Events",
      details: "Awarded to the project with the most public votes during the hackathon.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="prizes" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black">
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
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Exciting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Prizes
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Win amazing prizes and recognition for your innovation
          </motion.p>
        </SectionTransition>

        {/* Prize Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 mx-auto rounded-xl overflow-hidden bg-black/50 p-3 
                    border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5
                    relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                    {prize.icon}
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 text-center"
                  variants={fadeInUp}
                >
                  {prize.title}
                </motion.h3>
                <motion.div 
                  className="text-lg sm:text-xl font-bold text-white mb-2 text-center"
                  variants={fadeInUp}
                >
                  {prize.description}
                </motion.div>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base text-center"
                  variants={fadeInUp}
                >
                  {prize.details}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total Prize Pool */}
        <SectionTransition>
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 sm:mb-4"
                  variants={fadeInUp}
                >
                  Total Prize Pool
                </motion.h3>
                <motion.div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                  variants={fadeInUp}
                >
                  ₹1,15,000
                </motion.div>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6"
                  variants={fadeInUp}
                >
                  Plus exclusive swag, mentorship sessions, and internship opportunities!
                </motion.p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#register"
                  className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 
                    bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold 
                    hover:bg-[#A7FF40] hover:text-black transition-all duration-300
                    text-sm sm:text-base relative overflow-hidden group"
                  style={{
                    boxShadow: "0 0 10px rgba(167,255,64,0.6), 0 0 20px rgba(167,255,64,0.4)",
                  }}
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </SectionTransition>
      </div>

      <style jsx>{`
        .animated-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(167, 255, 64, 0.1) 0%, transparent 50%);
          opacity: 0.5;
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default HackathonPrizes;
