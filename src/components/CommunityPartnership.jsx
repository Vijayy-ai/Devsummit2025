import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const CommunityPartnership = () => {
  const partners = [
    {
      name: "Tech Community Hub",
      logo: "https://via.placeholder.com/150",
      description: "Building the future of tech communities",
    },
    {
      name: "Developer Network",
      logo: "https://via.placeholder.com/150",
      description: "Connecting developers worldwide",
    },
    {
      name: "Code Academy",
      logo: "https://via.placeholder.com/150",
      description: "Empowering future developers",
    },
    {
      name: "Innovation Labs",
      logo: "https://via.placeholder.com/150",
      description: "Fostering tech innovation",
    },
  ];

  const benefits = [
    {
      title: "Network Growth",
      description: "Expand your community's reach and connect with diverse tech enthusiasts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Brand Visibility",
      description: "Showcase your community to a highly engaged tech audience",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Exclusive Access",
      description: "Get priority access to DevSummit events and resources",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: "Collaborative Events",
      description: "Co-create and host tech events with DevSummit",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
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
            Community Partnership
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Join forces with DevSummit and be part of the largest tech community network
          </p>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#A7FF40] text-center mb-12">
            Our Community Partners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-xl filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <h4 className="text-xl font-semibold text-white mb-2">{partner.name}</h4>
                  <p className="text-gray-300 text-sm">{partner.description}</p>

                  {/* Hover Effect Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#A7FF40] text-center mb-12">
            Partnership Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-105">
                  <div className="w-12 h-12 bg-[#A7FF40]/20 rounded-xl flex items-center justify-center mb-6 text-[#A7FF40] group-hover:bg-[#A7FF40]/30 transition-colors">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>

                  {/* Hover Effect Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Become a Community Partner
            </h3>
            <p className="text-gray-300 mb-6">
              Join our growing network of tech communities and help shape the future of technology together.
              Get exclusive benefits and opportunities for your community members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-[#A7FF40] text-black rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Partner with Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center px-8 py-3 border-2 border-[#A7FF40] text-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40]/10 transition-all duration-300 transform hover:scale-105"
              >
                View Benefits
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPartnership;
