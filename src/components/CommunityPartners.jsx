import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import {
  fadeInUp,
  staggerContainer,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const CommunityPartners = () => {
  const partners = [
    {
      name: "Hyperlane",
      logo: "path/to/hyperlane-logo",
      // ... other partner details
    },
    {
      name: "Polygon Guild Jaipur",
      logo: "path/to/polygon-logo",
      // ... other partner details
    },
    {
      name: "Geeky Hub Community",
      logo: "path/to/geekyhub-logo",
      // ... other partner details
    },
    // ... other partners
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgDevSummit})` }}
        />
        <div className="animated-bg" />
        <FloatingParticles count={30} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Community{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Partners
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Collaborating with amazing communities to make this event special
          </motion.p>
        </SectionTransition>

        {/* Static Grid Layout */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-full aspect-video flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-white text-center font-medium">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners; 