import React from 'react';
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import platformPartner from "../assets/platform-partner.jpg";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const CommunityPartnership = () => {
  const partners = [
    {
      name: "HackQuest",
      logo: platformPartner,
      description: "Platform Partner",
      type: "platform"
    },
    {
      name: "Polygon Guild Jaipur",
      logo: "https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo.webp",
      description: "Web3 & Blockchain Community",
      type: "community"
    },
    {
      name: "Hayperlan",
      logo: "https://cryptocurrencyjobs.co/startups/assets/logos/hyperlane.jpg",
      description: "Tech Innovation Hub",
      type: "community"
    },
    {
      name: "Geeky Hub Community",
      logo: "https://ugc.production.linktr.ee/Nr4lfuCToyRPTtwTCvFp_0wRPTPJgQKMnCH95?io=true&size=avatar-v3_0",
      description: "Developer Learning Community",
      type: "community"
    }
  ];

  const PartnerCard = ({ partner }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.03, y: -5 }}
      className="w-full max-w-[320px] bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
        border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
        shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
        transition-all duration-300 relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl overflow-hidden bg-black/50 p-2 
            border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5
            relative"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.h3 
          className="text-lg sm:text-xl font-bold text-[#A7FF40] mb-2 text-center"
          variants={fadeInUp}
        >
          {partner.name}
        </motion.h3>
        <motion.p 
          className="text-gray-300 text-sm text-center"
          variants={fadeInUp}
        >
          {partner.description}
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black">
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
      <div className="container relative z-10 mx-auto px-4">
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Partners
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Meet the amazing partners supporting DevSummit Hackathon
          </motion.p>
        </SectionTransition>

        {/* Platform Partner */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
          >
            Platform Partner
          </motion.h3>
          <div className="flex justify-center px-4">
            <PartnerCard partner={partners.find(p => p.type === "platform")} />
          </div>
        </motion.div>

        {/* Community Partners Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
          >
            Community Partners
          </motion.h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
              {partners.filter(p => p.type === "community").map((partner) => (
                <div className="flex justify-center">
                  <PartnerCard key={partner.name} partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Join as Partner CTA */}
        <SectionTransition>
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto px-4"
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
                  Become a Partner
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6"
                  variants={fadeInUp}
                >
                  Join us in building a stronger tech community.
                  Partner with DevSummit Hackathon and make a difference!
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

export default CommunityPartnership;
