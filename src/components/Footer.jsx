import React from "react";
import bgImage from "../assets/bgDevSummit.png";
import X from "../assets/X.png"
import Linkedin from "../assets/Linkedin.png"
import Instagram from "../assets/Instagram.png"
import Discord from "../assets/discord.png"
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "Mentors", href: "#mentors" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="animated-bg" />
        <FloatingParticles count={30} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Section */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
              variants={fadeInUp}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
                DevSummit
              </span>
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0 mb-6"
              variants={fadeInUp}
            >
              The ultimate hackathon event to bring together innovators and creators.
            </motion.p>

            {/* Term and Condition */}
            <motion.div 
              className="text-sm md:text-base space-x-4 mb-6"
              variants={fadeInUp}
            >
              <a 
                href="/terms" 
                className="text-gray-300 hover:text-[#A7FF40] transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="/privacy" 
                className="text-gray-300 hover:text-[#A7FF40] transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </motion.div>

            <motion.p 
              className="text-sm md:text-base text-gray-400"
              variants={fadeInUp}
            >
              &copy; {new Date().getFullYear()} DevSummit. All rights reserved.
            </motion.p>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h4 
              className="text-xl md:text-2xl font-bold text-[#A7FF40] mb-4"
              variants={fadeInUp}
            >
              Quick Links
            </motion.h4>
            <motion.div 
              className="grid grid-cols-2 gap-2"
              variants={staggerContainer}
            >
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={fadeInUp}
                  whileHover={{ x: 5, color: "#A7FF40" }}
                  className="text-gray-300 hover:text-[#A7FF40] transition-colors duration-300 text-sm md:text-base"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Social Media */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end justify-center space-y-6"
          >
            <motion.h4 
              className="text-xl md:text-2xl font-bold text-[#A7FF40] mb-2"
              variants={fadeInUp}
            >
              Connect With Us
            </motion.h4>
            <motion.div 
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/devsummit2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur-sm p-3 rounded-xl 
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300"
              >
                <img 
                  src={X} 
                  alt="Twitter" 
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/devsummit2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur-sm p-3 rounded-xl 
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/dev-summit-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur-sm p-3 rounded-xl 
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300"
              >
                <img
                  src={Linkedin}
                  alt="LinkedIn"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </motion.a>
               <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/gTbN5e3PgJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur-sm p-3 rounded-xl 
                  border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                  transition-all duration-300"
              >
                <img
                  src={Discord}
                  alt="Discord"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
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
    </footer>
  );
}

export default Footer;
