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
import { AiOutlineRobot } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { FaHospital, FaLightbulb } from "react-icons/fa";
import { MdEco } from "react-icons/md";

const HackathonThemes = () => {
  const themes = [
    {
      id: 1,
      title: "AI/ML",
      description:
        "Develop innovative solutions using Artificial Intelligence and Machine Learning to solve real-world problems.",
      icon: <AiOutlineRobot className="text-4xl" />,
    },
    {
      id: 2,
      title: "IoT Applications",
      description:
        "Create smart solutions using Internet of Things technology to connect and enhance everyday devices and systems.",
      icon: <MdDevices className="text-4xl" />,
    },
    {
      id: 3,
      title: "Blockchain/Web 3.0",
      description:
        "Build decentralized applications and explore innovative use cases of blockchain technology.",
      icon: <SiHiveBlockchain className="text-4xl" />,
    },
    {
      id: 4,
      title: "Healthcare",
      description:
        "Develop solutions to improve healthcare delivery, patient care, and medical technology innovations.",
      icon: <FaHospital className="text-4xl" />,
    },
    {
      id: 5,
      title: "Open Innovation",
      description:
        "Create solutions for any domain using cutting-edge technologies and creative problem-solving approaches.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      id: 6,
      title: "Sustainable Development",
      description:
        "Build solutions focusing on environmental sustainability, renewable energy, and eco-friendly technologies.",
      icon: <MdEco className="text-4xl" />,
    },
  ];

  const ThemeCard = ({ theme, index, total }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.03, y: -5 }}
      className="inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
        border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
        shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
        transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container with rotation animation */}
      <motion.div 
        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl overflow-hidden bg-black/50 p-3 
          border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/40
          transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
          {theme.icon}
        </div>
      </motion.div>

      {/* Content */}
      <motion.h3 
        className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 text-center relative z-10 break-words"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 }
        }}
      >
        {theme.title}
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-sm sm:text-base text-center flex-grow relative z-10 break-words"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }}
      >
        {theme.description}
      </motion.p>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#A7FF40]/5 rounded-full blur-xl group-hover:bg-[#A7FF40]/10 transition-colors duration-300" />
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#A7FF40]/5 rounded-full blur-xl group-hover:bg-[#A7FF40]/10 transition-colors duration-300" />
    </motion.div>
  );

  return (
    <section id="themes" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black">
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
            Hackathon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Themes
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Choose from our exciting themes and build something amazing
          </motion.p>
        </SectionTransition>

        {/* Desktop Grid View */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:grid grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {themes.map((theme, index) => (
            <ThemeCard 
              key={theme.title} 
              theme={theme} 
              index={index}
              total={themes.length}
            />
          ))}
        </motion.div>

        {/* Mobile/Tablet Sliding View */}
        <div className="lg:hidden overflow-hidden relative w-screen -mx-4">
          <motion.div 
            className="flex gap-4 sm:gap-6 animate-scroll pl-4"
            style={{
              animationDuration: '40s'
            }}
          >
            {/* First set of themes */}
            {themes.map((theme, index) => (
              <ThemeCard 
                key={`first-${theme.title}`} 
                theme={theme} 
                index={index}
                total={themes.length}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {themes.map((theme, index) => (
              <ThemeCard 
                key={`second-${theme.title}`} 
                theme={theme} 
                index={index}
                total={themes.length}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{sectionStyles}</style>
      <style jsx>{`
        .animate-scroll {
          animation: scroll linear infinite;
          min-width: max-content;
          will-change: transform;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.75rem)); }
        }
      `}</style>
    </section>
  );
};

export default HackathonThemes;
