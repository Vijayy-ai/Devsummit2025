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

const Sponsors = () => {
  const titleSponsor = {
    name: "Coming Soon",
    logo: "https://via.placeholder.com/300",
    description: "Coming Soon"
  };

  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      description: "Coming Soon",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      tier: "Gold Sponsors",
      description: "Coming Soon",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      tier: "Silver Sponsors",
      description: "Coming Soon",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      tier: "Bronze Sponsors",
      sponsors: [
        {
          name: "DevTools Pro",
          logo: "https://via.placeholder.com/150",
          description: "Professional development tools"
        },
        {
          name: "CloudNet",
          logo: "https://via.placeholder.com/150",
          description: "Cloud networking solutions"
        },
        {
          name: "SecureStack",
          logo: "https://via.placeholder.com/150",
          description: "Security infrastructure"
        }
      ]
    }
  ];

  return (
    <section id="sponsors" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black">
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
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Sponsors
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Meet the amazing organizations supporting DevSummit Hackathon
          </motion.p>
        </SectionTransition>

        {/* Title Sponsor */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 sm:mb-20"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
              transition-all duration-300 relative overflow-hidden group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.div 
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-xl overflow-hidden bg-black/50 p-4 
                  border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-6
                  relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full aspect-video flex items-center justify-center mb-4"
                >
                  <img
                    src={titleSponsor.logo}
                    alt={titleSponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              </motion.div>
              <motion.h4 
                className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-2 text-center"
                variants={fadeInUp}
              >
                {titleSponsor.name}
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm sm:text-base text-center"
                variants={fadeInUp}
              >
                {titleSponsor.description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Other Sponsor Tiers */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {sponsorTiers.slice(1).map((tier, index) => (
            <motion.div
              key={tier.tier}
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
                >
                  <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                    {tier.icon}
                  </div>
                </motion.div>
                <motion.h4 
                  className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 text-center"
                  variants={fadeInUp}
                >
                  {tier.tier}
                </motion.h4>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base text-center"
                  variants={fadeInUp}
                >
                  {tier.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Become a Sponsor CTA */}
        <SectionTransition>
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16 sm:mt-20"
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
                  Become a Sponsor
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6"
                  variants={fadeInUp}
                >
                  Support the next generation of developers and innovators.
                  Join us in making DevSummit Hackathon a success!
                </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
            href="#contact"
                  className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 
                    bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold 
                    hover:bg-[#A7FF40] hover:text-black transition-all duration-300
                    text-sm sm:text-base relative overflow-hidden group"
                  style={{
                    boxShadow: "0 0 10px rgba(167,255,64,0.6), 0 0 20px rgba(167,255,64,0.4)",
                  }}
                >
                  <span className="relative z-10">Contact Us</span>
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

export default Sponsors;
