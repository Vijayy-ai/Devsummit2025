import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "TechCorp", logo: "https://via.placeholder.com/200x100" },
        { name: "InnovateX", logo: "https://via.placeholder.com/200x100" },
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "DevTools", logo: "https://via.placeholder.com/180x90" },
        { name: "CloudNet", logo: "https://via.placeholder.com/180x90" },
        { name: "CodeLabs", logo: "https://via.placeholder.com/180x90" },
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "WebTech", logo: "https://via.placeholder.com/160x80" },
        { name: "DataSys", logo: "https://via.placeholder.com/160x80" },
        { name: "AILabs", logo: "https://via.placeholder.com/160x80" },
        { name: "DevOps", logo: "https://via.placeholder.com/160x80" },
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
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
      <div className="container relative z-10 mx-auto">
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
            Thank you to our amazing sponsors who make this event possible
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              className="relative"
            >
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                {/* Tier Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-[#A7FF40] mb-8 text-center">
                  {tier.tier}
                </h3>

                {/* Sponsors Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(tier.sponsors.length, 4)} gap-8 items-center justify-items-center`}>
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (tierIndex * 0.1) + (sponsorIndex * 0.1) }}
                      className="group relative w-full max-w-xs"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                        />
                        <p className="text-gray-300 text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {sponsor.name}
                        </p>
                      </div>
                      {/* Hover Effect Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-300 mb-6">
              Join our growing list of sponsors and support the next generation of developers.
              Get exclusive benefits and brand visibility at DevSummit Hackathon.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-[#A7FF40] text-black rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get Sponsorship Details
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
