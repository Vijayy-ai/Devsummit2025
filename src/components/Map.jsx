import React from 'react';
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

const Map = () => {
  return (
    <section id="map" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
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
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Location
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join us at our state-of-the-art venue
          </motion.p>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Map */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="w-full h-[400px] bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl overflow-hidden 
              border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
              transition-all duration-300 relative group"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.139705455775!2d75.84653207536897!3d26.77254967655699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sJagannath%20University%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1710425163479!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            ></iframe>
          </motion.div>

          {/* Location Details */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div 
                className="w-12 h-12 mx-auto rounded-xl overflow-hidden bg-black/50 p-3 
                  border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5
                  relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-full h-full text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold text-[#A7FF40] mb-4 text-center relative z-10">
                Venue Address
              </h3>
              <p className="text-gray-300 text-center relative z-10">
                Jagannath University, Jaipur<br />
                Plot No. IS-2036 to IS-2039<br />
                Ramchandrapura Industrial Area<br />
                Sitapura Extension, Jaipur - 302022
              </p>
            </motion.div>

            {/* Transportation Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div 
                className="w-12 h-12 mx-auto rounded-xl overflow-hidden bg-black/50 p-3 
                  border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 flex items-center justify-center mb-5
                  relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-full h-full text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold text-[#A7FF40] mb-4 text-center relative z-10">
                How to Reach
              </h3>
              <ul className="space-y-3 text-gray-300 relative z-10">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7FF40] mt-2 mr-2 flex-shrink-0" />
                  <span>Nearest Airport: Jaipur International Airport (12 km)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7FF40] mt-2 mr-2 flex-shrink-0" />
                  <span>Nearest Railway Station: Jaipur Junction (15 km)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7FF40] mt-2 mr-2 flex-shrink-0" />
                  <span>Bus Stop: Sitapura Bus Stand (1 km)</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Get Directions Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://goo.gl/maps/QZZHv8KkCcJ2" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] text-[#A7FF40] 
              border-2 border-[#A7FF40] rounded-full font-semibold 
              hover:bg-[#A7FF40] hover:text-black transition-all duration-300 
              relative overflow-hidden group"
            style={{
              boxShadow: "0 0 10px rgba(167,255,64,0.6), 0 0 20px rgba(167,255,64,0.4)",
            }}
          >
            <span className="relative z-10">Get Directions</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
            <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default Map;
