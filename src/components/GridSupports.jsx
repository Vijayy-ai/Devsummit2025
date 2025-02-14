import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const GridSupports = () => {
  const gridItems = Array.from({ length: 9 }).map((_, index) => ({
    id: index,
    delay: index * 0.1
  }));

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="aspect-video bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
              transition-all duration-300 relative overflow-hidden group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-12 h-12 rounded-xl overflow-hidden bg-black/50 p-3 
                  border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 
                  relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{sectionStyles}</style>
    </motion.div>
  );
};

export default GridSupports;
