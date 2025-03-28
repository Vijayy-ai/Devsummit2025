import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import appwrite1Logo from "../assets/sponsors/appwrite 1.png";
import xyzLogo from "../assets/sponsors/xyz.png";
import interviewbuddyLogo from "../assets/sponsors/interviewbuddy.png";
import keasbrainLogo from "../assets/sponsors/keasbrain.jpg";
import iicLogo from "../assets/IIC-LOGO 1.webp";
import juLogo from "../assets/UNIVERSITY NEW LOGO 3.png";
import istartLogo from "../assets/sponsors/iStart_logo.jpeg";
import DoitcLogo from "../assets/sponsors/DOITC logo.jpeg";
import givemycertificate from "../assets/sponsors/give my certificate.jpg";
import learnandbuild from "../assets/sponsors/learn and build.png";
import iciciBank from "../assets/sponsors/icici bank logo.png";
import upflairs from "../assets/sponsors/upflairs logo.jpg";
import engineersAcademy from "../assets/sponsors/engineers academy logo.png";
import nimbuslogo from "../assets/sponsors/nimbus logo 2.png";
import winnersacademy from "../assets/sponsors/winners academy.png";
import mediapartner from "../assets/sponsors/media partner.jpg";

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
      name: "Upflairs",
      logo: upflairs,
      description: "Training Partner",
      website: "https://upflairs.com/"
    },
    {
      name: " KeasBrain Technologies Private Limited",
      logo: keasbrainLogo,
      // description: "Decentralized Storage",
      website: "https://keasbrain.com/"
    },
    {
      name: "Appwrite",
      logo: appwrite1Logo,
      // description: "Web3 Infrastructure",
      website: "https://appwrite.io/"
    },
    {
      name: "Engineers Academy",
      logo: engineersAcademy,
      // description: "Interchain Infrastructure",
      website: "https://www.engineersacademy.org/"
    },
    {
      name: "XYZ",
      logo: xyzLogo,
      // description: "Interchain Infrastructure",
      website: "https://gen.xyz/"
    },
    {
      name: "Winners Academy",
      logo: winnersacademy,
      // description: "Interchain Infrastructure",
      // website: "https://gen.xyz/"
    },
    {
      name: "Interview Buddy",
      logo: interviewbuddyLogo,
      // description: "Decentralized Storage",
      website: "https://interviewbuddy.net/"
    },
    {
      name: "Nimbus",
      logo: nimbuslogo,
      // description: "Decentralized Storage",
      website: "https://iqvqn.courses.store/"
    },
    {
      name: "Give My Certificate",
      logo: givemycertificate,
      // description: "Decentralized Storage",
      website: "https://givemycertificate.com/"
    },
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
        {/* Organization Committee Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Organized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              By
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Organization Cards with Circular Design */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <a href="https://www.jagannathuniversity.org/" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white
                      border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                      transition-all duration-300 overflow-hidden
                      shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                      flex items-center justify-center p-4">
                      <img
                        src={juLogo}
                        alt="Jagannath University"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-[#A7FF40] text-center text-sm sm:text-base font-semibold
                      group-hover:text-white transition-colors duration-300">
                      Jagannath University Jaipur
                    </h3>
                  </div>
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <a href="https://www.iic.gov.in/" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white
                      border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                      transition-all duration-300 overflow-hidden
                      shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                      flex items-center justify-center p-4">
                      <img
                        src={iicLogo}
                        alt="IIC Cell"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-[#A7FF40] text-center text-sm sm:text-base font-semibold
                      group-hover:text-white transition-colors duration-300">
                      Institution's Innovation Council
                    </h3>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </SectionTransition>

        {/* State Ecosystem Partner Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            State Ecosystem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Partners
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <a href="https://istart.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white
                      border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                      transition-all duration-300 overflow-hidden
                      shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                      flex items-center justify-center p-4">
                      <img
                        src={istartLogo}
                        alt="IStart"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-[#A7FF40] text-center text-sm sm:text-base font-semibold
                      group-hover:text-white transition-colors duration-300">
                      iStart
                    </h3>
                  </div>
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <a href="https://doitc.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white
                      border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                      transition-all duration-300 overflow-hidden
                      shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                      flex items-center justify-center p-4">
                      <img
                        src={DoitcLogo}
                        alt="Dept. of IT & Communication"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-[#A7FF40] text-center text-sm sm:text-base font-semibold
                      group-hover:text-white transition-colors duration-300">
                      Dept. of IT & Communication
                    </h3>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </SectionTransition>

        {/* Banking Partner Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Banking{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Partner
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-4 sm:p-8
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                transition-all duration-300 group relative overflow-hidden mx-auto max-w-md"
            >
              <a href="https://www.icicibank.com/" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto mb-3 sm:mb-5 rounded-full bg-white
                    border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                    transition-all duration-300 overflow-hidden
                    shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                    flex items-center justify-center p-3 sm:p-4">
                    <img
                      src={iciciBank}
                      alt="ICICI Bank"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#A7FF40] text-center text-lg sm:text-xl font-bold
                    group-hover:text-white transition-colors duration-300 mb-1 sm:mb-2">
                    ICICI Bank
                  </h3>
                  <p className="text-center text-gray-300 text-xs sm:text-sm">
                    Official Banking Partner for DevSummit 2025
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </SectionTransition>

        {/* Media Partner Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Media{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Partner
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                transition-all duration-300 relative overflow-hidden mx-auto max-w-md"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white
                    border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                    transition-all duration-300 overflow-hidden
                    shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                    flex items-center justify-center p-4">
                    <img
                      src={mediapartner}
                      alt="California Studios"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#A7FF40] text-center text-sm sm:text-base font-semibold
                    group-hover:text-white transition-colors duration-300">
                    California Studios
                  </h3>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </SectionTransition>

        {/* Gold Sponsor Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Gold{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Sponsor
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-4 sm:p-8
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.2)] 
                transition-all duration-300 group relative overflow-hidden mx-auto max-w-md"
            >
              <a href="https://learnandbuild.in/" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto mb-3 sm:mb-5 rounded-full bg-white
                    border-2 border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                    transition-all duration-300 overflow-hidden
                    shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(167,255,64,0.15)]
                    flex items-center justify-center p-3 sm:p-4">
                    <img
                      src={learnandbuild}
                      alt="Learn and Build"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#A7FF40] text-center text-lg sm:text-xl font-bold
                    group-hover:text-white transition-colors duration-300 mb-1 sm:mb-2">
                    Learn and Build
                  </h3>
                  <p className="text-center text-gray-300 text-xs sm:text-sm">
                    Training & Development Partner
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </SectionTransition>

        {/* Our Sponsors Section */}
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Silver{" "}
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
