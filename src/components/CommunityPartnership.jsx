import React from 'react';
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const CommunityPartnership = () => {
  const partners = [
    {
      name: "Polygon Guild Jaipur",
      logo: "https://via.placeholder.com/150",
      description: "Web3 & Blockchain Community"
    },
    {
      name: "Hayperlan",
      logo: "https://via.placeholder.com/150",
      description: "Tech Innovation Hub"
    },
    {
      name: "Geeky Hub Community",
      logo: "https://via.placeholder.com/150",
      description: "Developer Learning Community"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
            Community Partners
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the amazing communities supporting DevSummit Hackathon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden bg-black p-2 border border-[#A7FF40]/10">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#A7FF40] mb-2 text-center">
                {partner.name}
              </h3>
              <p className="text-gray-300 text-center">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Join as Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Become a Community Partner
            </h3>
            <p className="text-gray-300 mb-6">
              Join us in building the future of technology. Partner with DevSummit Hackathon and help us create an amazing developer community.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40] hover:text-black transition-all duration-300"
            >
              Partner With Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPartnership;
