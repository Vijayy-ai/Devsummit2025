import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Sponsors = () => {
  const titleSponsor = {
    name: "TechGiant Solutions",
    logo: "https://via.placeholder.com/300",
    description: "Global Leader in Technology Innovation"
  };

  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      tier: "Gold Sponsors",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      tier: "Silver Sponsors",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
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
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
            Our Sponsors
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the amazing organizations supporting DevSummit Hackathon
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-[#A7FF40] text-center mb-10"
          >
            Title Sponsor
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#1a1a1a] rounded-xl p-10 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="w-full h-60 mb-8 rounded-lg overflow-hidden bg-black p-6 border border-[#A7FF40]/10">
                <img
                  src={titleSponsor.logo}
                  alt={titleSponsor.name}
                  className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 text-center">{titleSponsor.name}</h4>
              <p className="text-gray-300 text-lg text-center">{titleSponsor.description}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden bg-black p-2 border border-[#A7FF40]/10 flex items-center justify-center">
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold text-[#A7FF40] mb-2 text-center">
                {tier.tier}
              </h3>
              <div className="text-2xl font-bold text-white mb-2 text-center">
                Coming Soon
              </div>
              <p className="text-gray-300 text-center">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40] hover:text-black transition-all duration-300"
          >
            Become a Sponsor
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
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
      `}</style>
    </section>
  );
};

export default Sponsors;
