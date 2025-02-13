import React from 'react';
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import platformPartner from "../assets/platform-partner.jpg";

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
      whileHover={{ scale: 1.02 }}
      className={`inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 
        border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
        shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
        transition-all duration-300`}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-xl overflow-hidden bg-black p-2 border border-[#A7FF40]/10">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#A7FF40] mb-2 text-center">
        {partner.name}
      </h3>
      <p className="text-gray-300 text-sm text-center">
        {partner.description}
      </p>
    </motion.div>
  );

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
            Our Partners
          </h2>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto">
            Meet the amazing partners supporting DevSummit Hackathon
          </p>
        </motion.div>

        {/* Platform Partner */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Platform Partner</h3>
          <div className="flex justify-center">
            <PartnerCard partner={partners.find(p => p.type === "platform")} />
          </div>
        </div>

        {/* Community Partners Slider */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Community Partners</h3>
          <div className="overflow-hidden relative w-screen -mx-4">
            <div 
              className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap"
              style={{
                animationDuration: '40s',
                paddingLeft: '1rem'
              }}
            >
              {/* First set of community partners */}
              {partners.filter(p => p.type === "community").map((partner, index) => (
                <PartnerCard key={`first-${index}`} partner={partner} />
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.filter(p => p.type === "community").map((partner, index) => (
                <PartnerCard key={`second-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Join as Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
            shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
            transition-all duration-300 max-w-2xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 sm:mb-4">
              Become a Partner
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Join us in building the future of technology. Partner with DevSummit Hackathon and help us create an amazing developer community.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1a1a1a] text-[#A7FF40] 
                border-2 border-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40] hover:text-black 
                transition-all duration-300 text-sm sm:text-base"
            >
              Partner With Us
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

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

export default CommunityPartnership;
