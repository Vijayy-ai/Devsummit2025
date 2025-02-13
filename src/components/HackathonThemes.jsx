import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const HackathonThemes = () => {
  const themes = [
    {
      title: "Artificial Intelligence & ML",
      description: "Explore innovative applications of AI and ML to solve real-world problems. Build intelligent systems that learn and adapt.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Blockchain & Web3",
      description: "Create decentralized applications that leverage blockchain technology, enhancing security and transparency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Internet of Things (IoT)",
      description: "Design smart devices and solutions that interact with the physical world. Use sensors and data to improve efficiency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Sustainability & Green Tech",
      description: "Build solutions that promote environmental sustainability, from renewable energy to waste reduction technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Healthcare Innovation",
      description: "Create innovative health solutions, from telemedicine to wearable devices that improve patient care and wellness.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Open Innovation",
      description: "Create innovative solutions that can address any real-world challenge or opportunity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const ThemeCard = ({ theme }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 
        border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
        shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
        transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl overflow-hidden bg-black p-2.5 sm:p-3 
        border border-[#A7FF40]/10 flex items-center justify-center mb-4 sm:mb-5"
      >
        <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
          {theme.icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#A7FF40] mb-3 text-center">
        {theme.title}
      </h3>
      <p className="text-gray-300 text-sm sm:text-base text-center flex-grow">
        {theme.description}
      </p>
    </motion.div>
  );

  return (
    <section id="themes" className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />
      
      {/* Animated stars overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
            Hackathon Themes
          </h2>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto">
            Choose from our exciting themes and build something amazing
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {themes.map((theme, index) => (
            <ThemeCard key={theme.title} theme={theme} />
          ))}
        </div>

        {/* Mobile/Tablet Sliding View */}
        <div className="lg:hidden overflow-hidden relative w-screen -mx-4">
          <div 
            className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap"
            style={{
              animationDuration: '40s',
              paddingLeft: '1rem'
            }}
          >
            {/* First set of themes */}
            {themes.map((theme, index) => (
              <ThemeCard key={`first-${index}`} theme={theme} />
            ))}
            {/* Duplicate set for seamless loop */}
            {themes.map((theme, index) => (
              <ThemeCard key={`second-${index}`} theme={theme} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 1s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
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
