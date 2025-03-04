import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import appwrite1Logo from "../assets/appwrite 1.png";
import xyzLogo from "../assets/xyz.png";
import interviewbuddyLogo from "../assets/interviewbuddy.png";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Appwrite",
      logo: appwrite1Logo,
      // description: "Web3 Infrastructure",
      website: "https://appwrite.io/"
    },
    {
      name: "XYZ",
      logo: xyzLogo,
      // description: "Interchain Infrastructure",
      website: "https://gen.xyz/"
    },
    {
      name: "Interview Buddy",
      logo: interviewbuddyLogo,
      // description: "Decentralized Storage",
      website: "https://interviewbuddy.net/"
    },
   
    {
      name: "Coming Soon",
      logo: "", // Empty logo for coming soon card
      description: "More sponsors to be announced",
      isComingSoon: true
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

          {/* Sponsors Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                variants={fadeInUp}
                whileHover={sponsor.isComingSoon ? {} : { scale: 1.05 }}
                whileTap={sponsor.isComingSoon ? {} : { scale: 0.95 }}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-5
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300 relative overflow-hidden group
                  flex flex-col items-center"
                onClick={() => sponsor.website && window.open(sponsor.website, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Container */}
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl overflow-hidden bg-black/50 p-2 
                    border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5
                    relative cursor-pointer"
                >
                  {sponsor.isComingSoon ? (
                    <svg className="w-12 h-12 text-[#A7FF40]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </motion.div>

                {/* Text Content */}
                <h4 className="text-[#A7FF40] text-lg font-semibold text-center mb-2 relative z-10">
                  {sponsor.name}
                </h4>
                <p className="text-gray-300 text-sm text-center relative z-10">
                  {sponsor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </SectionTransition>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default Sponsors;
